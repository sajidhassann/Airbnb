/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import Gallery from './src/screens/Gallery';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <Gallery />
      </SafeAreaView>
    </>
  );
};

export default App;
