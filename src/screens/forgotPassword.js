import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";


const ForgotPassword = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default ForgotPassword;