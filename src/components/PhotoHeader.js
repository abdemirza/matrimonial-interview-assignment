import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import {windowHeight} from '../constants/dimension';
import {FONT_SIZE_EXTRA_LARGE} from '../constants/fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function HomeHeader(props) {
  const {heading, onPress} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon name="keyboard-backspace" size={30} color={Colors.WHITE} />
      <Text style={styles.heading}>Add photo</Text>
      <Pressable onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.skipText}>skip</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN_PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: windowHeight / 14,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    textTransform: 'uppercase',
    color: Colors.WHITE,
  },
  skp: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
  },
  skipText: {
    color: Colors.WHITE,
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: 14,
  },
  numCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: Colors.GREEN_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor: Colors.WHITE,
    borderWidth: 1,
    top: 0,
    left: -2,
  },
  bellText: {
    color: Colors.WHITE,
    fontSize: 12,
  },
});
