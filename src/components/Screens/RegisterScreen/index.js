import React from 'react'
import { View , Text , ImageBackground , TouchableOpacity , KeyboardAvoidingView} from 'react-native'
import { style } from './styles'
import { GlobalStyles } from '../../../constants/styles/styles'

const RegisterScreen = ({ navigation }) => {
  
  const title = "Registro"
  const message = "¿Ya tienes cuenta?"
  const messageAction = "Ingresar"
  const messageTarger = "Login"
  
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Register-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView style={style.containerKeyboard} behavior="height">
          
          <View style={style.container}>
            <Text style={style.fontTextTitle}>{title}</Text>
            <Text style={style.fontText}>Inputs</Text>
          </View>
        <View style={style.formContainer}>
          <Text style={style.fontText}>{message}</Text>
            <TouchableOpacity
                  style={GlobalStyles.buttonLogin}
                  title={messageTarger}
                  onPress={()=>console.warn(messageTarger)}>
              <Text style={style.fontTextButtonLogin}>{messageAction}</Text>
            </TouchableOpacity>
        </View>

        <View style={style.containerButton}>
          <TouchableOpacity
                  style={GlobalStyles.button}
                  title='Ir a Levels'
                  onPress={()=>navigation.navigate("Levels")}>
            <Text style={style.fontTextButton}>Levels</Text>
          </TouchableOpacity>
        </View>
          </KeyboardAvoidingView>
        </ImageBackground> 
    </View>
  )
}

export default RegisterScreen