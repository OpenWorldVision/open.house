import { ARBITRUM_CONTRACTS, TOKEN_SYMBOL } from "./address"
import { ExtractAndParseEventType } from "./contract"
import type { Vault } from "./contract/"

export type Address = string

export interface Token {
  name: string;
  symbol: TOKEN_SYMBOL;
  decimals: number;
  address: ARBITRUM_CONTRACTS;
}

export interface Transaction {
  token: Token,
  from: Address
  to: Address
  value: bigint
}



export interface IBaseEntity {
  id: string
}

export interface IPosition extends IBaseEntity {
  key: string
  account: string
  collateralToken: string
  indexToken: ARBITRUM_CONTRACTS
  isLong: boolean
}


export interface IPositionLiquidated extends IBaseEntity, ExtractAndParseEventType<Vault, 'LiquidatePosition'> { }

export interface IPositionIncrease extends IBaseEntity, ExtractAndParseEventType<Vault, 'IncreasePosition'> {
}

export interface IPositionDecrease extends IBaseEntity, ExtractAndParseEventType<Vault, 'DecreasePosition'> {
}

export interface IPositionUpdate extends IBaseEntity, ExtractAndParseEventType<Vault, 'UpdatePosition'> {
}

export interface IPositionClose extends IBaseEntity, ExtractAndParseEventType<Vault, 'ClosePosition'> {
}

export interface IClaim extends IBaseEntity {
  address: string
  latestClaimBlockNumber: number
  identity: string
}

export interface Account {
  address: string
  settledPositionCount: number
  profitablePositionsCount: number
  realisedPnl: bigint
  claim: IClaim | null
}

export interface HistoricalDataApi {
  timeRange?: [number, number]
}

export interface AccountHistoricalDataApi extends HistoricalDataApi {
  account?: string
}

export interface LeaderboardApi extends HistoricalDataApi {
}


export interface IAggregatedTradeOpen extends IBaseEntity {
  account: string
  initialPositionBlockTimestamp: number
  initialPosition: IPositionIncrease

  increaseList: IPositionIncrease[]
  decreaseList: IPositionDecrease[]
  updateList: IPositionUpdate[]
}

export interface IAggregatedTradeClosed extends IAggregatedTradeOpen {
  settledPosition: IPositionClose
  settledBlockTimestamp: number
}

export interface IAggregatedTradeLiquidated extends IAggregatedTradeOpen {
  settledPosition: IPositionLiquidated
  settledBlockTimestamp: number
}

export interface IAggregatedTradeListMap {
  aggregatedTradeOpens: IAggregatedTradeOpen[]
  aggregatedTradeCloseds: IAggregatedTradeClosed[]
  aggregatedTradeLiquidateds: IAggregatedTradeLiquidated[]
}

export interface IAccountAggregationMap extends IBaseEntity, IAggregatedTradeListMap {
  totalRealisedPnl: bigint
}


export interface IAggregatedAccountSummary {
  address: string
  realisedPnl: bigint
  openPnl: bigint | null
  leverage: bigint
  settledPositionCount: number
  profitablePositionsCount: number
  claim: IClaim | null,
  fees: bigint
  collateral: bigint

  tradeSummaries: IAggregatedSettledTradeSummary[]
}


export interface IAggregatedTradeSummary {
  startTimestamp: number
  indexToken: ARBITRUM_CONTRACTS
  account: string
  size: bigint
  averagePrice: bigint
  isLong: boolean
  leverage: bigint
  collateral: bigint
  fee: bigint
}

export interface IAggregatedSettledTradeSummary extends IAggregatedTradeSummary {
  pnl: bigint
}

