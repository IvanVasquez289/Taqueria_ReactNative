import React from 'react'
import { View, Text, TouchableOpacity , ScrollView, FlatList, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useTaqueria from '../hooks/useTaqueria'
import Producto from '../components/Producto'
const HomeScreen = () => {
  const navigation = useNavigation()
  const {productos } = useTaqueria()

  const handlePressStorage = async () => {
    const mensaje = await AsyncStorage.getItem('key')
    console.log(mensaje)
  }

  return (  
    <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
      <View style={{padding:10}}>
        <View style={{
            backgroundColor:'orange', 
            borderRadius:10, 
            alignSelf:'flex-start', 
            padding:5}}>
          <Text
            style={{
              fontSize:20,
              textAlign:'left',
              fontWeight:'600',
              color:'white'
            }}
          >
            Comienza agregando pedidos
          </Text>
        </View>
        
        <View style={{width:'100%', marginTop:'5%'}}>
          {/* <FlatList
            data={productos}
            renderItem={({item}) => (
              <Producto producto={item}/>
            )}
            showsVerticalScrollIndicator={false}
          /> */}
          {productos?.map(producto => (<Producto key={producto.id} producto={producto}/>))}
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen