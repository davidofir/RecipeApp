import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeCard from "./components/recipecard";
import RecipeDetails from "./pages/RecipeDetails";
//import { ScrollView } from "react-native-gesture-handler";



function HomeScreen({navigation}) {
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
              <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} navigation={navigation}/>
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
      <MainStack.Screen name="RecipeDetails" component={RecipeDetails}/>
    </MainStack.Navigator>
  );
}

function AddRecipe() {
  return (
    <View style={{ marginTop: 80, display: "flex", height: "100%" }}>
      {/* style={{ flex: 1, height: "100%", justifyContent: 'center', alignItems: 'center', flexDirection: "row", }} */}

      <Text style={{
        marginLeft: 20
      }}>Title:</Text>

      <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        margin: 20
      }}></TextInput>

      <Text style={{
        marginLeft: 20
      }}>Rating:</Text>

      <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        margin: 20
      }}></TextInput>

      <Text style={{
        marginLeft: 20
      }}>Cooktime:</Text>

      <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        margin: 20
      }}></TextInput>

      <Text style={{
        marginLeft: 20
      }}>Description:</Text>

      <TextInput style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        placeholderTextColor: 'gray',
        margin: 20
      }}></TextInput>


    </View>
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