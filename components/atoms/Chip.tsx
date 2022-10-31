import React from 'react'
import { View } from 'react-native'

import Text from './Text'

interface AtomsChipProps {
  title: string
  icon?: any
  className?: string
}

const AtomsChip = ({ title, icon, className }: AtomsChipProps) => (
  <View
    className={`p-3 rounded-full flex flex-row items-center border border-white whitespace-nowrap cursor-pointer ${className}`}
  >
    <View className="flex items-center gap-2">
      {icon && (
        <View className="w-6 h-6">
          <img src={icon} loading="lazy" alt={title} width={24} height={24} />
        </View>
      )}
      <Text>{title}</Text>
    </View>
  </View>
)

export default AtomsChip

// className="text-xs whitespace-nowrap font-text font-semibold text-hardBlue"
