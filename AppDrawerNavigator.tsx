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

import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ExploreScreen from './screens/Explore';
import BakeriesScreen from './screens/Bakeries';
import ProfileScreen from './screens/Profile';
import BakeryScreen from './screens/Bakery';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ExploreIcon from './icons/ExploreIcon';
import BakeryIcon from './icons/BakeryIcon';
import ProfileIcon from './icons/ProfileIcon';

export type RootStackParams = {
  ExploreStack: undefined;
  BakeryStack: NavigatorScreenParams<BakeryStackParams>;
  Profile: undefined;
  Bakery: {
    name: string;
  };
};

const RootStack = createDrawerNavigator<RootStackParams>();

export type BakeryStackParams = {
  Bakeries: undefined;Ad
  Bakery: {
    name: string;
  };
}

const BakeryStack = createNativeStackNavigator<BakeryStackParams>();

const BakeryScreenStack = () => {
  return (
    <BakeryStack.Navigator initialRouteName="Bakeries" screenOptions={{ headerShown: false}}>
      <BakeryStack.Screen name="Bakeries" component={BakeriesScreen} />
      <BakeryStack.Screen name="Bakery" component={BakeryScreen} />
    </BakeryStack.Navigator>
  );
};

export type ExploreStackParams = {
  Explore: undefined;
  Bakery: {
    name: string;
  };
}

const ExploreStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator initialRouteName="Explore" screenOptions={{ headerShown: false}}>
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
      <ExploreStack.Screen name="Bakery" component={BakeryScreen} />
    </ExploreStack.Navigator>
  );
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='ExploreStack' screenOptions={{ 
          drawerActiveTintColor: "#e67a15", 
          drawerInactiveTintColor: "gray",
          headerShown: false,
        }}
      >
        <RootStack.Screen 
          name="ExploreStack" 
          component={ExploreScreenStack} 
          options={{ 
            drawerIcon: ({ color, size }) => <ExploreIcon color={color} size={size} />,
            drawerLabel: "Explore",
          }}
        />

        <RootStack.Screen 
          name="BakeryStack" 
          component={BakeryScreenStack} 
            options={{ 
              drawerIcon: ({ color, size }) => <BakeryIcon color={color} size={size} />,
              drawerLabel: "Bakery",
            }}
          />

        <RootStack.Screen name="Profile" component={ProfileScreen} 
          options={{ 
            drawerIcon: ({ color, size }) => <ProfileIcon color={color} size={size} />,
            drawerLabel: "Profile",
          }}
        />
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
