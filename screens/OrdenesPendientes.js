import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import useTaqueria from '../hooks/useTaqueria'

const OrdenesPendientes = () => {
  const {saludo,pedido} = useTaqueria()
  console.log(pedido)
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
          Ordenes Pendientes
        </Text>
      </View>
    </ScrollView>
  )
}

export default OrdenesPendientes