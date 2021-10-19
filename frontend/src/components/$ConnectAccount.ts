import { Behavior, combineArray, O } from "@aelea/core"
import { $element, $Node, $text, attr, component, style, styleInline } from "@aelea/dom"
import { $column, $row, layoutSheet, state } from "@aelea/ui-components"
import { pallete } from "@aelea/ui-components-theme"
import { awaitPromises, constant, empty, fromPromise, map, multicast, now, switchLatest, tap } from "@most/core"
import { Stream } from "@most/types"
import { IEthereumProvider } from "eip1193-provider"
import { CHAIN, IWalletLink } from "wallet-link"
import { $icon, $walletConnectLogo } from "../common/$icons"
import { attemptToSwitchNetwork, metamaskQuery, walletConnect } from "../common/wallets"
import { $ButtonPrimary } from "./form/$Button"



export interface IIntermediateDisplay {
  $display: $Node
  walletLink: Stream<IWalletLink | null>
}

export const $IntermediateDisplay = (config: IIntermediateDisplay) => component((
  // [connectedWalletSucceed, connectedWalletSucceedTether]: Behavior<any, T>,
  [switchNetwork, switchNetworkTether]: Behavior<PointerEvent, IEthereumProvider>,
  [walletChange, walletChangeTether]: Behavior<PointerEvent, IEthereumProvider | null>,
) => {

  const accountChange = switchLatest(map(wallet => wallet ? wallet.account : now(null), config.walletLink))

  return [
    $column(
      switchLatest(
        awaitPromises(combineArray(async (account, walletLink, metamask) => {

          // no wallet connected, show connection flow
          if (!account || walletLink === null) {
            
            const $walletConnectBtn = $ButtonPrimary({
              $content: $row(layoutSheet.spacing)(
                $icon({
                  viewBox: '0 0 32 32',
                  $content: $walletConnectLogo,
                }),
                $text('Wallet-Connect'),
              ), buttonOp: style({})
            })({
              // click: walletChangeTether(
              //   map(async () => walletConnect.enable()),
              //   awaitPromises,
              //   constant(walletConnect)
              // )
            })

            if (metamask) {
              return $column(
                $ButtonPrimary({
                  $content: $row(layoutSheet.spacing)(
                    $element('img')(attr({ src: '/assets/metamask-fox.svg' }), style({ width: '24px' }))(),
                    $text('Connect Metamask')
                  ), buttonOp: style({})
                })({
                  click: walletChangeTether(
                    map(async () => metamask.enable()),
                    awaitPromises,
                    constant(metamask),
                  ),
                }),
                $walletConnectBtn
              )
            } else {  // no mm resolved, show wallet-connect only
              return $walletConnectBtn
            }
          }

          return switchLatest(
            combineArray((chain) => {

              if (chain !== CHAIN.ARBITRUM) {
                return $ButtonPrimary({
                  $content: $text('Switch to Arbitrum Network'),
                  buttonOp: O(
                    style({
                      background: `transparent`, borderColor: pallete.negative,
                      backgroundImage: `linear-gradient(0deg,#500af5,#2b76e0 35%,#079dfa 77%,#02cfcf)`,
                      backgroundClip: 'text',
                    }),
                    styleInline(now({
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    })),
                  )
                })({
                  click: switchNetworkTether(
                    map(() => attemptToSwitchNetwork(walletLink.wallet, CHAIN.ARBITRUM)),
                    awaitPromises,
                    constant(walletLink.wallet)
                  )
                })
              }
                
              return config.$display
            }, walletLink.network)
          )
        }, accountChange, config.walletLink, fromPromise(metamaskQuery)))
      ),
      
      switchLatest(map(empty, switchNetwork))
    ),

    {
      walletChange
    }
  ]
})



