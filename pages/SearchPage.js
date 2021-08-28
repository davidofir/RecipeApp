import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity, ImageBackground} from 'react-native';
import style from '../StyleSheets/Explore';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
export default function SearchPage(){
    return(
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground
              source={{ uri: "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Easy-Pasta-Salad-Recipe-3-1200.jpg" }}
              style={{width: "100%", height: 80, justifyContent: "flex-end", position: "relative" }}
            >
               <Text style={style.pageTitle}>Search</Text>
            </ImageBackground>
            <View style={style.searchBar}>
                <TextInput style={{flex:1}}></TextInput>
                <Icon name="search" size={26} color="#83c73a" />
            </View>
            </ScrollView>
        </View>
    );
}
