/* eslint-disable consistent-return */
import { ActionType, MarketAction } from './action'
import { MarketState } from './state'

export const MarketReducer = (state: MarketState, action: MarketAction) => {
  switch (action.type) {
    case ActionType.ChangeSort:
      const sort = action.payload
      return { ...state, sort }
    // skip default case
  }
}
