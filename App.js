import React, { useState, useEffect } from "react";
import { Text, View, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeCard from "./components/recipecard";
//import { ScrollView } from "react-native-gesture-handler";

function HomeScreenOne({ navigation }) {
  let [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes`);
      const data = await response.json();
      setRecipeData(data);
      setLoading(false);
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

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <View style={{ margin: 10 }}>
        <Button onPress={() => navigation.goBack()} title="Dismiss" />
      </View>
    </View>
  );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeOne" component={HomeScreenOne} />
      <MainStack.Screen name="Details" component={DetailsScreen} />
    </MainStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator mode="modal" tabMode="none">
        <Tab.Screen name="Home" component={MainStackScreen} />
        <Tab.Screen name="MyModal" component={ModalScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
