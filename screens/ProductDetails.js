import React from 'react'
import { useEffect } from 'react'
import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import useTaqueria from '../hooks/useTaqueria'
import { AntDesign } from '@expo/vector-icons';
//Imagenes 
import taco from '../assets/img/taco_01.jpg'
import hotdog from '../assets/img/hotdog_01.jpg'
import bebida from '../assets/img/bebida_01.jpg'

const ProductDetails = () => {
  const {productoActual} = useTaqueria()
  const {nombre,imagen,precio,categoriaId} = productoActual;
  console.log(productoActual.nombre)

  useEffect(() => {
 
  }, [])
  
  return (
    <ScrollView>
        <View style={{flex:1, padding:10}}>
            <View style={{marginTop:'8%'}}>
                { categoriaId == 1 ? (
                    <View style={{padding:3, backgroundColor:'#33BBC5', borderRadius:10, alignSelf:'center'}}>
                        <Image source={taco} style={{width:300 , height:300, borderRadius:10}}/>
                    </View>
                ): categoriaId == 2 ? (
                    <View style={{padding:3, backgroundColor:'#33BBC5', borderRadius:10, alignSelf:'center'}}>
                        <Image source={hotdog} style={{width:300 , height:300, borderRadius:10}}/>
                    </View>
                ): (
                    <View style={{padding:3, backgroundColor:'#33BBC5', borderRadius:10, alignSelf:'center'}}>
                        <Image source={bebida} style={{width:300 , height:300, borderRadius:10}}/>
                    </View>
                )
                }
            </View>
            <View style={{
                alignItems:'center', 
                backgroundColor:'#E6E6E9',
                borderRadius:10,
                marginTop:'5%',
                width:'75%',
                alignSelf:'center',
                padding:3,
            }}>
                
                <Text style={{fontWeight:'500', fontSize:20, marginTop:'5%'}} >{nombre}</Text>
                <Text style={{fontWeight:'bold', fontSize:20}}>${precio}</Text>
                <View style={{
                    flexDirection:'row', 
                    gap:30, 
                    alignItems:'center', 
                    marginVertical:'5%',
                }}>
                    <TouchableOpacity>
                        <AntDesign name="minuscircle" size={28} color="#33BBC5" />
                    </TouchableOpacity>
                    <Text style={{fontSize:25}}>1</Text>
                    <TouchableOpacity>
                        <AntDesign name="pluscircle" size={28} color="#33BBC5" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    backgroundColor:'#323232',
                    width:'80%',
                    padding: 10,
                    borderRadius: 4,
                    marginBottom: '5%'
                }}>
                    <Text style={{
                        textAlign:'center', 
                        color:'white',
                        fontSize:16,
                        fontWeight:'500'
                    }}>
                        Agregar al pedido
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default ProductDetails