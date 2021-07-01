import React from 'react'
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";
//import "./recipeCard.css"
export default function (props) {
    return (
        <View style={style.container}>
            <View style={style.recipeCard}>
                <TouchableOpacity
                    style={style.touchableOpacity}
                    key={props.id}
                    onPress={() => { 
                         props.navigation.navigate("RecipeDetails",{data:props});
                    }}
                >
                    <Image
                        source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }}
                        style={style.recipeImg}
                    />
                    <View style={style.textContainer}>
                        <Text>{props.title}</Text>
                        <Text>{props.instructions}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    recipeCard: {
        flex: 1,
        backgroundColor: "greenyellow",
        margin: 20,
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 10,
        // boxShadow: 0 3 15 rgba(0,0,0,0.1),
    },
    // touchableOpacity: {
    //     margin: 20
    // },
    recipeImg: {
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        fontFamily: "Arial",
        fontSize: 20,
        padding: 20,
        paddingBottom: 10
    }
    // .textContainer{
    //     fontWeight: 200,
    //     fontSize: 14px,
    // }

});