import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {createStackNavigator} from '@react-navigation/stack';
import OrdersScreen from './screens/Orders';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            return <Icon name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#2172E2',
          tabBarInactiveTintColor: 'black'
        })}>
        <Tab.Screen name="Orders" component={OrdersScreen}  options={{
      headerShown: false ,
      tabBarLabel: 'Мои заказы',
      tabBarIcon: ({ color, syize }) => (
        <Icon name="calendar-text" color={color} size={30} />
        ),
      }}

/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}