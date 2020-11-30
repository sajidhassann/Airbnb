/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import Styles from '../StyleSheet';
const SpotsView = (props) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        marginBottom: 10,
      }}>
      <ImageBackground
        source={require('../assets/images/pic.jpg')}
        style={{
          width: 240,
          height: 240,
          borderRadius: 10,
          overflow: 'hidden',
        }}></ImageBackground>
      <Text
        style={{
          paddingLeft: 2,
          paddingTop: 10,
          color: '#000',
          fontWeight: 'bold',
        }}>
        {props.places_name}
      </Text>
    </View>
  );
};
export default SpotsView;
