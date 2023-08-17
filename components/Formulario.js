import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import useTaqueria from '../hooks/useTaqueria';
const Formulario = () => {
  const {total} = useTaqueria()
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = () => {
    if( nombre.length < 3 ){
        setMensaje('Ingresa un nombre valido')
        setTimeout(() => {
            setMensaje()
        }, 3000);
        return
    }

    setNombre('') 
    setMensaje('Pedido agregado exitosamente')
    setTimeout(() => {
        setMensaje()
    }, 3000);

  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nombre:</Text>
      <TextInput
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />
      <View>
        <Text style={styles.texto}>Total a pagar: ${total}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Confirmar pedido</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{mensaje}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  },
  texto: {
    fontSize:20,
    fontWeight:'500',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: '60%',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#E6E6E9',
    fontSize:16
  },
  button: {
    backgroundColor: '#323232',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width:'60%',

  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Formulario;
