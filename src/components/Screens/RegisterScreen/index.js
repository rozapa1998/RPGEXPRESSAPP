import React from 'react'
import { View , Text , ImageBackground , TouchableOpacity} from 'react-native'
import { style } from './styles'
import { GlobalStyles } from '../../../constants/styles/styles'
import { styles } from './styles'

const RegisterScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Register-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View style={style.container}>
          <Text style={style.fontText}>Register</Text>
        </View>
        <View style={style.containerButton}>
        <TouchableOpacity
                style={GlobalStyles.button}
                title='Ir a Levels'
                onPress={()=>navigation.navigate("Levels")}>
          <Text style={style.fontTextButton}>Levels</Text>
        </TouchableOpacity>
            </View>
        </ImageBackground> 
    </View>
  )
}

export default RegisterScreen