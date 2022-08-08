import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.webp')}></Image>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcf3f2'
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 40,
    // marginTop:100
  }
 
})