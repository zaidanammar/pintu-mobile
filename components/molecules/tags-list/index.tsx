import React from 'react'
import { FlatList } from 'react-native'

import { tags } from '../../../config/tags'
import Chip from '../../atoms/chip'

const MoleculesTagsList = () => {
  return (
    <FlatList
      className="mt-5"
      horizontal
      data={tags}
      renderItem={({ item }) => (
        <Chip
          key={item.title}
          title={item.title}
          Icon={item.icon}
          className="mr-2"
        />
      )}
    />
  )
}

export default MoleculesTagsList
