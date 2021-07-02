import React from 'react';
import {View,StyleSheet} from 'react-native';
export default function Ingredient(props){

    return(
        <View>
            <Text>
                {props.qty} {props.unit} {props.name}
            </Text>
        </View>
    )
}