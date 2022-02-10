import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import {windowHeight} from '../constants/dimension';
import {FONT_SIZE_EXTRA_LARGE} from '../constants/fontsize';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function RegisterHeader(props) {
  const {heading,onPress} = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Pressable onPress={()=>{onPress && onPress()}}>
          <Icon name="keyboard-backspace" size={30} color={Colors.WHITE} />
        </Pressable>
        <Text style={styles.text}>{heading}</Text>
        {/* //! Hacky way to get  heading in centere */}
        <View />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GREEN_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight / 14,
  },
  subContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    textTransform: 'uppercase',
    color: Colors.WHITE,
  },
});
