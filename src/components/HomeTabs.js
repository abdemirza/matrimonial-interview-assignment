import {StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HomeTab from './HomeTab'

export default function HomeTabs() {
  const [activeTab, setActiveTab] = React.useState(0)
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.container}>
      <HomeTab index={0} activeTab={activeTab} setActiveTab={setActiveTab} heading="dashboard" />
      <HomeTab index={1} activeTab={activeTab} setActiveTab={setActiveTab} heading="just joined" />
      <HomeTab index={2} activeTab={activeTab} setActiveTab={setActiveTab} heading="matches" />
      <HomeTab index={3} activeTab={activeTab} setActiveTab={setActiveTab} heading="premium" />
      <HomeTab index={4} activeTab={activeTab} setActiveTab={setActiveTab} heading="profiles" />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom:10,
  }
})