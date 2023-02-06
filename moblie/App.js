import React from "react";
import { View,Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { Dimensions } from "react-native";
import Home from "./src/Home";
var widthfull = Dimensions.get('window').width; //full width
var heightfull = Dimensions.get('window').height; //full height
const App = () =>{
  const exam = [
    {
      id: "1",
      name:"lession 1",
      count: 32,
      user_name: "son"
    },
    {
      id: "2",
      name:"lession 2",
      count: 32,
      user_name: "son"
    },
    {
      id: "3",
      name:"lession 3",
      count: 32,
      user_name: "son"
    },
  ]
  return(
    <SafeAreaView style = {styles.main}>
      <Home/>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  main:{
    backgroundColor:"#6A5AE0",
    with: widthfull,
    height: heightfull,
  },

})


export default App