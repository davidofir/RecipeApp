import React, { useState,useEffect,Component } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
export default function RecipeDetails({route, navigation}){
    let [recipeData, setRecipeData] = useState([]);
    return(
        <View style={style.safeView}>
            <View style={style.insideView}>
                <ImageBackground source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }} style={{flex: 4}}>
                    <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                        <Text style={{alignSelf:"center",padding:5}}><Icon name='arrow-back' type='material' size={20}/></Text>
                    </TouchableOpacity>  
                </ImageBackground>
                <View style={style.textViewHolder}>
                    <View style={style.textView}>
                    <Text style={{ fontSize: 30 }}>{route.params.data.title}</Text>
                    <ScrollView style={{margin:10}}>
                    <Text>Time: {route.params.data.cooktime}</Text>
                    <Text>Rating: {route.params.data.rating}</Text>
                    <Text>Instructions:</Text>
                    <Text>{route.params.data.instructions}</Text>
                    </ScrollView>
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
        margin: 20,
        backgroundColor:"#FFFFFFCC",
        padding:15,
        borderRadius:10
    },
    backButton: {
        width: "8%",
        height: "auto",
        borderRadius: 10,
        margin: 20,
        marginTop: 50
    }
  });
  