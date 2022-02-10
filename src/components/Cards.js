import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card from './Card';
import { images } from '../data/dummyData';
import { windowHeight } from '../constants/dimension';

export default function Cards() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{height:windowHeight*0.65}}>
        {
            images.map(image => <Card key={image.id} uri={image.uri} />)
        }
    </ScrollView>
  )
}