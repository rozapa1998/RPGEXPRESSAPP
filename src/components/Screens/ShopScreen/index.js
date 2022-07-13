import React from 'react'
import { View , Text , TouchableOpacity , ImageBackground } from 'react-native'
import ShopList from '../../Shop'
import { style } from './styles'
import { ShopData } from "../../../constants/data/shopData"

const ShopScreen = ({navigation}) => {
  
  const onHandleSelectedLevel = (item) =>{
    navigation.navigate("Shop",{
      levelId: item.id,
      title: item.title,
    });
  }
  
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Profile-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
       <View style={style.container}>
       <Text style={style.fontText}>Shop</Text>
       </View>
       <ShopList
       data={ShopData}
       />
        </ImageBackground> 
    </View>
  )
}

export default ShopScreen