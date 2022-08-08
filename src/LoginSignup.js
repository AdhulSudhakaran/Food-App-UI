import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import { useNavigation} from '@react-navigation/native'



export default function LoginSignup() {
    const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.webp')}></Image>
      <Text style={styles.title}>AyurVeda</Text>
      <TextInput style={styles.txt_inp} placeholder='Email '></TextInput>
      <TextInput style={styles.txt_inp2} placeholder='Password '></TextInput>

      <View style={{flexDirection:'row',marginTop:20}}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_txt}>SignUp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2} onPress={()=>navigation.navigate('Drawer')}>
          <Text style={styles.btn_txt}>Login</Text>
        </TouchableOpacity>
        
      </View>

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
  },
  title:{
    fontSize:20,
    fontWeight:'bold'
  },
  txt_inp: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 40
  },
  txt_inp2: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 20
  },
  btn: {
    height: 40,
    width: 137,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95c904',
    marginTop: 30,
    borderRadius:10
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  btn2: {
    height: 40,
    width: 137,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#95c904',
    marginTop: 30,
    marginLeft:20,
    borderRadius:10
  },
})