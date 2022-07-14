import React from 'react'
import { View , Text , ImageBackground } from 'react-native'
import { style } from './styles'
//Redux
import { useSelector, useDispatch } from 'react-redux'
import { SelectedLevel } from '../../../store/actions/level.action'
//Level FlatList
import LevelsList from '../../Levels'

const LevelsScreen = ({ navigation }) => {
  
  //Redux Dispatch y states
  const dispatch = useDispatch()
  const levels = useSelector(state => state.levels.levelsData)
  const levelsEnemies = useSelector(state=> state.enemies.filtredEnemies)

  //Handler del nivel Seleccionado
  const onHandleSelectedLevel = (item) =>{
    dispatch(SelectedLevel(item.id))
    navigation.navigate("Fight",{
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
              data={levels}
              onSelected={onHandleSelectedLevel}
              />
            </View>
        </View>
        </ImageBackground> 
    </View>
  )
}

export default LevelsScreen