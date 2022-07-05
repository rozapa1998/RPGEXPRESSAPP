import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { styles } from './styles'

const LevelFight = ({item , onSelected}) => {
  
    return (
    <View style={styles.containerItem}>
        <Text>{item.name}</Text>
        <View style={styles.containerItem}>
        <Text>{item.HP}</Text>
        </View>
    </View>
    
  )
}

export default LevelFight