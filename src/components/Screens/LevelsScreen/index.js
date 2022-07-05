import React from 'react'
import { View , Text , ImageBackground } from 'react-native'
import { style } from './styles'
import {levelsData} from "../../../constants/data/levelsData"
import LevelsList from '../../Levels'

const LevelsScreen = ({ navigation , route  }) => {
  
  const onHandleSelectedLevel = (item) =>{
    navigation.navigate("Fight",{
      levelId: item.id,
      title: item.title,
    });
  }

  return (
    <View>
      <ImageBackground source={require("../../../../assets/img/Levels-Screen.gif")} resizeMode="cover" style={{width: '100%', height: '100%'}}>
        <View style={style.container}>
          <Text style={style.fontText}>Levels</Text>
          <View style={style.container}>
              <LevelsList
              data={levelsData}
              onSelected={onHandleSelectedLevel}
              />
            </View>
        </View>
        </ImageBackground> 
    </View>
  )
}

export default LevelsScreen