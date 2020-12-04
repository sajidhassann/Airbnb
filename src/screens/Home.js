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
  Dimensions,
  Platform,
  StyleSheet,
  StatusBar,
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
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 59;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

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

  const renderNavBar = () => (
    <View style={styles.navContainer}>
      <View
        style={{
          backgroundColor: 'lightgrey',
          borderRadius: 30,
          width: '80%',
          height: '100%',
          // marginTop: 20,
          alignSelf: 'center',
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
  );

  const renderContent = () => {
    return (
      <View style={{zIndex: 1}}>
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
    );
  };

  const title = () => {
    return (
      <>
        <Text
          style={{
            color: '#fff',
            backgroundColor: 'black',
            // marginTop: 10,
            // marginBottom: 15,
            paddingTop: 10,
            paddingBottom: 10,
            alignSelf: 'center',
            textDecorationLine: 'underline',
            width: '100%',
            textAlign: 'center',
          }}>
          Get the latest on our COVID-19 response
        </Text>
        <View
          style={{
            // backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            overflow: 'hidden',
            width: '100%',
          }}>
          <ImageBackground
            source={require('../assets/images/pic.jpg')}
            style={{
              height: 410,
            }}>
            {/* <View
            style={{
              position: 'absolute',
              width: '100%',
              top: 0,
              height: 50,
              alignItems: 'center',
            }}> */}
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 30,
                width: '80%',
                height: 50,
                marginTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                // marginBottom: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              <MaterialCommunityIcons name="magnify" size={20} color="red" />
              <TextInput
                style={{marginLeft: 5}}
                placeholder="Where are you going?"
                placeholderTextColor="#000"
              />
            </View>
            {/* </View> */}
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
        </View>
      </>
    );
  };

  return (
    <>
      <ReactNativeParallaxHeader
        headerMinHeight={HEADER_HEIGHT}
        headerMaxHeight={450}
        extraScrollHeight={20}
        navbarColor="white"
        statusBarColor="black"
        backgroundColor="black"
        alwaysShowNavBar={false}
        alwaysShowTitle={false}
        titleStyle={styles.titleStyle}
        title={title()}
        // extraScrollHeight={40}
        // backgroundImage={require('../assets/images/pic.jpg')}
        // titleStyle={{zIndex: -1}}
        backgroundImageScale={1.2}
        renderNavBar={renderNavBar}
        renderContent={renderContent}
        containerStyle={styles.container}
        contentContainerStyle={styles.contentContainer}
        innerContainerStyle={styles.container}
        // scrollEventThrottle={2000}
        scrollViewProps={{
          onScrollBeginDrag: () => console.log('onScrollBeginDrag'),
          onScrollEndDrag: () => console.log('onScrollEndDrag'),
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    zIndex: 1,
  },
  navContainer: {
    height: HEADER_HEIGHT,
    // marginHorizontal: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: 'transparent',
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    zIndex: -1,
  },
});
export default Home;
