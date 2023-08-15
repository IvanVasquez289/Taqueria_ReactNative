import React from 'react'
import { View, Text, TouchableOpacity , ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handlePressStorage = async () => {
    const mensaje = await AsyncStorage.getItem('key')
    console.log(mensaje)
  }
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            fontSize:30,
            textAlign:'center',
            marginTop: '20%'
          }}
        >
          HomeScreenmimi 
        </Text>
        <TouchableOpacity
          onPress={()=> navigation.navigate('Stack')}
          style={{
            backgroundColor:'blue',
            padding:15,
            marginTop:'20%',
            width:'50%',
            alignSelf:'center',
            borderRadius:10
          }}
        >
          <Text style={{textAlign:'center', color:'white', fontSize:20, fontWeight:'bold'}}>
            Ir a StackScreen
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePressStorage}
          style={{
            backgroundColor:'blue',
            padding:15,
            marginTop:'20%',
            width:'50%',
            alignSelf:'center',
            borderRadius:10
          }}
        >
          <Text style={{textAlign:'center', color:'white', fontSize:20, fontWeight:'bold'}}>
            Mostrar mensaje de storage
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

export default HomeScreen