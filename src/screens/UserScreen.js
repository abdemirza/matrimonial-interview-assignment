import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {carouselImages} from '../data/dummyData';
import {windowHeight, windowWidth} from '../constants/dimension';
import CircleIcon from '../components/CircleIcon';
import IconButton from '../components/IconButton';
import Colors from '../constants/colors';
import UserHeader from '../components/UserHeader';
import {FONT_SIZE_MEDIUM} from '../constants/fontsize';

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <UserHeader />
      <View style={styles.carouselContainer}>
        <SliderBox
          style={{width: '100%', height: '100%'}}
          autoplay={true}
          images={carouselImages}
          loop={true}
        />
        <View style={styles.iconContainer}>
          <View style={styles.smallIconContainer}>
            <CircleIcon iconName="star" heading="shortlist" />
            <CircleIcon iconName="star" heading="chat now" />
            <CircleIcon iconName="phone" heading="call now" />
          </View>
          <IconButton />
        </View>
      </View>
      <ScrollView>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>personal information</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionHeading}>
            A Few lines about my Daughter
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, urna eu tempor congue, nisl nunc consequat
            eros, eget congue nunc nisl vitae nisl.
          </Text>
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>basic details</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Name </Text>
            <Text style={styles.title}>Age </Text>
            <Text style={styles.title}>Body Type </Text>
            <Text style={styles.title}>Complexion </Text>
            <Text style={styles.title}>Height </Text>
          </View>
          <View style={{width: windowWidth * 0.2}}>
            <Text style={styles.title}>:</Text>
            <Text style={styles.title}>:</Text>
            <Text style={styles.title}>:</Text>
            <Text style={styles.title}>:</Text>
            <Text style={styles.title}>:</Text>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>M Gaberjee</Text>
            <Text style={styles.title}>37 yrs</Text>
            <Text style={styles.title}>Average</Text>
            <Text style={styles.title}>Wheatish</Text>
            <Text style={styles.title}>Female</Text>
            <Text style={styles.title}>5 ft 3inch</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_GREY,
  },
  smallIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    marginVertical: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'space-between',
    bottom: 0,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  carouselContainer: {
    height: windowHeight * 0.4,
  },
  heading: {
    textTransform: 'uppercase',
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '600',
    color: Colors.GREEN_SECONDARY,
  },

  headingContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleContainer: {
    width: windowWidth * 0.4,
  },
  descriptionContainer: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    elevation: 1,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  descriptionHeading: {
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '600',
  },
});
