import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TextInput, ImageBackground} from 'react-native';
import Styles from '../StyleSheet';
const PlacesView = (props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        paddingLeft: 20,
        marginBottom: 10,
      }}>
      <ImageBackground
        source={require('../assets/images/pic.jpg')}
        style={{
          width: 80,
          borderRadius: 10,
          overflow: 'hidden',
        }}></ImageBackground>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingLeft: 10,
          paddingRight: 60,
        }}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
          {props.places_name}
        </Text>
        <Text>{props.places_miles}</Text>
      </View>
    </View>
  );
};
export default PlacesView;
