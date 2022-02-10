import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HomeTabs from '../components/HomeTabs';
import HomeHeader from '../components/HomeHeader';
import { FONT_SIZE_EXTRA_LARGE, FONT_SIZE_LARGE, FONT_SIZE_MEDIUM, FONT_SIZE_NORMAL, FONT_SIZE_SMALL } from '../constants/fontsize';
import Colors from '../constants/colors';
import Cards from '../components/Cards';

export default function HomeScreen() {
  return (
    <View>
      <HomeHeader />
      <HomeTabs />
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>hey welcome!</Text>
          <View style={styles.subHeadingContainer}>
            <Text style={styles.subHeading}>lets begin your journey</Text>
            <Text style={styles.viewHeading}>View all</Text>
          </View>
        </View>
        <Cards />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading:{
    fontSize:FONT_SIZE_EXTRA_LARGE,
    textTransform:'uppercase',
    fontWeight:'600',
    color:Colors.GREEN_SECONDARY,
  },
  subHeading:{
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:FONT_SIZE_NORMAL,
  },
viewHeading:{
  textTransform:'uppercase',
  fontWeight:'700',
  fontSize:FONT_SIZE_SMALL,
  color:Colors.GREEN_SECONDARY,
},
  subHeadingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  }
});
