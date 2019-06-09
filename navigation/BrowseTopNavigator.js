import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import BrowseHeader from 'components/BrowseHeader';
import TabButtons from 'components/TabButtons';
import BrowseScreen from '../screens/BrowseScreen';
import HomeScreen from '../screens/HomeScreen';
  
const BrowseTopNavigator = createMaterialTopTabNavigator({
  LOCATION: BrowseScreen,
  FOODANDBEVERAGE: HomeScreen,
  COMMUTE: HomeScreen,
  SERVICES: HomeScreen,
},
{
  initialRouteName: 'LOCATION',
  tabBarComponent: TabButtons,
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
});

BrowseTopNavigator.navigationOptions = {
  header: () => <BrowseHeader />
}

export default BrowseTopNavigator;