import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FONT_SIZE_EXTRA_SMALL } from '../constants/fontsize';
export default function CircleIcon(props) {
  const {iconName, heading} = props;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name={iconName} size={15} color={Colors.GREEN_PRIMARY} />
      </View>
        <Text style={styles.heading}>{heading}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 30,
    borderColor: Colors.GREEN_PRIMARY,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
      fontSize:FONT_SIZE_EXTRA_SMALL,
      fontWeight:'600',
      textTransform:'uppercase',
      color:Colors.GREEN_PRIMARY,
  }
});

