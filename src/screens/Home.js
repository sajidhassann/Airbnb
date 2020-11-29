import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  FlatList,
} from 'react-native';
import Styles from '../StyleSheet';
import PlacesView from '../components/PlacesView';
import SpotsView from '../components/SpotsView';
import ExperianceTabView from '../components/ExperianceTabView';
// const image = {uri: 'https://reactjs.org/logo-og.png'};
const places_name = [
  'Nathia Gali',
  'Nathia Gali',
  'Nathia Gali',
  'Nathia Gali',
  'Nathia Gali',
  'Nathia Gali',
];
const places_miles = [
  '1.5 hour drive',
  '1.5 hour drive',
  '1.5 hour drive',
  '1.5 hour drive',
  '1.5 hour drive',
  '1.5 hour drive',
];
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Home = () => {
  const mapPlacesData = ({item, index}) => {
    return (
      <View>
        <PlacesView places_name={item} places_miles={places_miles[index]} />
      </View>
    );
  };
  const mapSpotsData = ({item, index}) => {
    return (
      <View>
        <SpotsView places_name={item} />
      </View>
    );
  };
  const mapExperianceData = ({item, index}) => {
    return (
      <View>
        <ExperianceTabView
          places_name={item}
          places_miles={places_miles[index]}
        />
      </View>
    );
  };
  return (
    <ScrollView
      //   stickyHeaderIndices={[1,3]}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#000'}}>
      <Text
        style={{
          color: '#fff',
          marginTop: 20,
          marginBottom: 15,
          alignSelf: 'center',
          textDecorationLine: 'underline',
        }}>
        Get the latest on our COVID-19 response
      </Text>
      <View
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
        }}>
        <ImageBackground
          source={require('../assets/images/pic.jpg')}
          style={{
            height: 450,
          }}>
          <View
            style={{
              position: 'absolute',
              width: '100%',
              top: 0,
              height: 50,
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 30,
                width: '80%',
                height: '100%',
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <MaterialCommunityIcons name="magnify" size={20} color="red" />
              <TextInput
                style={{marginLeft: 5}}
                placeholder="Where are you going?"
                placeholderTextColor="#000"
              />
            </View>
          </View>
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text style={{fontSize: 70, fontWeight: 'bold', color: '#fff'}}>
              Go{'\n'}Near
            </Text>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 10,
                alignItems: 'center',
                borderRadius: 10,
                marginTop: 20,
              }}>
              <Text>Explore nearby stays</Text>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            justifyContent: 'center',
            paddingTop: 20,
            paddingBottom: 10,
          }}>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <FlatList
              numColumns={Math.ceil(places_name.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={places_name}
              renderItem={mapPlacesData}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
        <View
          style={{
            justifyContent: 'center',
            paddingTop: 20,
            paddingBottom: 20,
          }}>
          <Text
            style={{
              paddingLeft: 20,
              marginBottom: 20,
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Live anywhere
          </Text>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={places_name}
            renderItem={mapSpotsData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            paddingTop: 20,
            backgroundColor: '#000',
            paddingBottom: 20,
          }}>
          <Text
            style={{
              paddingLeft: 20,
              marginBottom: 10,
              fontSize: 24,
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Experiance the world
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              marginBottom: 20,
              color: '#fff',
              fontSize: 16,
              lineHeight: 18,
            }}>
            Unique activities with local experts -- in{'\n'}person or online
          </Text>
          <FlatList
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={places_name}
            renderItem={mapExperianceData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;
