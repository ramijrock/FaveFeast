import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Colors, Fonts, Images} from '../constants';
import {Display} from '../utils';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
      <Text style={styles.titleText}>FaveFeast</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    height: Display.setHeight(20),
    width: Display.setWidth(50),
    tintColor: Colors.DEFAULT_WHITE,
  },
  titleText: {
    color: Colors.DEFAULT_WHITE,
    fontSize: 32,
    // fontFamily: Fonts.POPPINS_SEMI_BOLD
  },
});

export default SplashScreen;
