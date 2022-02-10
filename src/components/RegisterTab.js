import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { FONT_SIZE_EXTRA_LARGE } from '../constants/fontsize';
import Colors from '../constants/colors';

export default function RegisterTab(props) {
    const { activeTab, setActiveTab,index,children } = props;
  return (
    <Pressable onPress={()=>{setActiveTab(index)}} style={[styles.container,activeTab==index&&{backgroundColor:Colors.GREEN_SECONDARY}]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
      flex:1,
      height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
      fontSize:FONT_SIZE_EXTRA_LARGE,
      color:Colors.WHITE,
      textTransform:'uppercase',
  }
});
