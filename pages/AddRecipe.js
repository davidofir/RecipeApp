import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, View, Button, ScrollView } from "react-native";
import Ingredient from '../components/ingredient';
import { FlatList } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalDropdown from 'react-native-modal-dropdown';
export default function AddRecipe() {
    const [title, setTitle] = useState("");
    const rating = 0;
    const [cooktime, setCookTime] = useState(0);
    const [instructions, setInstructions] = useState("");
    const [unitIndex,setUnitIndex] = useState(0);
    const [ingredients, setIngredients] = useState([]);
    const [itemID, setItemID] = useState(0);
    const [ingName,setIngName] = useState("");
    const unitOptions = ['KG','G','L','ML','C','LB','OZ','GAL','TBSP','TSP','F','Pinch','QT','Cloves'];
    const [qty,setQty] = useState(0);
    const newRecipe = () => {
        fetch('https://grillthemealapi.herokuapp.com/recipes', {
        //fetch('https://localhost:3000/recipes', {
            method: 'POST',
            //method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                rating: rating,
                cooktime: cooktime,
                instructions: instructions,
                ingredients:ingredients
            })
        })
    }
    // const newRecipe = async () => {
    //     const response = await fetch(`http://localhost:3000/users`);
    //     const data = await response.json();
    //     console.log(data);
    // }

    return (
        <View>
            <ScrollView style={{ height: "75%",marginBottom:5 }}>
                <View style={{ marginTop: 80 }}>
                    <TextInput id="title" placeholder="Recipe Title" onChangeText={setTitle} style={style.textInput}></TextInput>
                    <TextInput id="cooktime" onChangeText={setCookTime} keyboardType={'number-pad'} placeholder="Cooking Time (minutes)" style={style.textInput}></TextInput>
                    <TextInput id="instructions" placeholder="instructions" onChangeText={setInstructions} multiline={true} numberOfLines={4} style={[style.textInput, { height: 85, textAlignVertical: 'top', padding: 5 }]}></TextInput>

                </View>
            </ScrollView >
            <View style={{ paddingHorizontal: 5 }}>
                <FlatList data={ingredients} renderItem={({ item }) => <Ingredient name={item.name} qty={item.qty} unit={item.unit} />} keyExtractor={item => item.id.toString()} />
                <ScrollView style={{height:"55%"}}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <TextInput onChangeText={setIngName} placeholder="Ingredient Name" style={[style.textInput, { width: 150, maxWidth: 300, textAlign: "center" }]} />
                    <TextInput onChangeText={setQty} placeholder="quantity" keyboardType="number-pad" style={[style.textInput, { width: 150, maxWidth: 300, textAlign: "center" }]} />
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text>Unit: </Text>
                    <ModalDropdown style={{backgroundColor:"#dce6e5",padding:2,borderRadius:10,width:50,maxHeight:50,alignItems:"center"}} options={unitOptions} defaultIndex={0} defaultValue="KG" onSelect={setUnitIndex}/>
                    </View>
                    <TouchableOpacity onPress={()=>{
                            if (ingName.length > 0 && qty.toString().length > 0) {
                                setItemID(itemID + 1);
                                let item = {
                                    id: itemID,
                                    name: ingName,
                                    qty: qty,
                                    unit: unitOptions[unitIndex]
                                }
                                setIngredients([...ingredients, item]);
                            }
                    }}>
                        <Ionicons name="ios-add" size={20}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => newRecipe()} style={style.buttonStyle}>
                    <Text>Submit Recipe</Text>
                </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    textInput: {
        height: 45,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 20,
        borderRadius: 10,
        paddingHorizontal: 5
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