import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import useTaqueria from '../hooks/useTaqueria';
// Imagenes 
import taco from '../assets/img/taco_01.jpg'
import hotdog from '../assets/img/hotdog_01.jpg'
import bebida from '../assets/img/bebida_01.jpg'

const ProductoResumen = ({producto}) => {
  const {nombre,categoriaId,precio,id,} = producto;
  const [cantidad, setCantidad] = useState(producto.cantidad)
  const {productos, handleSetPedido, handleEliminarProducto,pedido} = useTaqueria()
  

  useEffect(() => {
    const productoActual = productos.find(productoState => productoState.id === id)
    console.log(productoActual)
    handleSetPedido({...productoActual,cantidad})
  }, [cantidad])
  
  useEffect(() => {
    if(pedido.some(productoState => productoState.id == id)){
        const actualizarCantidad = pedido.find(productoState => productoState.id == id)
        setCantidad(actualizarCantidad.cantidad)
    }
  }, [pedido])
  

  return (
    <View>
        <View style={{
            flexDirection:'row',  
            width:'100%', 
            alignItems:'center',
            padding:10, 
            flex:1,
            marginBottom:10,
            backgroundColor:'#E6E6E9',
            borderRadius:10
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
            <View style={{ 
                width:'68%',  
                marginLeft:'3%', 
                // backgroundColor:'blue' 
            }}>
                <Text style={{fontSize:20}}>{nombre}</Text>
                <Text style={{fontWeight:'bold', fontSize:20}}>${precio}</Text>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{
                        flexDirection:'row', 
                        gap:15, 
                        alignItems:'center', 
                        marginVertical:'2%',
                        
                    }}>
                        <TouchableOpacity
                            onPress={()=> {
                                if (cantidad <= 1) return;
                                setCantidad(cantidad - 1);
                            }}
                        >
                            <AntDesign name="minuscircleo" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={{fontSize:25}}>{cantidad}</Text>
                        <TouchableOpacity
                            onPress={()=> {
                                if (cantidad >= 5) return;
                                setCantidad(cantidad + 1);
                            }}
                        >
                            <AntDesign name="pluscircleo" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={()=> handleEliminarProducto(id)}
                    >
                        <AntDesign name="delete" size={24} color="red" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ProductoResumen