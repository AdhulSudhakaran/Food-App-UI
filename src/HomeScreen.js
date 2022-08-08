import React from 'react';
import { View, StyleSheet,ScrollView,Text,Image,TouchableHighlight, Button} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MyDrawer} from '../App'


export default function HomeScreen({navigation}) {


  
  return (
    <View style={styles.container}>
      
        <ScrollView style={{height:'100%',width:'100%'}}>
          <View style={styles.childView}>


              <View style={styles.itemContainer}>
                <Image style={styles.img1} source={require('../assets/product4.webp')}></Image>
               
                <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
                      <Text style={{fontSize:16,fontWeight:'bold'}}>Ayurvedic Shampo</Text>
                      <TouchableHighlight style={styles.btn} onPress={()=>navigation.navigate('Shampo')}>
                        <Text style={styles.btn_txt}>Next</Text>
                      </TouchableHighlight>
                </View>
              </View>

              {/* ******************************** */}


              <View style={styles.itemContainer}>
                  <Image style={styles.img2} source={require('../assets/product2.png')}></Image>
                
                  <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Ayurvedic Face Cream</Text>
                        <TouchableHighlight style={styles.btn} onPress={()=>navigation.navigate('Cream')}>
                          <Text style={styles.btn_txt}>Next</Text>
                        </TouchableHighlight>
                  </View>
              </View>


              {/* **************************************** */}


              <View style={styles.itemContainer}>
                  <Image style={styles.img2} source={require('../assets/product3.jpg')}></Image>
                
                  <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Body Wash</Text>
                        <TouchableHighlight style={styles.btn} onPress={()=>navigation.navigate('BodyWash')}>
                          <Text style={styles.btn_txt}>Next</Text>
                        </TouchableHighlight>
                  </View>
              </View>


              {/* ************************************************* */}


              <View style={styles.itemContainer}>
                  <Image style={styles.img2} source={require('../assets/product1.webp')}></Image>
                
                  <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>Hair Oil</Text>
                        <TouchableHighlight style={styles.btn}>
                          <Text style={styles.btn_txt}>Next</Text>
                        </TouchableHighlight>
                  </View>
              </View>

          </View>
        </ScrollView>
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
    backgroundColor: 'white'
  },
 
  itemContainer:{
    height:170,
    width:'90%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    elevation:8,
    backgroundColor:'white',
    flexDirection:'row',
    borderRadius:8
  },
 
  childView:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:50
  },
  img1:{
    height:160,
    width:140
  },
  img2:{
    height:160,
    width:140
  },
  btn:{
    height:30,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#95c904',
    borderRadius:10,
    marginTop:10
  },
  btn_txt:{
    fontSize:18,
    fontWeight:'bold',
    color:'white'
  }
  
 
})