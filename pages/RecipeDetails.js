import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
export default function RecipeDetails({route}){
    let [recipeData, setRecipeData] = useState([]);
    return(
        <View>
            {console.log(route.params.data)}
            <Text>{route.params.data.title}</Text>
        </View>
    );
}