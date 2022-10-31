import {
  FlatList,
  ListViewBase,
  ListViewComponent,
  ScrollView,
  View as DefaultView,
} from 'react-native'

import { RootTabScreenProps } from '../types/types'
import Text from '../components/atoms/Text'
import View from '../components/atoms/View'
import Chip from '../components/atoms/Chip'

const dummyData = [
  { title: 'testes 1' },
  { title: 'testes 2' },
  { title: 'testes 3' },
  { title: 'testes 4' },
  { title: 'testes 5' },
  { title: 'testes 6' },
  { title: 'testes 6' },
  { title: 'testes 7' },
  { title: 'testes 8' },
  { title: 'testes 9' },
  { title: 'testes 10' },
]

const Market = ({ navigation }: RootTabScreenProps<'Market'>) => {
  return (
    <View className="px-4">
      <ScrollView>
        <FlatList
          className="mt-6"
          horizontal
          data={dummyData}
          renderItem={({ item }) => (
            <Chip key={item.title} title={item.title} className="mr-4" />
          )}
          ItemSeparatorComponent={() => <View className="w-2" />}
        />
        <View className="mt-6">
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
          <Text className="text-fuchsia-400 text-7xl">Tab One</Text>
        </View>
      </ScrollView>
    </View>
  )
}
export default Market
