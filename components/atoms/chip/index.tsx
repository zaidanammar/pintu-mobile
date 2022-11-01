import React from 'react'
import { View } from 'react-native'
import Text from '../text'

interface AtomsChipProps {
  title: string
  Icon?: any
  className?: string
}

const AtomsChip = ({ title, Icon, className }: AtomsChipProps) => (
  <View
    className={`px-3 py-2 rounded-full flex flex-row items-center border border-neutral whitespace-nowrap cursor-pointer ${className}`}
  >
    <View className="flex flex-row items-center gap-2">
      {Icon && (
        <View className="w-6 h-6">
          <Icon />
        </View>
      )}
      <Text>{title}</Text>
    </View>
  </View>
)

export default AtomsChip
