import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/Home/Home';
import DetailsScreen from '../screens/Details/Details';
import SearchModalScreen from '../screens/SearchModal/SearchModal';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SearchModal"
          component={SearchModalScreen}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
