import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadScreen from './screens/ReadScreen';
import WriteScreen from './screens/WriteScreen';

export default class App extends React.Component {
  render(){
  return (
    
     <AppContainer/>
    
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Read: {screen: ReadScreen},
  Write: {screen: WriteScreen},
});
const AppContainer = createAppContainer(TabNavigator);
