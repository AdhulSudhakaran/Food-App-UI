import React from 'react';
import { View, StyleSheet, Image, TextInput, TouchableHighlight, Text} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function FaceCream({navigation}) {
  return (
    <View style={styles.container}>

      <View style={styles.itemContainer}>
        <Image style={styles.img} source={require('../assets/product2.png')}></Image>
      </View>

      <TouchableHighlight style={styles.btn}>
        <Text style={styles.btn_txt}>Buy Now</Text>
      </TouchableHighlight>

      <Icon style={styles.logo} name='home' size={40} onPress={()=>navigation.navigate('HomeScreen')}></Icon>
    
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
    backgroundColor: '#fcf3f2'
  },
  logo: {
    marginBottom:20
  },
  itemContainer:{
    height:300,
    width:300,
    marginBottom:10,
    elevation:10,
    borderRadius:10
  },
  img:{
    height:'100%',
    width:'100%',
    borderRadius:10
  },
  btn:{
    height:30,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#95c904',
    borderRadius:10,
    marginTop:10,
    marginBottom:200
  },
  btn_txt:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
 
})