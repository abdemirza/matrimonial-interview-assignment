import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/colors';
import { FONT_SIZE_EXTRA_SMALL } from '../constants/fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function IconButton() {
  return (
    <View style={styles.container}>
        <Icon name="heart" size={20} color={Colors.WHITE} />
      <Text style={styles.heading}>Send interest</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: Colors.GREEN_PRIMARY,
        paddingHorizontal:3,
        height:30,
        
    },
    heading:{
        color:Colors.WHITE,
        textTransform:'uppercase',
        fontSize:FONT_SIZE_EXTRA_SMALL
    }
})