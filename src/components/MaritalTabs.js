import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Tab from './Tab';

export default function MaritalTabs() {
    const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Tab index={0} activeTab={activeTab} setActiveTab={setActiveTab}>Un Married</Tab>
        <Tab index={1} activeTab={activeTab} setActiveTab={setActiveTab}>Widow / Widower</Tab>
      </View>
      <View style={styles.row}>
        <Tab index={2} activeTab={activeTab} setActiveTab={setActiveTab}>Divorced</Tab>
        <Tab index={3} activeTab={activeTab} setActiveTab={setActiveTab}>Separated</Tab>
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
