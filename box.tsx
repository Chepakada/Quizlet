import React from "react";
import type {PropsWithChildren} from 'react';

import {
    Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

  
  type SectionProps = PropsWithChildren<{
    answer: Boolean;
    nextPage : any;
  }>;


  function Box({answer,nextPage, children}:SectionProps){
    return(
        <View style = {style.styleBox}>
            <Text style = {style.styleText}>
                {children}
            </Text>
            <View>
                <View style = {style.styleButton}><Button title="True" /></View>
                
                <View style = {style.styleButton}><Button title = "False"/></View>
            </View>
            <View><Button title = "Next Question" onPress={nextPage}></Button></View>
        </View>
    )
  }

  var style = StyleSheet.create({
    styleBox:{
        backgroundColor:"#F5F1ED",
        marginTop:200,
        margin: 50,
        paddingHorizontal: 25,
        textAlign:"center",
        padding:10,
        paddingBottom:110,
    },
    styleButton:{
        margin:5,
        padding:5,
        fontWeight:700,
        fontSize: 300,
        backgroundColor:"#A99985",
    },
    styleText:{
        fontSize:24,
    }
  })

  export default Box
