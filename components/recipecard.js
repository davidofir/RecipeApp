import React from 'react'
import { Text, View, Button, TouchableOpacity } from "react-native";
import "./recipeCard.css"

export default function (props) {
    return (
        <div className="container">
            <div className="recipeCard">
                <TouchableOpacity
                    className="touchableOpacity"
                    key={props.id}
                    onPress={() => alert("click!")}
                >
                    <img
                        className="recipeImg"
                        src="https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" alt="" />
                    <div className="textContainer">
                        <h1>{props.title}</h1>
                        <p>{props.instructions}</p>
                    </div>
                </TouchableOpacity>
            </div>
        </div>
    )
}
