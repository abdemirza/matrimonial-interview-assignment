import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import RegisterHeader from '../components/RegisterHeader';
import {windowHeight} from '../constants/dimension';
import registerImage from '../assets/images/register.jpg';
import RegisterTabs from '../components/RegisterTabs';
import {FONT_SIZE_MEDIUM} from '../constants/fontsize';
import DropdownComponent from '../components/DropdownComponent';
import Colors from '../constants/colors';
import { city, community, country, state, citizenship } from '../data/dummyData';
import ProfileTabs from '../components/ProfileTabs';
import GenderTabs from '../components/GenderTabs';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import MaritalTabs from '../components/MaritalTabs';
export default function RegisterScreen(props) {
  const {navigation} = props;
  const [activeTab, setActiveTab] = React.useState(0);
  const activeTabOne = (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.sectionHeading}>
          find the perfect match - register free
        </Text>
        <DropdownComponent
          data={community}
          placeholder="select the community"
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.sectionHeading}>Profile created by</Text>
        <ProfileTabs />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.sectionHeading}>Gender</Text>
        <GenderTabs />
      </View>
      <CustomInput placeholder="NAME" />
      <CustomInput placeholder="MOTHER'S NAME" />
      <CustomInput placeholder="FATHER'S NAME" />
      <CustomButton
        onPress={() => setActiveTab(1)}
        style={styles.button}
        secondary>
        continue
      </CustomButton>
    </View>
  );
const activeTabTwo = (
  <View style={styles.container}>
  <View style={styles.subContainer}>
    <Text style={styles.sectionHeading}>
      Marital Status
    </Text>
   <MaritalTabs />
  </View>
  <DropdownComponent data={country} placeholder="country living in" />
  <DropdownComponent data={state} placeholder="residing state" />
  <DropdownComponent data={city} placeholder="residing city" />
  <DropdownComponent data={citizenship} placeholder="select citizenship" />
  <CustomButton
    onPress={() => setActiveTab(2)}
    style={styles.button}
    secondary>
    continue
  </CustomButton>
</View>
);
const activeTabThree = (
  <View style={styles.container}>
    <CustomButton onPress={(()=>navigation.navigate('Photo'))} secondary style={styles.button}>Finish !</CustomButton>
  </View>
)
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.LIGHT_GREY,
        flex: 1,
        height: windowHeight,
      }}>
      <RegisterHeader
        onPress={() => navigation.pop()}
        heading="Register Free!"
      />
      <Image source={registerImage} style={styles.image} />
      <RegisterTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab===0 && activeTabOne}
   {activeTab===1 && activeTabTwo}
   {activeTab===2 && activeTabThree}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  subContainer: {
    marginVertical: 10,
  },
  image: {
    height: windowHeight / 3,
    width: '100%',
  },
  sectionHeading: {
    textTransform: 'uppercase',
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: '700',
    marginVertical: 5,
    color:Colors.BLACK
  },
  button: {
    marginVertical: 10,
    height: 60,
  },
});
