import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, ScrollView,Image, TouchableOpacity } from 'react-native'
import useTaqueria from '../hooks/useTaqueria'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
//Imagenes 
import taco from '../assets/img/taco_01.jpg'
import hotdog from '../assets/img/hotdog_01.jpg'
import bebida from '../assets/img/bebida_01.jpg'

const ProductDetails = () => {
  const navigation = useNavigation()
  const {productoActual, handleSetPedido, pedido} = useTaqueria()
  const {nombre,precio,categoriaId} = productoActual;
  const [cantidad,setCantidad] = useState(1)
  const [edicion,setEdicion] = useState(false)
  
  useEffect(() => {
    if(pedido.some(productoState => productoState.id === productoActual.id)){
        const producto = pedido.find(productoState => productoState.id === productoActual.id)
        setCantidad(producto.cantidad)
        console.log(cantidad)
        setEdicion(true)
    }
  }, [pedido])
  

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
                    <TouchableOpacity
                        onPress={()=> {
                            if (cantidad <= 1) return;
                            setCantidad(cantidad - 1);
                        }}
                    >
                        <AntDesign name="minuscircle" size={28} color="#33BBC5" />
                    </TouchableOpacity>
                    <Text style={{fontSize:25}}>{cantidad}</Text>
                    <TouchableOpacity
                        onPress={()=> {
                            if (cantidad >= 5) return;
                            setCantidad(cantidad + 1);
                        }}
                    >
                        <AntDesign name="pluscircle" size={28} color="#33BBC5" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={{
                        backgroundColor:'#323232',
                        width:'80%',
                        padding: 10,
                        borderRadius: 4,
                        marginBottom: '5%'
                    }}
                    onPress={()=> {
                        handleSetPedido({...productoActual,cantidad})
                        navigation.navigate('Menú')
                    }}
                >
                    <Text style={{
                        textAlign:'center', 
                        color:'white',
                        fontSize:16,
                        fontWeight:'500'
                    }}>
                        {edicion ? 'Guardar Cambios' : 'Agregar al pedido'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}

export default ProductDetails