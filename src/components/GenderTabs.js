import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Tab from './Tab';

export default function GenderTabs() {
    const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Tab index={0} activeTab={activeTab} setActiveTab={setActiveTab}>Male</Tab>
        <Tab index={1} activeTab={activeTab} setActiveTab={setActiveTab}>Female</Tab>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
  },
  hiddenTab: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
});
