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
import ExploreScreen from './screens/Explore';
import ProfileScreen from './screens/Profile';
import BakeriesScreen from './screens/Bakeries';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return <BakeriesScreen />;
  // return <ExploreScreen />;
  // return <ProfileScreen />;

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View>
        <Text>Bakery App</Text>
        <View style={styles.content}>
          <Text>Explore</Text>
          <Text>Bakeries</Text>
          <Text>Profile</Text>
        </View>
      </View>
    </SafeAreaView>
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
