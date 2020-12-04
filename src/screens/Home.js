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
  StyleSheet,
  Pressable,
  Platform,
  Dimensions,
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
import {
  ImageHeaderScrollView,
  TriggeringView,
} from 'react-native-image-header-scroll-view';

import * as Animatable from 'react-native-animatable';

const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;
const MAX_HEIGHT = 450;

const Home = ({navigation: {navigate}}) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const HEIGHT_MAX = 450;
  const HEIGHT_MIN = 100;
  const HEIGHT_DIFFERENCE = HEIGHT_MAX - HEIGHT_MIN;
  const opacityValue = scrollY.interpolate({
    inputRange: [0, HEIGHT_DIFFERENCE / 2, HEIGHT_DIFFERENCE],
    outputRange: [0, 1, 1],
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
    // <View>
    //   <ScrollView
    //     //   stickyHeaderIndices={[1,3]}
    //     showsVerticalScrollIndicator={false}
    //     style={{backgroundColor: '#000'}}
    //     scrollEventThrottle={16}
    //     onScroll={Animated.event([
    //       {nativeEvent: {contentOffset: {y: scrollY}}},
    //     ])}>
    //     {/* <StatusBar backgroundColor={opacityValue == 0 ? '#fff' : '#000'} /> */}
    //     <View
    //       style={{
    //         backgroundColor: '#fff',
    //         // borderTopLeftRadius: 30,
    //         // borderTopRightRadius: 30,
    //         // overflow: 'hidden',
    //       }}>
    //       <ImageBackground
    //         source={require('../assets/images/pic.jpg')}
    //         style={{
    //           height: 450,
    //         }}>
    //         <View
    //           style={{
    //             width: '50%',
    //             height: '100%',
    //             justifyContent: 'center',
    //             paddingLeft: 20,
    //           }}>
    //           <Text style={{fontSize: 70, fontWeight: 'bold', color: '#fff'}}>
    //             Go{'\n'}Near
    //           </Text>
    //           <View
    //             style={{
    //               backgroundColor: '#fff',
    //               padding: 10,
    //               alignItems: 'center',
    //               borderRadius: 10,
    //               marginTop: 20,
    //             }}>
    //             <Text>Explore nearby stays</Text>
    //           </View>
    //         </View>
    //       </ImageBackground>
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ImageHeaderScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        renderForeground={() => (
          <>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 30,
                width: '80%',
                // height: '100%',
                zIndex: -4,
                marginTop: '19%',
                marginLeft: '10%',
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
            <Animated.View
              delay={1000}
              style={{
                position: 'absolute',
                width: '100%',
                top: '15.3%',
                height: 60,
                // zIndex: ,
                alignItems: 'center',
                opacity: opacityValue,
                backgroundColor: '#fff',
                justifyContent: 'center',
              }}
            />
          </>
        )}
        renderHeader={() => (
          <>
            <View style={{backgroundColor: 'black'}}>
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
              <ImageBackground
                source={require('../assets/images/pic.jpg')}
                style={styles.image}>
                {/* <View
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
                    // marginBottom: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <MaterialCommunityIcons
                    name="magnify"
                    size={20}
                    color="red"
                  />
                  <TextInput
                    style={{marginLeft: 5}}
                    placeholder="Where are you going?"
                    placeholderTextColor="#000"
                  />
                </View>
              </View> */}

                <View
                  style={{
                    width: '50%',
                    height: '100%',
                    justifyContent: 'center',
                    paddingLeft: 20,
                  }}>
                  <Text
                    style={{fontSize: 70, fontWeight: 'bold', color: '#fff'}}>
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
        )}>
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
          {/* </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 2,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 30,
            width: '80%',
            height: '80%',
            // marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            // marginBottom: 20,
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
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          height: 60,
          alignItems: 'center',
          opacity: opacityValue,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}></Animated.View> */}
        </TriggeringView>
      </ImageHeaderScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          zIndex: 61,
          height: 60,
          elevation: 9,
          opacity: opacityValue,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'lightgrey',
            borderRadius: 30,
            width: '80%',
            height: '80%',
            // marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
            // marginBottom: 20,
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
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          width: '100%',
          top: 0,
          height: 60,
          zIndex: 60,
          alignItems: 'center',
          opacity: opacityValue,
          backgroundColor: '#fff',
          justifyContent: 'center',
          elevation: 8,
        }}
      />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    overflow: 'hidden',
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 20,
  },
  name: {
    fontWeight: 'bold',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    textAlign: 'justify',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: '#FF6347',
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
  },
  titleContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 24,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
  sectionLarge: {
    minHeight: 300,
  },
});

// return (
//   <ScrollView
//     //   stickyHeaderIndices={[1,3]}
//     showsVerticalScrollIndicator={false}
//     style={{backgroundColor: '#000'}}>
//     <Text
//       style={{
//         color: '#fff',
//         marginTop: 20,
//         marginBottom: 15,
//         alignSelf: 'center',
//         textDecorationLine: 'underline',
//       }}>
//       Get the latest on our COVID-19 response
//     </Text>
//     <View
//       style={{
//         backgroundColor: '#fff',
//         borderTopLeftRadius: 30,
//         borderTopRightRadius: 30,
//         overflow: 'hidden',
//       }}>
//       <ImageBackground
//         source={require('../assets/images/pic.jpg')}
//         style={{
//           height: 450,
//         }}>
//         <View
//           style={{
//             position: 'absolute',
//             width: '100%',
//             top: 0,
//             height: 50,
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               backgroundColor: '#fff',
//               borderRadius: 30,
//               width: '80%',
//               height: '100%',
//               marginTop: 20,
//               paddingLeft: 20,
//               paddingRight: 20,
//               marginBottom: 20,
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}>
//             <MaterialCommunityIcons name="magnify" size={20} color="red" />
//             <TextInput
//               style={{marginLeft: 5}}
//               placeholder="Where are you going?"
//               placeholderTextColor="#000"
//             />
//           </View>
//         </View>
//         <View
//           style={{
//             width: '50%',
//             height: '100%',
//             justifyContent: 'center',
//             paddingLeft: 20,
//           }}>
//           <Text style={{fontSize: 70, fontWeight: 'bold', color: '#fff'}}>
//             Go{'\n'}Near
//           </Text>
//           <View
//             style={{
//               backgroundColor: '#fff',
//               padding: 10,
//               alignItems: 'center',
//               borderRadius: 10,
//               marginTop: 20,
//             }}>
//             <Text>Explore nearby stays</Text>
//           </View>
//         </View>
//       </ImageBackground>
//       <View
//         style={{
//           justifyContent: 'center',
//           paddingTop: 20,
//           paddingBottom: 10,
//         }}>
//         <ScrollView
//           horizontal
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}>
//           <FlatList
//             numColumns={Math.ceil(places_name.length / 2)}
//             showsVerticalScrollIndicator={false}
//             showsHorizontalScrollIndicator={false}
//             data={places_name}
//             renderItem={mapPlacesData}
//             keyExtractor={(item, index) => index.toString()}
//           />
//         </ScrollView>
//       </View>
//       <View
//         style={{
//           justifyContent: 'center',
//           paddingTop: 20,
//           paddingBottom: 20,
//         }}>
//         <Text
//           style={{
//             paddingLeft: 20,
//             marginBottom: 20,
//             fontSize: 24,
//             fontWeight: 'bold',
//           }}>
//           Live anywhere
//         </Text>
//         <FlatList
//           horizontal={true}
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}
//           data={places_name}
//           renderItem={mapSpotsData}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//       <View
//         style={{
//           justifyContent: 'center',
//           paddingTop: 20,
//           backgroundColor: '#000',
//           paddingBottom: 20,
//         }}>
//         <Text
//           style={{
//             paddingLeft: 20,
//             marginBottom: 10,
//             fontSize: 24,
//             color: '#fff',
//             fontWeight: 'bold',
//           }}>
//           Experiance the world
//         </Text>
//         <Text
//           style={{
//             paddingLeft: 20,
//             marginBottom: 20,
//             color: '#fff',
//             fontSize: 16,
//             lineHeight: 18,
//           }}>
//           Unique activities with local experts -- in{'\n'}person or online
//         </Text>
//         <FlatList
//           horizontal={true}
//           showsVerticalScrollIndicator={false}
//           showsHorizontalScrollIndicator={false}
//           data={places_name}
//           renderItem={mapExperianceData}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </View>
//   </ScrollView>
// );
