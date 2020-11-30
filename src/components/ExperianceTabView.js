/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import Styles from '../StyleSheet';
const ExperianceTabView = (props) => {
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
          color: '#fff',
          fontWeight: 'bold',
        }}>
        {props.places_name}
      </Text>
      <Text
        style={{
          paddingLeft: 2,
          paddingTop: 5,
          color: '#fff',
          fontSize: 13,
        }}>
        {props.places_miles}
      </Text>
    </View>
  );
};
export default ExperianceTabView;
