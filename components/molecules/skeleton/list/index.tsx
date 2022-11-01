/* eslint-disable react/no-array-index-key */
import React from 'react'
import { Skeleton, VStack, HStack } from 'native-base'
import View from '../../../atoms/view'

interface MoleculesSkeletonListProps {
  length?: number
}

const MoleculesSkeletonList = ({ length = 8 }: MoleculesSkeletonListProps) => {
  return (
    <>
      {new Array(length).fill(undefined).map((_, idx) => (
        <View key={idx} className="h-auto bg-white px-2 pt-2 pb-6">
          <HStack space="4" alignItems="start">
            <Skeleton size="16" rounded="full" />
            <VStack flex="2" space="4">
              <Skeleton.Text h="2" rounded="full" />
            </VStack>
          </HStack>
        </View>
      ))}
    </>
  )
}

export default MoleculesSkeletonList
