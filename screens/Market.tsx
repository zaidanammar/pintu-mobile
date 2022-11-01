import { useReducer } from 'react'
import { ScrollView } from 'react-native'
import {
  useFetchTradePriceChanges,
  useFetchWalletSupportedCurrencies,
} from '../hooks/market'
import {
  initialMarketState,
  MarketContextProvider,
} from '../store/market/context'
import { MarketReducer } from '../store/market/reducer'
import View from '../components/atoms/view'
import MarketHeader from '../components/organisms/market-header'
import TokenList from '../components/molecules/token-list'

const Market = () => {
  const [MarketState, MarketDispatch] = useReducer(
    MarketReducer,
    initialMarketState,
  )

  const { data: dataTradePriceChanges, isLoading: loadTradePrices } =
    useFetchTradePriceChanges()
  const { data: dataSupportedCurrencies, isLoading: LoadCurrencies } =
    useFetchWalletSupportedCurrencies()

  return (
    <MarketContextProvider value={{ MarketState, MarketDispatch }}>
      <View className="px-2.5">
        <ScrollView>
          <MarketHeader />
          <TokenList
            dataSupportedCurrencies={dataSupportedCurrencies?.data}
            dataTradePriceChanges={dataTradePriceChanges?.data}
            loadSupportedCurrencies={LoadCurrencies}
            loadTradePriceChanges={loadTradePrices}
          />
        </ScrollView>
      </View>
    </MarketContextProvider>
  )
}
export default Market
