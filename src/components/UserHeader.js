import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowWidth, windowHeight} from '../constants/dimension';
import {FONT_SIZE_LARGE} from '../constants/fontsize';
import { useNavigation } from '@react-navigation/native';

export default function UserHeader() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Pressable onPress={()=>navigation.pop()}>
          <Icon
            style={styles.icon}
            name="keyboard-backspace"
            size={35}
            color={Colors.WHITE}
          />
        </Pressable>
        <Text style={styles.heading}>FPM609056</Text>
      </View>
      <Entypo name="dots-three-vertical" size={20} color={Colors.WHITE} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(2, 175, 129)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: windowHeight / 14,
    alignItems: 'center',
  },
  heading: {
    color: Colors.WHITE,
    fontSize: FONT_SIZE_LARGE,
  },
  icon: {
    marginRight: 10,
  },
});
