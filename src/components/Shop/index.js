import React from 'react'
import { FlatList , View , Text } from 'react-native'
import ProductItem from './product-item'
import { styles } from './styles'

const ShopList = ({ data , onSelected }) => {
    const renderItem = ({item}) => {
        return(
            <ProductItem item={item} onSelected={onSelected}/>
        )
    }
    return (
    <View style={styles.container}>
    <FlatList
    data={data}
    keyExtractor={(item)=>item.id}
    renderItem={renderItem}
    numColumns={2}
    />
    </View>
  )
}

export default ShopList