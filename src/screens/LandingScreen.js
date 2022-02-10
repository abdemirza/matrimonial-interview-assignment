import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import HeroImage from '../assets/images/hero.jpg';
import logo from '../assets/images/logo.png';
import {windowHeight, windowWidth} from '../constants/dimension';
import colors from '../constants/colors';
import {FONT_SIZE_EXTRA_LARGE} from '../constants/fontsize';
import Button from '../components/CustomButton';
import CustomButton from '../components/CustomButton';

const LandingScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={HeroImage}
        style={styles.bgImageStyle}
        >
        <View style={styles.titleView}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.titleText}>
            MOST EXCLUSIVE 
          </Text>
          <Text style={styles.titleText}>
          MATRIMONY SERVICE FOR
          </Text>
          <Text style={styles.titleText}>
          COMMUNITIES
          </Text>
        </View>
        <View style={styles.bottomView}>
          <CustomButton onPress={()=>navigation.navigate('Register')} secondary>Login</CustomButton>
          <CustomButton onPress={()=>navigation.navigate('Register')}>Sign up</CustomButton>
          
        </View>
      </ImageBackground>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageStyle: {

    flex: 1,
    justifyContent: 'space-between',
  },
  titleView: {
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  logo: {
    height: windowHeight / 5,
    width: windowWidth / 2,
    borderRadius: 50,
  },
  titleText: {
    fontSize: 20,
    color: colors.BLACK,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
  bottomView: {
    flexDirection: 'row',
    height: windowHeight / 16,
  },
  loginButton: {
    backgroundColor: colors.GREEN_SECONDARY,
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: colors.GREEN_PRIMARY,
    width: windowWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    color: colors.WHITE,
  },
});