/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Animated,
  ImageBackground,
  FlatList,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import PlacesView from '../components/PlacesView';
import SpotsView from '../components/SpotsView';
import ExperianceTabView from '../components/ExperianceTabView';
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';
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
const Home = ({navigation: {navigate}}) => {
  // const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const scrollY = new Animated.Value(0);
  const HEIGHT_MAX = 450;
  const HEIGHT_MIN = 100;
  const HEIGHT_DIFFERENCE = HEIGHT_MAX - HEIGHT_MIN;
  const opacityValue = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE / 1.8, HEIGHT_DIFFERENCE],
    outputRange: [0, 1, 1],
    extrapolate: 'clamp',
  });
  const fade = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE / 1.8, HEIGHT_DIFFERENCE],
    outputRange: [1, 1, 0.4],
    extrapolate: 'clamp',
  });
  const topValue = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE / 5.8],
    outputRange: [50, 0],
    extrapolate: 'clamp',
  });
  const margin = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE / 15, HEIGHT_DIFFERENCE],
    outputRange: [0, -30, -60],
    extrapolate: 'clamp',
  });
  const color = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE],
    outputRange: ['white', 'lightgrey'],
    extrapolate: 'clamp',
  });

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
    <>
      <ImageHeaderScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        renderFixedForeground={() => (
          <View
            style={{
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              paddingLeft: 20,
              marginTop: '15%',
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
        )}
        renderHeader={() => (
          <Animated.View
            style={{backgroundColor: '#000', marginTop: margin, opacity: fade}}>
            <Text
              style={{
                color: '#fff',
                alignSelf: 'center',
                textDecorationLine: 'underline',
                marginTop: 15,
                marginBottom: 15,
              }}>
              Get the latest on our COVID-19 response
            </Text>
            {/* <StatusBar backgroundColor={opacityValue == 0 ? '#fff' : '#000'} /> */}
            <View
              style={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                overflow: 'hidden',
              }}>
              <Animated.Image
                // resizeMethod="auto"
                // resizeMode="cover"
                source={require('../assets/images/pic.jpg')}
                style={{
                  // opacity: fade,
                  height: HEIGHT_MAX,
                  width: '100%',
                }}
              />
            </View>
          </Animated.View>
        )}
        minHeight={0}
        maxHeight={HEIGHT_MAX}
        overlayColor="white"
        maxOverlayOpacity={0.8}
        // headerImage={require('../assets/images/pic.jpg')}
      >
        <TriggeringView>
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
        </TriggeringView>
      </ImageHeaderScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: topValue,
          zIndex: 2,
          height: 60,
          alignItems: 'center',
          elevation: 60,
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            // backgroundColor: '#fff',
            borderRadius: 30,
            width: '80%',
            height: '80%',
            // marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            // marginBottom: 20,
            flexDirection: 'row',
            backgroundColor: color,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MaterialCommunityIcons name="magnify" size={20} color="red" />
          <TextInput
            style={{marginLeft: 5}}
            placeholder="Where are you going?"
            placeholderTextColor="#000"
          />
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: topValue,
          height: 60,
          elevation: 60,
          alignItems: 'center',
          opacity: opacityValue,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      />
    </>
  );
  // return (
  //   <View>
  //     <ScrollView
  //       //   stickyHeaderIndices={[1,3]}
  //       showsVerticalScrollIndicator={false}
  //       style={{backgroundColor: '#000'}}
  //       </View>
  //     </ScrollView>

  //   </View>
  // );
};
export default Home;
