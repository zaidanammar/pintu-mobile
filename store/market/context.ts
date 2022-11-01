import { createContext } from 'react'
import { MarketContextType, MarketState } from './state'

export const initialMarketState: MarketState = {
  sort: 'day',
}

const MarketContext = createContext<MarketContextType>({
  MarketState: initialMarketState,
  MarketDispatch: () => undefined,
})

export const MarketContextProvider = MarketContext.Provider
export const MarketContextConsumer = MarketContext.Consumer

export default MarketContext
