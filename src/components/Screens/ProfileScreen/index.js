import React from 'react'
import { View , Text , TouchableOpacity , ImageBackground } from 'react-native'
import { style } from './styles'
import { GlobalStyles } from '../../../constants/styles/styles'

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Profile-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
       <View style={style.container}>
       <Text style={style.fontText}>Character</Text>
       </View>
       <View style={style.buttonContainer}>
        <View style={style.shadowContainer}>
       <TouchableOpacity
        style={GlobalStyles.button}
        title='Ir a Profile'
        onPress={()=>navigation.navigate("Levels")}>
          <Text style={style.fontTextButton}>Levels</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        </ImageBackground> 
    </View>
  )
}

export default ProfileScreen