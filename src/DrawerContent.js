import React from 'react';

// import { useRoute } from '@react-navigation/native'
import { View,StyleSheet,Text,Image,TouchableHighlight } from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons';

export default function DrawerContent(){
    // const route=useRoute()
    return(
        <View style={styles.container}>
            <View style={{height:250,width:'100%',backgroundColor:'#95c904',alignItems:'center',justifyContent:'center'}}>
                <View style={styles.profileContainer}>
                        <Image style={styles.profileImg} source={require('../assets/profile_img.jpg')}></Image>
                </View>
                <Text style={styles.profileName}>Rachel Bilson</Text>
                <Text style={styles.email}>rachelbilson123#@gmail.com</Text>
            </View>
                
            
                <View style={styles.menuItems}>
                    <Icon name='grid-view' size={16}></Icon>
                    <Text style={styles.txt}>All Categories</Text>
                </View>

                <View style={styles.menuItems}>
                    <Icon name='speed' size={16}></Icon>
                    <Text style={styles.txt}>Offer Zone</Text>
                </View>

                <View style={styles.menuItems}>
                    <Icon name='local-mall' size={16}></Icon>
                    <Text style={styles.txt}>My Orders</Text>
                </View>

                <View style={styles.menuItems}>
                    <Icon name='shopping-cart' size={16}></Icon>
                    <Text style={styles.txt}>My Cart</Text>
                </View>

                <View style={styles.menuItems}>
                    <Icon name='favorite' size={16}></Icon>
                    <Text style={styles.txt}>My Favories</Text>
                </View>

                <View style={styles.menuItems}>
                    <Icon name='account-circle' size={16}></Icon>
                    <Text style={styles.txt}>My Account</Text>
                </View>

                <View style={{borderTopWidth:0.5,borderTopColor:'gray',marginTop:20,width:'80%',marginLeft:20}}>
                <Text style={{fontSize:14,marginTop:10}}>Help Centre</Text>
                <Text style={{fontSize:14,marginTop:10}}>Privacy Policy</Text>
                </View>
           

            <TouchableHighlight style={styles.btn}>
                    <Text style={styles.btn_txt}>Sign Out</Text>
            </TouchableHighlight>
                
            </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        height:'100%',
        width:'100%',
        backgroundColor:'white'
    },
    profileContainer:{
        height:150,
        width:150,
        backgroundColor:'white',
        borderRadius:80,
        elevation:10
        
    },
    profileImg:{
        height:150,
        width:150,
        backgroundColor:'white',
        borderRadius:80, 
    },
    btn:{
        height:30,
        width:100,
        backgroundColor:'#95c904',
        alignItems:'center',
        justifyContent:'center',
        marginTop:100,
        borderRadius:8,
        marginLeft:85
    },
    btn_txt:{
        fontSize:16,
        fontWeight:'bold',
        color:'white'
    },
    profileName:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        marginTop:10
    },
    email:{
        fontSize:14,
        fontWeight:'normal',
        color:'white',
        marginTop:0
    },
    menuItems:{
        flexDirection:'row',
        marginLeft:20,
        marginTop:20,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    txt:{
        fontSize:16,
        marginLeft:10
    },
    
})