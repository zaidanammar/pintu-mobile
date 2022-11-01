import React from 'react'
import { ScrollView } from 'react-native'
import { SvgUri } from 'react-native-svg'

import { toRupiah } from '../../../utils/common'
import Text from '../../atoms/text'
import TokenArrowText from '../../atoms/text/TokenArrowText'
import View from '../../atoms/view'
import type { Currency } from '../../../types/currency'
import type { Token } from '../../../types/token'

interface ItemType extends Currency {
  latestPrice: string
  percentage: string
}

interface TokenItemProps {
  item: ItemType
}

const TokenItem = ({ item }: TokenItemProps) => {
  return (
    <View className="flex flex-row py-4 px-2 gap-x-3 border-b border-b-neutral items-center">
      <View className="bg-white rounded-full">
        <SvgUri color={item.color} width={32} height={32} uri={item.logo} />
      </View>

      <View className="flex-1 flex flex-row items-center font-text">
        <View className="flex-1">
          <Text className="text-base font-semibold">{item?.name}</Text>
          <Text lightColor="#979797" className="text-xs font-normal">
            {item?.currencyGroup}
          </Text>
        </View>
        <View className="flex flex-col items-end ml-2">
          <Text className="font-semibold">{toRupiah(item.latestPrice)}</Text>

          <TokenArrowText percentage={item.percentage} />
        </View>
      </View>
    </View>
  )
}

interface MoleculesTokenListProps {
  dataSupportedCurrencies: Currency[]
  dataTradePriceChanges: Token[]
}

const MoleculesTokenList = ({
  dataSupportedCurrencies,
  dataTradePriceChanges,
}: MoleculesTokenListProps) => {
  const data =
    dataSupportedCurrencies &&
    dataTradePriceChanges &&
    dataSupportedCurrencies?.slice(1)?.map((el, idx) => ({
      latestPrice: dataTradePriceChanges[idx]?.latestPrice,
      percentage: dataTradePriceChanges[idx]?.day,
      ...el,
    }))

  return (
    <ScrollView>
      {data?.map(item => (
        <TokenItem item={item} key={item.name} />
      ))}
    </ScrollView>
  )
}

export default MoleculesTokenList
