import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors, Fonts, Images } from "../constants";
import { Display } from "../utils";


const WelcomeCard = ({image, title, content}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={Images[image]} resizeMode="contain" />
            <Text style={styles.titleText}>
                {title}
            </Text>
            <Text style={styles.contentText}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Display.setWidth(100)
    },
    image:{
        height: Display.setHeight(30),
        width: Display.setWidth(60),
    },
    titleText:{
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        color: Colors.DEFAULT_GREEN
    },
    contentText:{
        fontSize: 18,
        fontFamily: Fonts.POPPINS_LIGHT,
        textAlign:'center',
        marginHorizontal:20
    }
})

export default WelcomeCard;