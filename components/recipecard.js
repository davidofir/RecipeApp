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
                         props.navigation.navigate("RecipeDetails",{data:props.data});
                    }}
                >
                    <Image
                        source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }}
                        style={style.recipeImg}
                    />
                    <View style={style.textContainer}>
                        <Text>{props.title}</Text>
                        <Text>{props.instructions}</Text>
                        <Text style={{fontWeight: "bold"}}>{props.date}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        marginTop: 20
    },
    recipeCard: {
        flex: 1,
        backgroundColor: "greenyellow",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 20,
        textAlign: "center",
        borderRadius: 10,
        width: 250,
        maxHeight: 250,
        // boxShadow: 0 3 15 rgba(0,0,0,0.1),
    },
    recipeCardLastChild:{
        marginRight: 20
    },
    // touchableOpacity: {
    //     margin: 20
    // },
    recipeImg: {
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    textContainer: {
        fontFamily: "Arial",
        fontSize: 20,
        padding: 20,
        paddingBottom: 10,
    }
    // .textContainer{
    //     fontWeight: 200,
    //     fontSize: 14px,
    // }

});