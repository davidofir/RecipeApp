import React, { useState,useEffect } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RecipeDetails({route, navigation}){
    let [recipeData, setRecipeData] = useState([]);
    return(
        <View style={style.safeView}>
            <View style={style.insideView}>
                <ImageBackground source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }} style={{flex: 4}}>
                    <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity>  
                </ImageBackground>
                <View style={style.textViewHolder}>
                    <View style={style.textView}>
                    <Text style={{ fontSize: 30 }}>{route.params.data.title}</Text>
                    <Text>{route.params.data.cooktime}</Text>
                    <Text>{route.params.data.rating}</Text>
                    </View>
                </View> 
            </View>
        </View>    
    );
}

const style = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    insideView: {
        flex: 1,
    },
    textViewHolder: {
        backgroundColor: "#ecf7da",
        flex: 6
    },
    textView: {
        margin: 20
    },
    backButton: {
        width: 60,
        height: 40,
        backgroundColor: "#FFFFFFBB",
        borderRadius: 10,
        margin: 20,
        marginTop: 50
    }
  });
  