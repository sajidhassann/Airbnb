/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Styles from '../StyleSheet';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import TabMiddleButton from '../components/TabMiddleButton';
import {View} from 'react-native';
import Home from './Home';
import Gallery from './Gallery';
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const TheHome = () => (
  <Stack.Navigator headerMode={false} initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Gallery" component={Gallery} />
  </Stack.Navigator>
);
class BottomTabs extends Component {
  render() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          labelStyle: Styles.bottom_navigation_label_Styles,
          style: {
            height: 70,
            alignContent: 'center',
          },
          tabStyle: {
            justifyContent: 'center',
          },
        }}>
        <Tabs.Screen
          name="Explore"
          component={TheHome}
          options={{
            tabBarIcon: ({color}) => (
              <Ion
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="ios-search-outline"
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Saved"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="heart-outline"
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Trips"
          component={TheHome}
          options={{
            tabBarIcon: () => <TabMiddleButton />,
            tabBarLabel: () => {},
          }}
        />
        <Tabs.Screen
          name="Inbox"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="message-outline"
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="account-circle-outline"
                size={30}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }
  customScreen() {
    return <View></View>;
  }
}
export default BottomTabs;
