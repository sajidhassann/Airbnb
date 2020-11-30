/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Styles from '../StyleSheet';
import * as Animatable from 'react-native-animatable';
class TabMiddleButton extends Component {
  render() {
    return (
      <Animatable.View
        animation="rubberBand"
        iterationCount="infinite"
        iterationDelay={1000}
        style={{position: 'absolute', alignItems: 'center'}}>
        <View style={Styles.recipe_button_round}>
          <TouchableHighlight>
            <View>
              <FontAwesome color="white" name="airbnb" size={30} />
            </View>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    );
  }
}
export default TabMiddleButton;
