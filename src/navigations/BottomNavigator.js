import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.YELLOW,
        tabBarInactiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.GREEN_SECONDARY,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
        name="WELCOME"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="magnify" color={color} size={size} />
          ),
        }}
        name="SEARCH"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="email-outline" color={color} size={size} />
          ),
        }}
        name="MAILBOX"
        component={HomeScreen}
      />
      <Tab.Screen
       options={{
        tabBarIcon: ({ color, size }) => (
            <Icon name="crown" color={color} size={size} />
          ),
      }}
       name="UPGRADE" component={HomeScreen} />
      <Tab.Screen
       options={{
        tabBarIcon: ({ color, size }) => (
            <Fontisto name="person" color={color} size={size} />
          ),
      }}
       name="PROFILE" component={HomeScreen} />
    </Tab.Navigator>
  );
}
