import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Cream({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
        <Icon style={styles.icon} name='arrow-back' size={35} onPress={() => navigation.navigate('HomeScreen')}></Icon>
        <Text style={{ marginLeft: 75, fontSize: 20, fontWeight: 'bold' }}>Ayurvedic Creams</Text>
      </View>

     
      <ScrollView style={{ height: '100%', width: '100%' }}>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' ,marginBottom:30,marginTop:20}}>
          {/* ********************************************************** */}
          <View style={styles.itemContainer}>
            <Image style={styles.img1} source={require('../assets/cream1.webp')}></Image>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#95c904' }}>Love Earth</Text>
              <Text style={{ fontWeight: '500' }}>Herbal Face Pack</Text>
              <Text style={{ backgroundColor: 'gray', height: 20, width: 60, textAlign: 'center', color: 'white', borderRadius: 7 }}>RS 999</Text>

              <TouchableHighlight style={styles.btn}>
                <Text style={styles.btn_txt}>Buy Now</Text>
              </TouchableHighlight>
            </View>
          </View>
          {/* ******************************************** */}

          <View style={styles.itemContainer}>
            <Image style={styles.img2} source={require('../assets/cream2.webp')}></Image>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#95c904' }}>Uncle Harris</Text>
              <Text style={{ fontWeight: '500' }}>Herbal Face Pack</Text>
              <Text style={{ backgroundColor: 'gray', height: 20, width: 60, textAlign: 'center', color: 'white', borderRadius: 7 }}>RS 999</Text>

              <TouchableHighlight style={styles.btn}>
                <Text style={styles.btn_txt}>Buy Now</Text>
              </TouchableHighlight>
            </View>
          </View>
          {/* *************************************************** */}
          <View style={styles.itemContainer}>
            <Image style={styles.img1} source={require('../assets/cream3.jpg')}></Image>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#95c904' }}>Kesh King</Text>
              <Text style={{ fontWeight: '500' }}>Herbal Face Pack</Text>
              <Text style={{ backgroundColor: 'gray', height: 20, width: 60, textAlign: 'center', color: 'white', borderRadius: 7 }}>RS 999</Text>

              <TouchableHighlight style={styles.btn}>
                <Text style={styles.btn_txt}>Buy Now</Text>
              </TouchableHighlight>
            </View>
          </View>
          {/* ********************************************************* */}
          <View style={styles.itemContainer}>
            <Image style={styles.img1} source={require('../assets/cream1.webp')}></Image>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: 35 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#95c904' }}>Love Earth</Text>
              <Text style={{ fontWeight: '500' }}>Herbal Face Pack</Text>
              <Text style={{ backgroundColor: 'gray', height: 20, width: 60, textAlign: 'center', color: 'white', borderRadius: 7 }}>RS 999</Text>

              <TouchableHighlight style={styles.btn}>
                <Text style={styles.btn_txt}>Buy Now</Text>
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
    backgroundColor: '#fcf3f2'
  },
  icon: {
  },
  itemContainer: {
    height: 160,
    width: '90%',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  img1: {
    height: 150,
    width: '50%'
  },
  img2: {
    height: 150,
    width: '50%'
  },
  btn: {
    height: 30,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#95c904',
    borderRadius: 10,
    marginTop: 10
  },
  btn_txt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }


})