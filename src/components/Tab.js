import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { FONT_SIZE_LARGE, FONT_SIZE_MEDIUM } from '../constants/fontsize';
import Colors from '../constants/colors';
import { windowWidth } from '../constants/dimension';

export default function Tab(props) {
    const { children,style,activeTab,setActiveTab,index,onPress} = props;
  return (
    <Pressable onPress={()=>setActiveTab(index)} style={[styles.container,style,activeTab==index && styles.activeContainer]}>
      <Text style={[styles.text,activeTab==index&&styles.activeText]}>{children}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        height:55,
        width:windowWidth/3,
        justifyContent: 'center',
        alignItems: 'center',
        margin:5,
        backgroundColor:Colors.WHITE,
        borderColor:Colors.GREY_SECONDARY,
        borderWidth:1,
    },
    activeContainer:{
      borderColor:Colors.GREEN_SECONDARY,
      borderWidth:2,
    },
    text:{
        fontSize:FONT_SIZE_MEDIUM,
        fontWeight:'500',
        color:Colors.BLACK
    },
    activeText:{
      color:Colors.GREEN_SECONDARY
    }
});