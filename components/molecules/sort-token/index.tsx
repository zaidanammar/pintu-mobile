import React, { useContext } from 'react'
import { Select } from 'native-base'
import { Feather } from '@expo/vector-icons'

import Text from '../../atoms/text'
import View from '../../atoms/view'
import { useThemeColor } from '../../../hooks/useThemeColor'
import MarketContext from '../../../store/market/context'
import { ActionType } from '../../../store/market/action'

const MoleculesSortToken = () => {
  const { MarketState, MarketDispatch } = useContext(MarketContext)
  const { sort } = MarketState
  const color = useThemeColor({}, 'text')

  const onChangeSort = (itemValue: any) =>
    MarketDispatch({ type: ActionType.ChangeSort, payload: itemValue })

  return (
    <View className="my-2 flex flex-row justify-between items-center">
      <Text className="text-xs font-semibold">Sort By</Text>
      <Select
        placeholder="Choose Service"
        minWidth="81"
        _selectedItem={{
          bg: '#DBE9FE',
        }}
        selectedValue={sort}
        onValueChange={onChangeSort}
        color={color}
        borderWidth={0}
        dropdownIcon={<Feather name="chevron-down" size={20} color={color} />}
      >
        <Select.Item label="Day" value="day" />
        <Select.Item label="Week" value="week" />
        <Select.Item label="Month" value="month" />
        <Select.Item label="Year" value="year" />
      </Select>
    </View>
  )
}

export default MoleculesSortToken
