import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Tab from './Tab';

export default function ProfileTabs() {
    const [activeTab, setActiveTab] = React.useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Tab index={0} activeTab={activeTab} setActiveTab={setActiveTab}>Self</Tab>
        <Tab index={1} activeTab={activeTab} setActiveTab={setActiveTab}>Parents</Tab>
        <Tab index={2} activeTab={activeTab} setActiveTab={setActiveTab}>Sibling</Tab>
      </View>
      <View style={styles.row}>
        <Tab index={3} activeTab={activeTab} setActiveTab={setActiveTab}>Relative</Tab>
        <Tab index={4} activeTab={activeTab} setActiveTab={setActiveTab}>Friend</Tab>
        <Tab index={-1} style={styles.hiddenTab}></Tab>
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
