import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View , Text , ImageBackground , TouchableOpacity , KeyboardAvoidingView , TextInput , Image} from 'react-native'
import { style } from './styles'
import { GlobalStyles } from '../../../constants/styles/styles'
import { singin, singup } from '../../../store/actions/auth.action'

const RegisterScreen = ({ navigation }) => {
  //Dispatch Redux
  const dispatch = useDispatch();

  //UseState Inputs
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  
  //Variables
  const title = isLogin ? "Ingresa" :"Registro"
  const message = isLogin ? "¿No tienes una cuenta?" :"¿Ya tienes cuenta?"
  const messageAction = isLogin ? "Registrate" :"Ingresar"
  const messageTarger = "Login"
  const buttonText = isLogin ? "Sing In" :"Sing Up"

  //OnchangeText
  const onChangeText = ( text , type ) => {
    if (type === "email"){
      setEmail(text)
    }else{
      setPassword(text)
    }
  }

  //HandleSingUp
  const HandleSubmit = () => {
    dispatch(isLogin ? singin( email , password) : singup( email , password ))
  }
  
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Start-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <KeyboardAvoidingView style={style.containerKeyboard} behavior="height">
          <View style={style.startContainer}>
            <Image style={style.image} source={require("../../../../assets/img/Logo.png")}></Image>
          </View>
            <View style={style.containerForm}>
            <Text style={style.fontTextTitle}>- {title} -</Text>
            <Text style={style.fontText}>Email</Text>
            <TextInput
            style={style.input}
            placeholder="E-mail address"
            placeholderTextColor={"#B0C4DE"}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={(text)=>onChangeText( text , "email" )}
            />
            <Text style={style.fontText}>Clave</Text>
            <TextInput
            style={style.input}
            placeholder="Password"
            placeholderTextColor={"#B0C4DE"}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={(text)=>onChangeText( text , "password" )}
            />
            </View>
        <View style={style.formContainer}>

        <View style={style.containerButton}>
          <TouchableOpacity
                  style={style.button}
                  title='Sing Up'
                  onPress={()=>HandleSubmit()}>
            <Text style={style.fontTextButton}>{buttonText}</Text>
          </TouchableOpacity>
        </View>

          <Text style={style.fontTextCuenta}>{message}</Text>
            <TouchableOpacity
                  style={GlobalStyles.buttonLogin}
                  title={messageTarger}
                  onPress={()=>setIsLogin(!isLogin)}>
              <Text style={style.fontTextButtonLogin}>{messageAction}</Text>
            </TouchableOpacity>
        </View>
          </KeyboardAvoidingView>
        </ImageBackground> 
    </View>
  )
}

export default RegisterScreen