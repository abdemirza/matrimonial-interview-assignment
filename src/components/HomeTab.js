import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { FONT_SIZE_MEDIUM } from '../constants/fontsize'
import Colors from '../constants/colors';

export default function HomeTab(props) {
  const { heading,index,activeTab,setActiveTab } = props
  const isActive = index === activeTab;
  return (
    <Pressable onPress={(()=>setActiveTab(index))} style={[styles.container,isActive&&styles.activeContainer]}>
      <Text style={[styles.heading,isActive&&styles.activeHeading]}>{heading}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    height:40,
    borderColor:'transparent',
    borderBottomWidth:3,
    alignItems:'baseline',
    justifyContent:'center',

  },
  heading: {
    fontSize: FONT_SIZE_MEDIUM,
    textTransform: 'uppercase',
    fontWeight:'600',
  },
  activeHeading:{
    color:Colors.GREEN_PRIMARY,
  },
  activeContainer:{

    borderColor:Colors.GREEN_PRIMARY,
  }
})