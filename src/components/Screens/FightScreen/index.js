import React, { useEffect, useState } from 'react'
import { View , Text , ImageBackground } from 'react-native'
import { style } from './styles'
import Fight from '../../Fight'
import { useSelector, useDispatch } from 'react-redux'
//Actions
import { filtredEnemy } from '../../../store/actions/enemy.action'

const FightScreen = () => {
  //Fltrado de enemigos
  const filtredenemies = useSelector ( state => state.enemies.filtredEnemies )


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