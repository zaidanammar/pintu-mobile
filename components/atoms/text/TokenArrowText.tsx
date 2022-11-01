import { AntDesign } from '@expo/vector-icons'

import Text from '.'
import View from '../view'

interface TokenArrowTextProps {
  percentage: string
}

const TokenArrowText = ({ percentage }: TokenArrowTextProps) => (
  <View className="flex flex-row  items-center justify-center">
    <View className="mt-0.5">
      {Number(percentage) > 0 && <AntDesign name="caretup" color="#21C55D" />}
    </View>
    <View>
      {Number(percentage) < 0 && <AntDesign name="caretdown" color="#EF4444" />}
    </View>
    <Text
      lightColor={Number(percentage) > 0 ? '#21C55D' : '#EF4444'}
      darkColor={Number(percentage) > 0 ? '#21C55D' : '#EF4444'}
      className="text-sm font-semibold ml-1"
    >
      {percentage || '0.00'}%
    </Text>
  </View>
)

export default TokenArrowText
