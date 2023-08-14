import React from 'react'
import { View, Text, TouchableOpacity , ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
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
      </View>
    </ScrollView>
  )
}

export default HomeScreen