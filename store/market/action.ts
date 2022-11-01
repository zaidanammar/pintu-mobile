export enum ActionType {
  ChangeSort,
}

export interface OnChangeSort {
  type: ActionType.ChangeSort
  payload: 'day' | 'week' | 'month' | 'year'
}

export type MarketAction = OnChangeSort
