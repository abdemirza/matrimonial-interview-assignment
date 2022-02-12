import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {windowWidth} from '../constants/dimension';
import Colors from '../constants/colors';
import CircleIcon from './CircleIcon';
import IconButton from './IconButton';
import { useNavigation } from '@react-navigation/native';

export default function Card(props) {
    console.log(props.uri)
  const {uri} = props;
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=>navigation.navigate('User')} style={styles.container}>
      <Image
        source={{uri: uri}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.userId}>FPM609056</Text>
        <Text style={styles.text}>Devlina Sarkar</Text>
        <Text style={styles.text}>Hindu : Brahmin</Text>
        <Text style={styles.text}>
          37 years, 5ft 4 in / 162cm, SC, Kolkata, West Bengal, India. B.A
        </Text>
        <View style={styles.iconContainer}>
          <CircleIcon heading="shortlist" iconName="star" />
          <CircleIcon heading="chat now" iconName="message" />
          <IconButton />
        </View>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    marginVertical: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,  
  },
  iconContainer:{
    flexDirection:'row',
    marginVertical:5,
    alignItems:'center'
  },
  infoContainer: {
    flex: 1,
    padding: 5,
  },
  text: {
    fontWeight: '500',
  },
  userId: {
    fontWeight: '700',
    color: Colors.BLACK,
  },
  image: {
    width: windowWidth * 0.3,
  },
});
