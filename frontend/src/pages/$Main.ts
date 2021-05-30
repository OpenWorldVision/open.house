import { $element, $node, $text, attr, Behavior, component, eventElementTarget, style } from '@aelea/core'
import * as router from '@aelea/router'
import { $RouterAnchor } from '@aelea/router'
import { $Button, $column, $icon, $row, layoutSheet } from '@aelea/ui-components'
import { map, merge, multicast, now } from '@most/core'
import { $logo } from '../elements/$icons'
import { designSheet } from '@aelea/ui-components'
import { colorAlpha, pallete } from '@aelea/ui-components-theme'

import { $cubes } from '../elements/$cube'
import { $MainMenu } from '../components/$MainMenu'
import { $Leaderboard } from './$Leaderboard'
import { $anchor } from '../elements/$common'


const popStateEvent = eventElementTarget('popstate', window)
const initialLocation = now(document.location)
const requestRouteChange = merge(initialLocation, popStateEvent)
const locationChange = map((location) => {
  return location
}, requestRouteChange)


interface Website {
  baseRoute?: string
}

export default ({ baseRoute = '' }: Website) => component((
  [routeChanges, linkClickTether]: Behavior<any, string>
) => {

  const changes = merge(locationChange, multicast(routeChanges))
  const fragmentsChange = map(() => {
    const trailingSlash = /\/$/
    const relativeUrl = location.href.replace(trailingSlash, '').split(document.baseURI.replace(trailingSlash, ''))[1]
    const frags = relativeUrl.split('/')
    frags.splice(0, 1, baseRoute)
    return frags
  }, changes)

  $cubes()


  const rootRoute = router.create({ fragment: baseRoute, title: 'Gambit  Community', fragmentsChange })
  const pagesRoute = rootRoute.create({ fragment: 'p', title: 'aelea' })
  const leaderboardRoute = pagesRoute.create({ fragment: 'leaderboard', title: 'Leaderboard' })
  const examplesRoute = pagesRoute.create({ fragment: 'examples', title: 'Examples' })



  return [
    $node(designSheet.main, style({ fontFamily: `'Work Sans'`, backgroundImage: `radial-gradient(at center center, ${pallete.horizon} 50%, ${pallete.background})`, alignItems: 'center', placeContent: 'center' }))(
      router.match(rootRoute)(
        $column(style({ minHeight: '100vh', position: 'relative', maxWidth: '1100px', padding: '0 30px', margin: '0 auto', width: '100%', alignItems: 'center', placeContent: 'center' }), layoutSheet.spacingBig)(


          $row(style({ alignItems: 'center', width: '100%' }))(
            $column(layoutSheet.spacingSmall, style({ fontWeight: 200, fontSize: '1.4em', textAlign: 'center', color: pallete.foreground }))(
              $text(style({  }))(`Interest-generating Stable Currency`),
              $text(style({ fontSize: '2em', fontWeight: 700, paddingBottom: '10px', color: pallete.message }))(`Gambit Community`),
              $text(style({  }))(`Leveraging-Protocol on Zero slippage`),

              $node(),
              $node(),
              $node(),
              $node(),

              $row(style({ justifyContent: 'center' }))(
                $anchor(attr({ href: 'https://gambit.financial' }), style({ textDecoration: 'none' }))(
                  $Button({ $content: $text('https://gambit.financial'), buttonOp: style({ backgroundColor: pallete.primary, borderRadius: '30px', padding: '12px 24px', color: 'black', fontWeight: 'bold', fontSize: '0.6em', borderColor: pallete.background }) })({})
                )
              )
            ),

            $row(style({ flex: 1 }))()

            // $3dScene({ sceneOp: style({ flex: 1 }) })({}),
          ),

          $node(),
          $node(),
          $node(),

          $row(style({ width: '100%', padding: '26px', zIndex: 1000, borderRadius: '12px', backdropFilter: 'blur(8px)', backgroundColor: colorAlpha(pallete.background, 0.50) }))(
            $row(style({  }), layoutSheet.spacingBig)(
              $RouterAnchor({ url: '/', route: rootRoute, $anchor: $element('a')($icon({ $content: $logo, width: '45px', viewBox: '0 0 32 32' })) })({
                click: linkClickTether()
              }),
              $node(),
              $MainMenu({ parentRoute: pagesRoute })({
                routeChange: linkClickTether()
              })
            ),
          ),
          $cubes(),

        )
      ),

      router.contains(pagesRoute)(
        $column(layoutSheet.spacingBig, style({ maxWidth: '870px', width: '100%', margin: '0 auto', paddingBottom: '45px' }))(
          $row(style({ placeContent: 'space-between', padding: '20px 15px' }))(
            $RouterAnchor({ $anchor: $element('a')($icon({ $content: $logo, fill: pallete.message, width: '46px', height: '46px', viewBox: '0 0 32 32' })), url: '/', route: rootRoute })({
              click: linkClickTether()
            }),
            $MainMenu({ parentRoute: pagesRoute })({
              routeChange: linkClickTether()
            })
          ),
          router.match(leaderboardRoute)(
            $Leaderboard({ parentRoute: rootRoute })({})
          ),
          // router.contains(examplesRoute)(
          //   // $Examples({ router: examplesRoute })({
          //   //   routeChanges: linkClickTether()
          //   // })
          // )
        )
      ),


      // $Picker([light, dark])({})
    )

  ]
})



