import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [km, setKm] = useState('0')
  const [litro, setLitro] = useState('0')
  const [msg, setMsg] = useState('')

  const handleCalculate = () => {
    const consumo = parseFloat(km) / parseFloat(litro);
    setMsg(`Seu consumo médio foi de: ${consumo.toFixed(2)} km/l`);
  }

  return (
      <SafeAreaView style={styles.container}>
        <TextInput
          label='Quilômetros percorridos'
          keyboardType='numeric'
          value={km.toString()}
          onChangeText={(text) => setKm(text)}
          style={styles.input}/>

        <TextInput
          label='Litros abastecidos'
          keyboardType='numeric'
          value={litro.toString()}
          onChangeText={(text) => setLitro(text)}
          style={styles.input}/>

        <Button mode="contained" onPress={handleCalculate} style={styles.button}>
                Calcular consumo
              </Button>
        <Text style={styles.msg}>{msg}</Text>
      </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor:'white',
  },

  input: {
    marginBottom: 10,
  },

  buttom: {
    marginTop: 10,
    backgroundColor: '#3498db',
  },

  msg: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },

});