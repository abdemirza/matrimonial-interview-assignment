import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import {windowHeight} from '../constants/dimension';
import {FONT_SIZE_EXTRA_LARGE} from '../constants/fontsize';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeHeader(props) {
  const {heading, onPress} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <View style={styles.iconContainer}>
        <View style={styles.bellContainer}>
          <Icon
            name="bell"
            size={25}
            color={Colors.WHITE}
          />
          <View style={styles.numCircle}>
            <Text style={styles.bellText}>1</Text>
          </View>
        </View>
        <Icon name="headphones" size={25} color={Colors.WHITE} />
      </View>
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
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60,
  },
  text: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    textTransform: 'uppercase',
    color: Colors.WHITE,
  },
  numCircle: {
    width: 15,
    height: 15,
    borderRadius: 10,
    backgroundColor: Colors.GREEN_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderColor:Colors.WHITE,
    borderWidth:1,
    top:0,
    left:-2
  },
  bellText: {
    color: Colors.WHITE,
    fontSize:12
  },
});
