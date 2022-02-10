import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { FONT_SIZE_EXTRA_LARGE, FONT_SIZE_LARGE} from '../constants/fontsize';
import Colors from '../constants/colors';

export default function CustomButton(props) {
    const {children, style, onPress,secondary} = props;
  return (
    <Pressable onPress={()=> onPress && onPress()} style={[styles.container,style,secondary && {backgroundColor:Colors.GREEN_SECONDARY}]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:Colors.GREEN_PRIMARY
    },
    text:{
      fontSize: FONT_SIZE_LARGE,
      textTransform: 'uppercase',
      color: Colors.WHITE
    }
});