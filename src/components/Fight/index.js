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
        <Text style={styles.textFont}>{data.name}</Text>
        <Text style={styles.textFont}>{data.HP}</Text>
        <Text style={styles.textFont}>{data.ATQ}</Text>
            <View>
                {data.img}
            </View>
    </View>
  )
}

export default Fight