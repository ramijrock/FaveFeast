import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StaticImageService } from "../services";
import { Colors, Fonts } from "../constants";

const FlagItem = ({country, countryCode, code, onPress}) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={() => onPress({country, countryCode, code})}>
                <Image style={styles.flagImage} source={{uri: StaticImageService.getFlagIcon(countryCode)}} />
                <Text style={styles.flagText}>{code}</Text>
                <Text style={styles.flagText}>{country}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10
    },
    flagImage:{
        height:25,
        width:25,
        marginRight:10
    },
    flagText:{
        fontSize:14,
        lineHeight:14 * 1.4,
        color:Colors.DEFAULT_BLACK,
        fontFamily:Fonts.POPPINS_MEDIUM,
        marginRight:10
    }
})

export default FlagItem;