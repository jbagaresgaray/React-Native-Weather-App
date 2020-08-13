import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../modules/Home/Home';
import DetailsScreen from '../modules/Details/Details';
import SearchModalScreen from '../modules/SearchModal/SearchModal';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function MainStackNavigator() {
  return (
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      headerMode="none"
      screenOptions={{
        gestureEnabled: false,
        headerBackTitle: '',
        headerBackTitleVisible: false,
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="HomeScreen" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
}

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={DrawerNavigation}
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
