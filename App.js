import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Navigators from "./src/navigators";


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigators />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default App;