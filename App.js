/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Gallery from './src/screens/Gallery';
import PlacesView from './src/components/PlacesView';
import Home from './src/screens/Home';
import BottomTabs from './src/screens/BottomTabs';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        {/* <Home /> */}
        <BottomTabs />
      </SafeAreaView>
    </>
  );
};

export default App;
