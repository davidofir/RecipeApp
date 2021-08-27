import React, { useState,useEffect,Component, useCallback } from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

export default function RecipeDetails({route, navigation}){
    let [recipeData, setRecipeData] = useState([]);
    var rating = (rated) => {
        const rate = []
        for(let i = 0; i < 5; i++){
            if(rated > 0.5){
            rate.push(<Icon name="star" key={i} type="material" size={20}/>)
            }
            else if(rated === 0.5){
                rate.push(<Icon name="star-half" key={i} type="material" size={20}/>)
            }
            else{
                rate.push(<Icon name="star-border" key={i} type="material" size={20}/>)
            }

            rated--;
        }
        return rate;
    }
    return(
        
        <View style={style.safeView}>
            <View style={style.insideView}>
                <ImageBackground source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }} style={{flex: 4}}>
                    <TouchableOpacity style={style.backButton} onPress={() => navigation.goBack()}>
                        <Text style={{alignSelf:"center",padding:5}}><Icon name='arrow-back' type='material' size={20}/></Text>
                    </TouchableOpacity>  
                </ImageBackground>
                <View style={style.textViewHolder}>
                    <ScrollView>
                <View style={[style.textView,{borderBottomWidth:2}]}>
                    <Text style={{ fontSize: 30 }}>{route.params.data.title}</Text>
                    </View>
                    <View style={[style.textView,{paddingVertical:20}]}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",marginBottom:10}}>
                    <Text>Time: {route.params.data.cooktime} minutes</Text>
                    <Text >User Rating:</Text>
                    <Text>
                        {rating(route.params.data.rating)}
                    </Text>
                    </View>
                    <View style={{margin:8}}>
                    <Text>Instructions:</Text>
                    <Text>{route.params.data.instructions}</Text>
                    </View>
                    <Text>Creation Date: {route.params.data.creation_date}</Text>
                    </View>
                    </ScrollView>
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
        marginHorizontal:20,
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
  