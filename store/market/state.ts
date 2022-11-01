import React from 'react'
import { MarketAction } from './action'

export interface MarketState {
  sort: 'day' | 'week' | 'month' | 'year'
}

export interface MarketContextType {
  MarketState: MarketState
  MarketDispatch: React.Dispatch<MarketAction>
}
