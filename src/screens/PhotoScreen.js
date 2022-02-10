import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PhotoHeader from '../components/PhotoHeader';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_NORMAL,
} from '../constants/fontsize';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function PhotoScreen() {
  return (
    <View style={styles.container}>
      <PhotoHeader />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          1075 Matches will get to view your profile in 01:57:30 hours
        </Text>
      </View>
      <View style={styles.uploadContainer}>
        <Icon name="photo" size={150} color={Colors.GREEN_SECONDARY} />
        <Text style={styles.uploadHeading}>Upload from mobile</Text>
      </View>
      <Text style={styles.subHeading}>
        9 out of 10 members contact matches with profile Photo
      </Text>
      <View style={styles.uploadContainer}>
        <Icon name="add-a-photo" size={150} color={Colors.GREEN_SECONDARY} />
        <Text style={styles.uploadHeading}>Take a picture</Text>
      </View>
      <Text style={styles.subHeading}>
        One Single action can greatly increase your profile response,
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  heading: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: FONT_SIZE_NORMAL,
    fontWeight: '600',
    marginVertical: 10,
  },
  headingContainer: {
    paddingHorizontal: 30,
    flex: 1 / 10,
    justifyContent: 'center',
  },
  uploadContainer: {
    backgroundColor: Colors.LIGHT_GREY,
    flex: 1 / 3,
    marginHorizontal: 20,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadHeading: {
    fontSize: FONT_SIZE_EXTRA_LARGE,
    textTransform: 'uppercase',
    color: Colors.GREEN_SECONDARY,
    fontWeight: '400',
  },
});
