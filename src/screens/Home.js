/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  FlatList,
  Pressable,
  Image,
} from 'react-native';
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
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const Home = ({navigation: {navigate}}) => {
  const mapPlacesData = ({item, index}) => {
    return (
      <Pressable onPress={() => navigate('Gallery')}>
        <PlacesView places_name={item} places_miles={places_miles[index]} />
      </Pressable>
    );
  };
  const mapSpotsData = ({item, index}) => {
    return (
      <Pressable onPress={() => navigate('Gallery')}>
        <SpotsView places_name={item} />
      </Pressable>
    );
  };
  const mapExperianceData = ({item, index}) => {
    return (
      <Pressable onPress={() => navigate('Gallery')}>
        <ExperianceTabView
          places_name={item}
          places_miles={places_miles[index]}
        />
      </Pressable>
    );
  };

  return (
    <ParallaxScrollView
      backgroundScrollSpeed={10}
      // onChangeHeaderVisibility={(v) => console.log(v)}
      stickyHeaderHeight={60}
      renderStickyHeader={() => (
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            paddingTop: 9,
            elevation: 9,
            shadowOffset: {width: 10, height: 10},
          }}>
          <View
            style={{
              backgroundColor: 'lightgrey',
              borderRadius: 30,
              width: '80%',
              height: '80%',
              alignSelf: 'center',
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
      )}
      backgroundColor="black"
      contentBackgroundColor="white"
      parallaxHeaderHeight={450}
      renderBackground={() => (
        <Image
          style={{
            height: '100%',
            width: '100%',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: 'hidden',
            marginTop: 30,
          }}
          source={require('../assets/images/pic.jpg')}
        />
      )}
      renderForeground={() => (
        <>
          <Text
            style={{
              color: '#fff',
              backgroundColor: 'black',
              width: '100%',
              paddingTop: 5,
              paddingBottom: 5,
              alignSelf: 'center',
              textAlign: 'center',
              textDecorationLine: 'underline',
            }}>
            Get the latest on our COVID-19 response
          </Text>
          <View
            style={{
              // position: 'absolute',
              width: '100%',
              // top: 0,
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
        </>
      )}>
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
    </ParallaxScrollView>
  );
};
export default Home;
