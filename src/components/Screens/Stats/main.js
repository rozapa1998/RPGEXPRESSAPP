import React, { useState } from 'react'
import { View , Text , TouchableOpacity , ImageBackground } from 'react-native'
import ImageSelector from '../../ImageSelector/imageSelector'
import { styles } from './styles'

const Stats = () => {
  
  const [userStats, setUserStats] = useState({HP:0,DEF:0,ATQ:0,EXP:0,ORO:0})

  const Randomize = (max , min) => {
    return Math.floor((Math.random() * max) + min)
}

  const onHandleCreateStats = () => {
    const StatsGenerados = {
      Player:"Rodrigo",
      HP: Randomize(30 , 10),
      DEF: Randomize(10 , 2),
      ATQ: Randomize(10 , 2),
      EXP: 0,
      ORO: 0
    }
    setUserStats(StatsGenerados)
  }
  
  return (
    <ImageBackground source={require("../../../../assets/img/Levels-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      
      <View>
        <Text style={styles.textFont}>Stats</Text>
      </View>

      <View>
      <ImageSelector/>
      </View>

      <View>
        <Text style={styles.fontTextSub}>HP: {userStats.HP}</Text>
        <Text style={styles.fontTextSub}>ATQ: {userStats.ATQ}</Text>
        <Text style={styles.fontTextSub}>DEF: {userStats.DEF}</Text>
        <Text style={styles.fontTextSub}>EXP: {userStats.EXP}</Text>
        <Text style={styles.fontTextSub}>ORO: {userStats.ORO}</Text>
      </View>
        
        <View style={styles.buttonCreateStats}>
          <TouchableOpacity onPress={onHandleCreateStats}>
            <Text style={styles.fontTextSub}>Crear Stats</Text>
          </TouchableOpacity>
        </View>
        
    </View>
    </ImageBackground>
  )
}

export default Stats;