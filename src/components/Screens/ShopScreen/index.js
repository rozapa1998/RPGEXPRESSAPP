import React, {useState} from 'react'
import { View , Text , ImageBackground } from 'react-native'
import ShopList from '../../Shop'
import { style } from './styles'
import { ShopData } from "../../../constants/data/shopData"
import { useSelector } from 'react-redux'

const ShopScreen = ({navigation}) => {
  const [alert, setAlert] = useState (<Text></Text>)
  const userStats = useSelector ( state => state.stats )

  const onHandleSelectedItem = (item) =>{
    if(item.price > userStats.ORO){
      setTimeout(() => {
        setAlert(<Text></Text>)
      }, 2000);
      setAlert(<Text style={style.alert}>No tienes suficiente oro!</Text>)
    }
  }
  
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Profile-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
       <View style={style.container}>
       <Text style={style.fontText}>Shop</Text>
       </View>
       <ShopList
       data={ShopData}
       onSelected={onHandleSelectedItem}
       />
       {alert}
        </ImageBackground> 
    </View>
  )
}

export default ShopScreen