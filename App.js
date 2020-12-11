/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
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
