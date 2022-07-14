import { Text } from 'react-native'
import { View } from 'react-native'
import { styles } from './styles'


const Fight = ({ data }) => {
   
  //Randomizando Enemigos
  const Random = (max) =>{
    return Math.floor(Math.random() * max)
  }

  //Max Segun Array
  let Max = data.length

  let Randomizado = Random (Max)

  return (
    <View style={styles.containerFight}>
        <Text style={styles.textFont}>{data[Randomizado].name}</Text>
        <Text style={styles.textFont}>{data[Randomizado].HP}</Text>
        <Text style={styles.textFont}>{data[Randomizado].ATQ}</Text>
            <View>
                {data[Randomizado].img}
            </View>
    </View>
  )
}

export default Fight