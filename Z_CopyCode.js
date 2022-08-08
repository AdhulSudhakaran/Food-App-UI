import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack=createStackNavigator()
import LoginSignup from "./src/LoginSignup";


const Drawer=createDrawerNavigator();
import HomeScreen from "./src/HomeScreen";
import DrawerContent from "./src/DrawerContent";

const TopTab=createMaterialTopTabNavigator();
import Shampo from "./src/Shampo";
import FaceCream from "./src/FaceCream";


const Bottom=createBottomTabNavigator();


function MyStack(){
  return(
    <Stack.Navigator initialRouteName="LoginSignup" >
      <Stack.Screen name="LoginSignup" component={LoginSignup} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="TopTab" component={MyTopTab} options={{headerShown:false}}></Stack.Screen>
    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator drawerContent={(props)=> <DrawerContent {...props}> </DrawerContent>}>
      <Drawer.Screen  name="HomeScreen" component={HomeScreen} options={{headerTitle:''}}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

function MyTopTab(){
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="Shampo" component={Shampo} options={{headerShown:false}}></TopTab.Screen>
      <TopTab.Screen name="FaceCream" component={FaceCream} options={{headerShown:false}}></TopTab.Screen>
    </TopTab.Navigator>
  )
}





export default function App(){
  return(
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  )
}