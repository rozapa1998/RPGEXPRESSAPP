import React from 'react'
import { View , Text , ImageBackground } from 'react-native'
import { style } from './styles'
import { Enemies } from "../../../constants/data/enemies"
import Fight from '../../Fight'

const FightScreen = ({ route }) => {
  
  const filtredEnemies = () => {
    const filtrado = Enemies.filter(enemy => enemy.levelId === route.params.levelId)
    return filtrado
  }

  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Levels-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View style={style.container}>
          <Text style={style.fontText}>Fight</Text>
          <View style={style.container}>
             <Fight
             data={filtredEnemies()}
             />
            </View>
        </View>
        </ImageBackground> 
    </View>
  )
}

export default FightScreen