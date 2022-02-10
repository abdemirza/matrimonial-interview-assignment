import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import RegisterTab from './RegisterTab';
import { windowHeight } from '../constants/dimension';
import Colors from '../constants/colors';

export default function RegisterTabs(props) {
    const { activeTab, setActiveTab } = props;
  return (
    <View style={styles.container}>
      <RegisterTab activeTab={activeTab} setActiveTab={setActiveTab} index={0}  >step 1</RegisterTab>
      <RegisterTab activeTab={activeTab} setActiveTab={setActiveTab} index={1}  >step 2</RegisterTab>
      <RegisterTab activeTab={activeTab} setActiveTab={setActiveTab} index={2}  >step 3</RegisterTab>
    </View>
  );
}
 const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:windowHeight/13,
        backgroundColor:Colors.GREEN_DARK,
        alignItems:'center',
        marginBottom:5,
    }
});
