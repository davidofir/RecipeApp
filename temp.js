import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView, SafeAreaView, TouchableHighlight, Image, ImageBackground} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/native";
import RecipeCard from "./components/recipecard";
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { NewRecipe } from "./dbFunctions/recipes"
import RecipeDetails from "./pages/RecipeDetails";
import AddRecipe from './pages/AddRecipe'
import Icon from 'react-native-vector-icons/Feather';

function HomeScreen({ navigation }) {
  const isFocused = useIsFocused();
  let [recipeData, setRecipeData] = useState([]);
  let [sortedRecipeData, setSortedRecipeData] = useState([]);
  let [sortedByRating, setSortedRating] = useState([]);
  const [loading, setLoading] = useState(false);
  let [filtersUnselected, setFiltersUnselected] = useState(["Vegan", "Creamy", "Fish"]);
  let [filtersSelected, setFiltersSelected] = useState(["Salty", "Spicy"]);

  async function fetchData() {
    const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes`);
    //const response = await fetch(`http://localhost:3000/recipes`);
    const data = await response.json();
    setRecipeData(data);
    // const sortedRecipes = recipeData.sort((a, b) => new Date(a.creation_date).getTime() - new Date(b.creation_date).getTime());
    // setSortedRecipeData(sortedRecipes);
  }

  async function fetchSortedData() {
    //const response = await fetch(`http://localhost:3000/recipes/sorted`);
    const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes/sorted`);
    const data = await response.json();
    setSortedRecipeData(data);
  }

  async function fetchSortedRating() {
    //const response = await fetch(`http://localhost:3000/recipes/sortedRating`);
    const response = await fetch(`https://grillthemealapi.herokuapp.com/recipes/sortedRating`);
    const data = await response.json();
    setSortedRating(data);
  }

  useEffect(() => {
    fetchData();
    fetchSortedData();
    fetchSortedRating();
  }, [isFocused])


  //  const sortRecipesByDate = arr => {
  //    const sorter = (a,b) => {
  //       alert(new Date(b.creation_time).getTime() - new Date(a.creation_time).getTime())
  //       return new Date(a.creation_time).getTime() - new Date(b.creation_time).getTime()
  //    }
  //    arr.sort(sorter);
  //  }


  const toggleFiltered = (filter) => {
    alert('Salty' in filtersSelected);
    // if ('Salty' in filtersSelected){
    //   alert(filter);
    // }
  }

  return (
    loading || !sortedRecipeData || !sortedRecipeData ? // || sortedRecipeData.length === 0 ?
      <Text>Loading...</Text>
      :
      <View>
      {/* <SafeAreaView> */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
          source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }}
          style={{ width: "100%", height: 80, justifyContent: "flex-end" }}
        >
           <Text style={style.pageTitle}>Explore</Text>
        </ImageBackground>
        <View style={style.searchBar}>
          <TextInput style={{flex: 1}}></TextInput>
          <Icon name="search" size={26} color="#83c73a" />
        </View>


        <Text style={{marginLeft: 25, marginTop: 7, fontSize: 12}}>Filter</Text>
        <View style={style.filterContainer}>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
           {
              filtersSelected.map((item, index) => {
                return (
                  <TouchableOpacity
                  key={index}
                    style={style.filtersSelected}
                    onPress={() => {toggleFiltered(item)}}>
                    <Text>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
              })
            }
            {
              filtersUnselected.map((item, index) => {
                return (
                  <TouchableOpacity
                  key={index}
                    style={style.filtersUnselected}
                    onPress={() => {alert('You tapped the button!');  }}>
                    <Text>
                      {item}
                    </Text>
                  </TouchableOpacity>
                )
            })
          }
         </ScrollView>
          <TouchableHighlight style={style.filterBtn}>
            <Icon name="plus" size={26} color="#83c73a" />
          </TouchableHighlight>
        </View>


      <View style={style.sectionHeader}>
    <Text style={style.title}>Popular Now</Text>
    <Text
        onPress={() => Linking.openURL('http://google.com')}>
    See All
    </Text>
  </View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {
      recipeData.map((item, index) => {
        return (
          <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_date} navigation={navigation} />
        )
      })
    }
  </ScrollView>

  <View style={style.sectionHeader}>
    <Text style={style.title}>Newly Added</Text>
    <Text
        onPress={() => Linking.openURL('http://google.com')}>
    See All
    </Text>
  </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          sortedRecipeData.map((item, index) => {
            return (
              <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_date} navigation={navigation} />
            )
          })
        }
      </ScrollView>
  
  <View style={style.sectionHeader}>
    <Text style={style.title}>Highly Rated</Text>
    <Text
        onPress={() => Linking.openURL('http://google.com')}>
    See All
    </Text>
  </View>
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {
      sortedByRating.map((item, index) => {
        return (
          <RecipeCard key={index} id={item.recipeID} data={item} title={item.title} instructions={item.instructions} date={item.creation_time} navigation={navigation} />
        )
      })
    }
  </ScrollView>

      </ScrollView>
      {/* </SafeAreaView> */}
      </View>
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
  pageTitle: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    marginTop: 4,
    color: "white",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.55)',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    // marginTop: 20,
    // marginLeft: 20
  },
  buttonStyle: {
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
    height: 55,
    borderRadius: 10
  },
  sectionHeader: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    margin: 20,
    marginBottom: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: "#c7c7c7"
  },
  filterBtn: {
    //width: 40,
    // borderWidth: 1,
    // borderRadius: 10,
    borderColor: "#c7c7c7",
    //alignSelf: "flex-end",
    //marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
  },
  filterContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    padding: 10
  },
  filtersSelected: {
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 2,
    backgroundColor: "#ebfadc",
    borderColor: "#83c73a"
  },
  filtersUnselected: {
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    marginRight: 5,
    marginBottom: 2
  },
  headerBg: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    flex: 1,
}
});