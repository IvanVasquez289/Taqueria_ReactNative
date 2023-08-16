import React from 'react'
import { View, Text } from 'react-native'
import { useEffect } from 'react'
import useTaqueria from '../../hooks/useTaqueria'

const ProductDetails = () => {
  const {productoActual} = useTaqueria()
  const {nombre} = productoActual;
  console.log(productoActual.nombre)

  useEffect(() => {
 
  }, [])
  
  return (
    <View>
      <Text>{nombre}</Text>
    </View>
  )
}

export default ProductDetails