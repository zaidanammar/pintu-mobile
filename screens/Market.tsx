import { ScrollView } from 'react-native'
import {
  useFetchTradePriceChanges,
  useFetchWalletSupportedCurrencies,
} from '../hooks/market'
import TokenList from '../components/molecules/token-list'
import TagsList from '../components/molecules/tags-list'
import Text from '../components/atoms/text'
import View from '../components/atoms/view'

const Market = () => {
  const { data: dataTradePriceChanges, isLoading: loadTradePrices } =
    useFetchTradePriceChanges()
  const { data: dataSupportedCurrencies, isLoading: LoadCurrencies } =
    useFetchWalletSupportedCurrencies()

  return (
    <View className="px-2.5">
      <ScrollView>
        <TagsList />
        {loadTradePrices || LoadCurrencies ? (
          <View>
            <Text>loading</Text>
          </View>
        ) : (
          <TokenList
            dataSupportedCurrencies={dataSupportedCurrencies?.data}
            dataTradePriceChanges={dataTradePriceChanges?.data}
          />
        )}
      </ScrollView>
    </View>
  )
}
export default Market
