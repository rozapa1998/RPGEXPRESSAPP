import React, { useState } from 'react'
import { View , Text , TouchableOpacity , ImageBackground, TextInput } from 'react-native'
import ImageSelector from '../../ImageSelector/imageSelector'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { createStats } from '../../../store/actions/stats.action'

const Stats = () => {
  //State Stats
  const [statsUser, setstatsUser] = useState({})
  const [UserName, setUserName]   = useState("")
  //Redux Dispatch
  const dispatch = useDispatch()
  const statsDispatch = useSelector(state => state.stats)
  console.warn(statsDispatch)
  //Handle OnChangeText
  const OnChangeText = (text) => {
    setUserName(text)
  }

  //Handle Stats Create
  const onHandleCreateStats = () => {
    dispatch(createStats(UserName))
    setstatsUser(statsDispatch)
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

        <TextInput style={styles.TextInput}
        placeholder="Nombre"
        placeholderTextColor={"#B0C4DE"}
        keyboardType="text"
        autoCapitalize="none"
        autoCorrect={false}
        value={UserName}
        onChangeText={(text)=>OnChangeText(text)}
        />
        <Text style={styles.fontTextSub}>Name: {UserName}</Text>
        <Text style={styles.fontTextSub}>HP: {statsDispatch.HP}</Text>
        <Text style={styles.fontTextSub}>ATQ: {statsDispatch.ATQ}</Text>
        <Text style={styles.fontTextSub}>DEF: {statsDispatch.DEF}</Text>
        <Text style={styles.fontTextSub}>EXP: {statsDispatch.EXP}</Text>
        <Text style={styles.fontTextSub}>ORO: {statsDispatch.ORO}</Text>
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
