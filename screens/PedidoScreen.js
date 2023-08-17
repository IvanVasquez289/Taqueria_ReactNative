import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import useTaqueria from '../hooks/useTaqueria'
import ProductoResumen from '../components/ProductoResumen'
const PedidoScreen = () => {
  const {pedido} = useTaqueria()
  console.log(pedido)
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
            Orden
          </Text>
        </View>
        
        <View style={{width:'100%', marginTop:'5%'}}>
          {pedido.length === 0 ? (
            <Text style={{fontWeight:'bold'}}>No has agregado productos a tu pedido</Text>
          ) : (
              pedido?.map(producto => (<ProductoResumen key={producto.id} producto={producto}/>))
          )}
        </View>
      </View>
    </ScrollView>
  )
}

export default PedidoScreen 