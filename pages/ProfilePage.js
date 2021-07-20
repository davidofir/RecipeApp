import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView } from "react-native";
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function ProfilePage({ navigation }) {
    let [signedIn, setSignedIn] = useState(false);


    return (

        signedIn ?
        <Text>ACCOUNT INFO</Text>
        :
        <SignIn navigation={navigation}/>
    );
}

const style = StyleSheet.create({
    
})