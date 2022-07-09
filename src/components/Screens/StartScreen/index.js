import React from 'react'
import { View , Text , TouchableOpacity , ImageBackground } from 'react-native'
import { style } from './styles'
import { GlobalStyles } from '../../../constants/styles/styles'

const StartScreen = ({ navigation }) => {
  
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Start-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}} >
       <View style={style.container}>
       <Text style={style.fontText}>RPG-EXPRESS</Text>
       </View>
       <View style={style.buttonContainer}>
       <View style={style.shadowContainer}>
        <TouchableOpacity
        style={GlobalStyles.button}
        title='Ir a Profile'
        onPress={()=>navigation.navigate("Register")}>
          <Text style={style.fontTextButton}>Start</Text>
        </TouchableOpacity>
        
        </View>
        </View>
        </ImageBackground>
    </View>
  )
}

export default StartScreen