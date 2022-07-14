import React from 'react'
import { View , Text , ImageBackground } from 'react-native'
import { style } from './styles'
import Fight from '../../Fight'
import { useSelector } from 'react-redux'

const FightScreen = () => {
  
  
  const filtredenemies = useSelector (state=> state.enemies.filtredEnemies)

  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Levels-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View style={style.container}>
          <Text style={style.fontText}>Fight</Text>
          <View style={style.container}>
             <Fight
             data={filtredenemies}
             />
            </View>
        </View>
        </ImageBackground> 
    </View>
  )
}

export default FightScreen