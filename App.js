/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Gallery from './src/screens/Gallery';
import PlacesView from './src/components/PlacesView';
import Home from './src/screens/Home';
import BottomTabs from './src/screens/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          {/* <Home /> */}
          <BottomTabs />
          {/* <Home /> */}
        </SafeAreaView>
      </NavigationContainer>
    </>
  );
};

export default App;
