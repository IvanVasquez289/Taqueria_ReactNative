import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import taco from '../assets/img/taco_01.jpg'
import hotdog from '../assets/img/hotdog_01.jpg'
import bebida from '../assets/img/bebida_01.jpg'
import { useNavigation } from '@react-navigation/native'
import useTaqueria from '../hooks/useTaqueria'
const Producto = ({producto}) => {
  const navigation = useNavigation()
  const {handlePressProducto} = useTaqueria()
  const {nombre,precio,imagen,id,categoriaId} = producto;
  return (
    <View style={{ 
        backgroundColor:'#E6E6E9', 
        borderRadius:10,
        padding:10, 
        marginBottom:10,
        flexDirection:'row',
        flex:1,
        alignItems:'center',
        width:'100%',
    }}>
        <View>
            { categoriaId == 1 ? (
                <View style={{padding:3, backgroundColor:'orange', borderRadius:10}}>
                    <Image source={taco} style={{width:90 , height:90, borderRadius:10}}/>
                </View>
            ): categoriaId == 2 ? (
                <View style={{padding:3, backgroundColor:'orange', borderRadius:10}}>
                    <Image source={hotdog} style={{width:90 , height:90, borderRadius:10}}/>
                </View>
            ): (
                <View style={{padding:3, backgroundColor:'orange', borderRadius:10}}>
                    <Image source={bebida} style={{width:90 , height:90, borderRadius:10}}/>
                </View>
            )
            }

        </View>
        <View style={{ width:'70%', margin:10}}>
            <Text style={{
                fontWeight:'500',
                fontSize:20,
            }}>
                {nombre}
            </Text>
            <Text
                style={{
                    fontWeight:'bold',
                    fontSize:23
                }}
            >
                ${precio}
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('ProductDetails')
                    handlePressProducto(id)
                }}
                style={{
                    backgroundColor: '#33BBC5',
                    padding: 5,
                    borderRadius:5,
                    width:'100%',
                    marginTop:'2%'
                    
                }}
            >
                <Text style={{color: 'white', fontWeight:'bold', fontSize:18, textAlign:'center'}}>
                    Agregar
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Producto