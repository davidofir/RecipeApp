import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import RecipeCard from "./components/recipecard";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { NewRecipe } from "./dbFunctions/recipes"
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from './pages/AddRecipe'

function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  let [recipeData, setRecipeData] = useState([]);
  let [sortedRecipeData, setSortedRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes`);
      //const response = await fetch(`http://localhost:3001/recipes`);
      const data = await response.json();
      setRecipeData(data);

      const sortedRecipes = recipeData.sort((a, b) => new Date(b.creation_time).getTime() - new Date(a.creation_time).getTime());
      setSortedRecipeData(sortedRecipes);

      sortedRecipes.map((item, index) => {
//        console.log(item)
      })

      //sortRecipesByDate(recipeData);
     
      //recipeData = sortedRecipeData;
      //setLoading(false);
    }
    fetchData();
  }, [isFocused])


  //  const sortRecipesByDate = arr => {
  //    const sorter = (a,b) => {
  //       alert(new Date(b.creation_time).getTime() - new Date(a.creation_time).getTime())
  //       return new Date(a.creation_time).getTime() - new Date(b.creation_time).getTime()
  //    }
  //    arr.sort(sorter);
  //  }


  return (
    loading || !sortedRecipeData || !sortedRecipeData ? // || sortedRecipeData.length === 0 ?
      <Text>Loading...</Text>
      :
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={style.title}>Recently Added:</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          sortedRecipeData.map((item, index) => {
            return (
              <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_time} navigation={navigation} />
            )
          })
        }
      </ScrollView>


  <Text style={style.title}>Popular Now:</Text>
  <ScrollView horizontal={true}>
    {
      recipeData.map((item, index) => {
        return (
          <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_time} navigation={navigation} />
        )
      })
    }
  </ScrollView>

  <Text style={style.title}>Highly Rated:</Text>
  <ScrollView horizontal={true}>
    {
      recipeData.map((item, index) => {
        return (
          <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_time} navigation={navigation} />
        )
      })
    }
  </ScrollView>

      </ScrollView>
  );
}

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
        }
        return <Ionicons name={iconName} size={size} color={color}/>
      },
    })} 
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="AddRecipe" component={AddRecipe} />
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
    </MainStack.Navigator>
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
  title:{
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
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