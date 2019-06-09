import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import HomeHeader from 'components/HomeHeader';
import TabButtons from 'components/TabButtons';
import BrowseScreen from '../screens/BrowseScreen';
import HomeScreen from '../screens/HomeScreen';
  
const HomeTopNavigator = createMaterialTopTabNavigator({
  LOCATION: BrowseScreen,
  FOODANDBEVERAGE: HomeScreen,
},
{
  initialRouteName: 'LOCATION',
  tabBarComponent: TabButtons,
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
});

HomeTopNavigator.navigationOptions = {
  header: () => <HomeHeader title="Home" />
}

export default HomeTopNavigator;