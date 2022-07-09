import React from 'react'
import { View , Text , TouchableOpacity } from 'react-native'
import { styles } from './styles'

const LevelItem = ({ item , onSelected }) => {
  return (
    <View style={styles.LevelContainer}>
        <TouchableOpacity 
        style={{...styles.Level, backgroundColor: item.color }} 
        onPress={()=>onSelected(item)}>
          
            <View style={styles.containerStage}>
                <Text style={styles.stage}>NV: {item.id}</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default LevelItem