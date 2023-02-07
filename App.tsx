/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import ExploreScreen from './screens/Explore';
// import ProfileScreen from './screens/Profile';
// import BakeriesScreen from './screens/Bakeries';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreen from './screens/Explore';
import BakeriesScreen from './screens/Bakeries';
import ProfileScreen from './screens/Profile';
import BakeryScreen from './screens/Bakery';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type RootStackParams = {
  Explore;
  Bakeries;
  Profile;
  Bakery: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator()

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // return <BakeriesScreen />;
  // return <ExploreScreen />;
  // return <ProfileScreen />;

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name="Explore" component={ExploreScreen} />
        <RootStack.Screen name="Bakeries" component={BakeriesScreen} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
        <RootStack.Screen name="Bakery" component={BakeryScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    
  }
});

export default App;
