import React,{useState} from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView } from "react-native";

export default function AddRecipe() {
    const [title,setTitle] = useState("");
    const rating = 0;
    const [cooktime,setCookTime] = useState(0);
    const [instructions,setInstructions] = useState("");

    const newRecipe =()=>{
        fetch('https://grillthemealapi.herokuapp.com/recipes',{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                rating: rating,
                cooktime: cooktime,
                instructions: instructions
            })
        })
    }

    return (
      <ScrollView style={{ height: "100%" }}>
        <View style={{ marginTop: 80 }}>
          <Text style={style.titleStyle}>Title:</Text>
          <TextInput id="title" placeholder="Recipe Title" onChangeText={setTitle} style={style.textInput}></TextInput>
          <Text style={style.titleStyle}>Cooktime:</Text>
          <TextInput id="cooktime" onChangeText={setCookTime} keyboardType={'number-pad'} placeholder="Cooking Time (minutes)" style={style.textInput}></TextInput>
          <Text style={style.titleStyle}>Instructions:</Text>
          <TextInput id="instructions" onChangeText={setInstructions} multiline={true} numberOfLines={4} style={[style.textInput,{height:85,textAlignVertical:'top',padding:5}]}></TextInput>
          <TouchableOpacity onPress={() => newRecipe()} style={style.buttonStyle}>
            <Text>Submit Recipe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    );
  }

  const style = StyleSheet.create({
    textInput: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10,
        paddingHorizontal:5
      },
      buttonStyle: {
        alignItems: "center",
        margin: 20,
        justifyContent: "center",
        backgroundColor: "yellowgreen",
        height: 55,
        borderRadius: 10
      }
  })