import React from 'react'
import TagsList from '../../molecules/tags-list'
import SortToken from '../../molecules/sort-token'
import View from '../../atoms/view'

const OrganismsMarketHeader = () => {
  return (
    <View className="px-1">
      <TagsList />
      <SortToken />
    </View>
  )
}

export default OrganismsMarketHeader
