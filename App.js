import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView, SafeAreaView, TouchableHighlight, Image, ImageBackground} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
//import RecipeCard from "./components/recipecard";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { NewRecipe } from "./dbFunctions/recipes"
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from './pages/AddRecipe'
import Explore from './pages/Explore'
import ProfilePage from './pages/ProfilePage'
import SignUp from './pages/SignUp'
import Icon from 'react-native-vector-icons/Feather';
import style from './StyleSheets/Explore';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator 
      screenOptions={({route}) =>({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
        if(route.name === 'Home'){
          iconName = focused ? 'home' : 'home-outline';

        }else if(route.name === 'AddRecipe'){
          iconName = 'ios-add'
        }else if(route.name === 'Profile'){
          iconName = focused ? 'person' : 'person-outline';
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
    })} 
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={Explore} />
        <Tab.Screen name="AddRecipe" component={AddRecipe} />
        <Tab.Screen name="Profile" component={ProfilePage} />
      </Tab.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator mode="modal" headerMode="none">
      <MainStack.Screen name="Home" component={HomeTabs} />
      <MainStack.Screen name="RecipeDetails" component={RecipeDetails}/>
      <MainStack.Screen name="SignUp" component={SignUp}/>
    </MainStack.Navigator>
    </NavigationContainer>
  );
}