import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeCard from "./components/recipecard";
import { NewRecipe } from "./dbFunctions/recipes"

//import { ScrollView } from "react-native-gesture-handler";


function HomeScreen() {
  let [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes`);
      const data = await response.json();
      setRecipeData(data);
      //setLoading(false);
    }
    fetchData();
  }, [])


  return (
    loading || !recipeData ?
      <Text>Loading...</Text>
      :

      <ScrollView>
        {
          recipeData.map((item, index) => {
            return (
              <RecipeCard key={index} id={index} title={item.title} instructions={item.instructions} />
            )
          })
        }
      </ScrollView>

  );
}


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}

function AddRecipe() {
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={{ marginTop: 80 }}>
        <Text style={style.titleStyle}>Title:</Text>
        <TextInput id="title" style={style.textInput}></TextInput>
        <Text style={style.titleStyle}>Rating:</Text>
        <TextInput id="rating" style={style.textInput}></TextInput>
        <Text style={style.titleStyle}>Cooktime:</Text>
        <TextInput id="cooktime" style={style.textInput}></TextInput>
        <Text style={style.titleStyle}>Instructions:</Text>
        <TextInput id="instructions" style={style.textInput}></TextInput>
        <TouchableOpacity onPress={() => NewRecipe()} style={style.buttonStyle}>
          <Text>Submit Recipe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainStackScreen} />
        <Tab.Screen name="Add Recipe" component={AddRecipe} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  textInput: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    borderRadius: 10
  },
  titleStyle: {
    marginLeft: 20
  },
  buttonStyle: {
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
    backgroundColor: "yellowgreen",
    height: 55,
    borderRadius: 10
  }
});