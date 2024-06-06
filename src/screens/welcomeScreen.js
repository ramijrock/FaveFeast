import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Colors, Fonts, General} from '../constants';
import {WelcomeCard, Separator} from '../components';
import {Display} from '../utils';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [welcomeIndex, setWelcomeIndex] = useState(0);
  const welcomeIndexRef = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomeIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const pageScroll = () => {
    welcomeIndexRef.current.scrollToIndex({
      index: welcomeIndex < 2 ? welcomeIndex + 1 : welcomeIndex,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.setHeight(8)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeIndexRef}
          data={General.welcomeContents}
          key={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.setHeight(8)} />
      <Pagination index={welcomeIndex} />
      <Separator height={Display.setHeight(8)} />
      {welcomeIndex == 2 ? (
        <TouchableOpacity
          style={styles.getStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{paddingLeft: 11}}
            onPress={() => welcomeIndexRef.current.scrollToEnd()}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={pageScroll}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.welcomeContents?.length).keys()].map((_, key) =>
        key == index ? (
          <View style={pageStyle(true)} key={key} />
        ) : (
          <View style={pageStyle(false)} key={key} />
        ),
      )}
    </View>
  );
};

const pageStyle = isActive =>
  isActive
    ? styles.page
    : {...styles.page, backgroundColor: Colors.DEFAULT_GREY};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    // flex: 0.9
    height: Display.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Colors.DEFAULT_GREEN,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.setWidth(90),
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.LIGHT_GREEN,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_BOLD,
    lineHeight: 16 * 1.4,
  },
  getStartedButton: {
    backgroundColor: Colors.DEFAULT_GREEN,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  getStartedButtonText: {
    fontSize: 20,
    color: Colors.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
});

export default WelcomeScreen;
