import 'react-native-gesture-handler';
import React, {Component} from 'react';
import Styles from '../StyleSheet';
import * as Animatable from 'react-native-animatable';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TabMiddleButton from '../components/TabMiddleButton';
const Tabs = createBottomTabNavigator();
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
          name="Ingredients"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="food-apple-outline"
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Pantry"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="fridge-outline"
                size={30}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Recipe"
          component={this.customScreen}
          options={{
            tabBarIcon: () => <TabMiddleButton />,
            tabBarLabel: () => {},
          }}
        />
        <Tabs.Screen
          name="Favourites"
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
          name="Shopping List"
          component={this.customScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                color={color}
                style={Styles.bottom_navigation_icon_Styles}
                name="cart-outline"
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
