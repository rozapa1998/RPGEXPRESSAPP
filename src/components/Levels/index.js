import React from 'react'
import { FlatList } from 'react-native'
import LevelItem from './Level-Item'

const LevelsList = ({ data , onSelected }) => {
  
    const renderItem = ({item}) => {
        return(
            <LevelItem item={item} onSelected={onSelected}/>
        )
    }
    return (
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}
    />
  )
}

export default LevelsList