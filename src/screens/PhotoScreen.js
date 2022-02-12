import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import PhotoHeader from '../components/PhotoHeader';
import {
  FONT_SIZE_EXTRA_LARGE,
  FONT_SIZE_LARGE,
  FONT_SIZE_NORMAL,
} from '../constants/fontsize';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../components/CustomButton';
export default function PhotoScreen() {
  const [image, setImage] = React.useState(null);
  const cameraPicker = async () => {
    console.log('imagePicker');
    launchCamera({
      mediaType: 'photo',
    })
      .then(response => {
        console.log(response);
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }  else {
          setImage(response.assets[0].uri);

        }
      })
      .catch(error => {
        console.warn('ImagePicker Error: ', error);
      });
  };
  const imagePicker = async () => {
    launchImageLibrary({
      mediaType: 'photo',
    })
      .then(response => {
        console.log(response);
        if (response.didCancel) {
          console.warn('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else {
          setImage(response.assets[0].uri);
        }
        // setAvatar({uri: response.uri});
        // here we can call a API to upload image on server
      })
      .catch(error => {
        console.warn('ImagePicker Error: ', error);
      });
  };
  console.log(image);
  return (
    <View style={styles.container}>
      <PhotoHeader />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>
          1075 Matches will get to view your profile in 01:57:30 hours
        </Text>
      </View>
      <View style={[styles.imageContainer,!image&&styles.hide]}>
        <Image source={{uri: image}} style={styles.image} />
        <CustomButton onPress={()=>imagePicker()} style={[styles.button,!image&&styles.hide]}>Upload Another</CustomButton>
        <CustomButton onPress={()=>cameraPicker()} style={[styles.button,!image&&styles.hide]}>Capture Another</CustomButton>
        <CustomButton onPress={()=>setImage(null)} style={[styles.button,{backgroundColor:'red'},!image&&styles.hide]} >Remove</CustomButton>
      </View>
      <Pressable
        onPress={() => imagePicker()}
        style={[styles.uploadContainer, image && styles.hide]}>
        <Icon name="photo" size={150} color={Colors.GREEN_SECONDARY} />
        <Text style={styles.uploadHeading}>Upload from mobile</Text>
      </Pressable>
      <Text style={[styles.subHeading, image && styles.hide]}>
        9 out of 10 members contact matches with profile Photo
      </Text>
      <Pressable
        onPress={() => cameraPicker()}
        style={[styles.uploadContainer, image && styles.hide]}>
        <Icon name="add-a-photo" size={150} color={Colors.GREEN_SECONDARY} />
        <Text style={[styles.uploadHeading, image && styles.hide]}>
          Take a picture
        </Text>
      </Pressable>

      <Text style={[styles.subHeading, image && styles.hide]}>
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
  imageContainer: {
    paddingHorizontal: 20,
    flex: 1,
  },
  hide: {
    display: 'none',
  },
  image: {
    height: 300,
  },
  heading: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    marginVertical: 5,
    flex:1/7,
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
