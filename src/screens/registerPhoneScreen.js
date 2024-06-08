import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Colors, CountryCode, Fonts} from '../constants';
import {FlagItem, Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Display} from '../utils';
import {StaticImageService} from '../services';

const getDropDownStyle = y => ({...styles.countryDropDown, top: y + 60});

const RegisterPhoneScreen = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.country == 'India'),
  );
  const [inputsContainerY, setInputsContainerY] = useState(0);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [dorpdownLayout, setDropdownLayout] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');

  const closeDropDown = (pageX, pageY) => {
    if (isDropDownOpen) {
      if (
        pageX < dorpdownLayout?.x ||
        pageX > dorpdownLayout?.x + dorpdownLayout?.width ||
        pageY > dorpdownLayout?.y ||
        pageY > dorpdownLayout?.y + dorpdownLayout?.height
      ) {
        setIsDropDownOpen(false);
      }
    }
  };
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
        closeDropDown(pageX, pageY)
      }>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.headerTitle}>Register Phone</Text>
      </View>
      <Text style={styles.title}>Register Phone</Text>
      <Text style={styles.content}>
        Enter your register phone number to login.
      </Text>
      <Text style={styles.title}>Phone Number</Text>
      <View
        style={styles.inputsContainer}
        onLayout={({
          nativeEvent: {
            layout: {y},
          },
        }) => setInputsContainerY(y)}>
        <TouchableOpacity
          style={styles.countryListContainer}
          onPress={() => setIsDropDownOpen(!isDropDownOpen)}>
          <Image
            source={{
              uri: StaticImageService.getFlagIcon(selectedCountry.countryCode),
            }}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            placeholder="Phone number"
            placeholderTextColor={Colors.DEFAULT_GREY}
            selectionColor={Colors.DEFAULT_GREY}
            keyboardType="number-pad"
            style={styles.inputText}
            onFocus={() => setIsDropDownOpen(false)}
            onChangeText={text => setPhoneNumber(selectedCountry.code + text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('VerificationScreen', {phoneNumber})}>
        <Text style={styles.signInButtonText}>Continue</Text>
      </TouchableOpacity>
      {isDropDownOpen && (
        <View
          style={getDropDownStyle(inputsContainerY)}
          onLayout={({
            nativeEvent: {
              layout: {x, y, height, width},
            },
          }) => setDropdownLayout({x, y, height, width})}>
          <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <FlagItem
                {...item}
                onPress={country => {
                  setSelectedCountry(country);
                  setIsDropDownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  content: {
    fontSize: 20,
    fontFamily: Fonts.POPPINS_MEDIUM,
    marginTop: 10,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    // marginVertical:50
  },
  countryListContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    justifyContent: 'center',
    flex: 1,
  },
  flagIcon: {
    height: 20,
    width: 20,
  },
  countryCodeText: {
    fontSize: 14,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    lineHeight: 14 * 1.4,
    color: Colors.DEFAULT_BLACK,
  },
  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Colors.DEFAULT_BLACK,
  },
  countryDropDown: {
    backgroundColor: Colors.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(80),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.LIGHT_GREY2,
    zIndex: 3,
  },
  signInButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 8,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default RegisterPhoneScreen;
