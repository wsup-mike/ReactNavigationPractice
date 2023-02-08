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
  ExploreStack;
  BakeryStack: BakeryStackParams;
  Profile;
  Bakery: {
    name: string;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

export type BakeryStackParams = {
  Bakeries;
  Bakery: {
    name: string;
  };
}

const BakeryStack = createNativeStackNavigator<BakeryStackParams>();

const BakeryScreenStack = () => {
  return (
    <BakeryStack.Navigator initialRouteName="Bakeries">
      <BakeryStack.Screen name="Bakeries" component={BakeriesScreen} />
      <BakeryStack.Screen name="Bakery" component={BakeryScreen} />
    </BakeryStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore;
  Bakery: {
    name: string;
  };
}

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore">
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Bakery" component={BakeryScreen} />
    </ExploreStack.Navigator>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='Explore'>
        <RootStack.Screen name="ExploreStack" component={ExploreScreenStack} />
        <RootStack.Screen name="BakeryStack" component={BakeryScreenStack} />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
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
