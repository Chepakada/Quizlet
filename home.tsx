import React from "react";
import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
  } from 'react-native';


export default function HomeScreen(props)
{
    const navigate = props.render


    return (
        <SafeAreaView style = {style.stylePage}>
            <View>
                <Text style = {style.styleText}> Welcome to the Quizlet</Text>
            </View>
            <View style = {style.styleButton}>
                <Button  title = {"Go to the quiz"} onPress = {navigate}/>
            </View>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    stylePage:{
        backgroundColor:"#968e85",
        marginTop:200,

    },
    styleText:{
        color :"#ecdcb0",
        fontSize: 25,
        textAlign:"center",
        padding:20,
    },
    styleButton:{
        backgroundColor: "#FFCAB1",
        color:"#968e85",
        padding: 10,
    }

})
