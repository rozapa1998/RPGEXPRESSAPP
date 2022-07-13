import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { styles } from './styles'

const ProductItem = ({ item , onSelected }) => {
  return (
    <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} 
        onPress={()=>onSelected(item)}>
            <View style={styles.ProductContainer}>
                <Text style={styles.stage}>{item.name}</Text>
                <Text style={styles.stageType}>( {item.type} )</Text>
                <Text style={styles.stageDescription}>{item.description}</Text>
                <Text style={styles.stagePrice}>- $ {item.price} -</Text>
            </View>
        </TouchableOpacity>
        </View>
  )
}

export default ProductItem