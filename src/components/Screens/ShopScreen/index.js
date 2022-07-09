import React from 'react'
import { View , Text , TouchableOpacity , ImageBackground } from 'react-native'
import { style } from './styles'

const ShopScreen = () => {
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Profile-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
       <View style={style.container}>
       <Text style={style.fontText}>Shop</Text>
       </View>
       <View style={style.buttonContainer}>
        <View style={style.shadowContainer}>
       
        </View>
        </View>
        
        </ImageBackground> 
    </View>
  )
}

export default ShopScreen