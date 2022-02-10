import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import { FONT_SIZE_NORMAL } from '../constants/fontsize';

export default function CustomInput(props) {
  const {placeholder} = props;
  return <TextInput style={styles.container} placeholderTextColor={Colors.GREY} placeholder={placeholder} />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    backgroundColor: Colors.WHITE,
    padding: 10,
    marginVertical:5,
    fontSize:FONT_SIZE_NORMAL
  },
});
