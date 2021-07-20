import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView, Image, TouchableHighlight } from "react-native";



export default function ProfilePage() {
  
    return (
            <View style={style.textInputContainer}>
                <Image
              source={{ uri: "https://i.pinimg.com/736x/a8/d1/9b/a8d19bfb6d5172adc87d65908c69137a.jpg" }}
              style={{width: "100%", height: 200, resizeMode: "contain", marginBottom: 20}}
            ></Image>
              <TextInput placeholder="Username" style={style.textInput}></TextInput>
              <TextInput placeholder="Password" style={style.textInput}></TextInput>
              <TouchableHighlight style={style.signInBtn}><Text style={{color: "white"}} onPress={() => {alert("signIn")}}>Sign In!</Text></TouchableHighlight>
              <View>
                <Text style={{textAlign: 'center'}}>Don't have an account?</Text>
                <Button title="Signup Now" onPress={() => {alert("signUp")}}></Button>
              </View>
            </View>
    );
}

const style = StyleSheet.create({
    textInputContainer: {
        margin: 40,
        marginTop: 160,
        // borderWidth: 1,
        // //flexDirection: 'row',
        // margin: 20,
        // marginBottom: 5,
        // padding: 10,
        // borderRadius: 10,
        // borderColor: "#c7c7c7"
      },
    textInput:{
        borderWidth: 1,
        marginBottom: 40,
        padding: 15,
        borderRadius: 10,
        borderColor: "#c7c7c7"
    },
    signInBtn:{
        marginBottom: 5,
        marginBottom: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#83c73a",
        alignItems: 'center',
    }
})