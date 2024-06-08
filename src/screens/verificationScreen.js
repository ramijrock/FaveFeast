import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../constants';
import {Display} from '../utils';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const VerificationScreen = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  const navigation = useNavigation();
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const forthRef = useRef();
  const [otp, setOtp] = useState({1: "", 2: "", 3: "", 4: ""});
  return (
    <View style={styles.container}>
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
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.content}>
        Enter the OTP number just sent you at{' '}
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </Text>
      <View style={styles.OTPContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstRef}
            onChangeText={(text) => {
                setOtp({...otp, 1: text});
                text && secondRef.current.focus()
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondRef}
            onChangeText={(text) => {
                setOtp({...otp, 2: text});
                text ? thirdRef.current.focus() : firstRef.current.focus()
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdRef}
            onChangeText={(text) => {
                setOtp({...otp, 3: text});
                text ? forthRef.current.focus() : secondRef.current.focus()
            }}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
            ref={forthRef}
            onChangeText={(text) => {
                setOtp({...otp, 4: text});
                !text && thirdRef.current.focus()
            }}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={console.log('otp=======>', otp)}>
        <Text style={styles.signInButtonText}>Verify</Text>
      </TouchableOpacity>
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
  phoneNumberText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    lineHeight: 18 * 1.4,
    color: Colors.DEFAULT_YELLOW,
  },
  OTPContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 8,
    borderColor: Colors.DEFAULT_GREEN,
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: Colors.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
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

export default VerificationScreen;
