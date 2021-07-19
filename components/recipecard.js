import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground, TouchableHighlight } from "react-native";
//import "./recipeCard.css"
export default function (props) {
    const [ingredients,setIngredients] = useState([]);
    useEffect(()=>{
        async function getData(){
        const response = await fetch(`https://grillthemealapi.herokuapp.com/ingredients/${props.id}`)
        const ingredientData = await response.json();
        setIngredients(ingredientData);
        }
        getData();
    },[])
    return (
        <TouchableHighlight
            style={style.touchableOpacity}
            key={props.id}
            onPress={() => { 
                    props.navigation.navigate("RecipeDetails",{data:props.data});
            }}
        >
            <ImageBackground source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }} style={style.recipeBg}>


            {/* <Image
                source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }}
                style={style.recipeImg}
            /> */}

            <View style={style.textContainer}>
                <Text style={{fontSize:20}}>{props.title}</Text>
                {/* {ingredients.length > 0 ? ingredients.map((ing,key)=>(<Text key={key}>{key+1}. {ing.qty} {ing.unit} {ing.name}</Text>)): <Text>none</Text>} */}
            
            </View>
            </ImageBackground>
        </TouchableHighlight>
            
    )
}

const style = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: "greenyellow",
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        marginRight: 5,
        textAlign: "center",
        borderRadius: 10,
        width: 265,
        height:"auto",
        minHeight: 250,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,
        
        elevation: 1,
    },
    recipeCardLastChild:{
        marginRight: 20
    },
    recipeBg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'column-reverse' 
    },
    recipeImg: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        fontFamily: "Arial",
        fontSize: 20,
        padding: 12,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#FFFFFFCC",
        justifyContent: 'flex-end'
    }
    // .textContainer{
    //     fontWeight: 200,
    //     fontSize: 14px,
    // }

});