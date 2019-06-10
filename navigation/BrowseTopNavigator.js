import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';

import BrowseHeader from 'components/BrowseHeader';
import TabButtons from 'components/TabButtons';
import BrowseScreen from '../screens/BrowseScreen';
import CateringScreen from '../screens/CateringScreen';
import DecorScreen from '../screens/DecorScreen';
import VendorsScreen from '../screens/VendorsScreen';

const BrowseTopNavigator = createMaterialTopTabNavigator({
  VENUE: BrowseScreen,
  CATERING: CateringScreen,
  DECOR: DecorScreen,
  SERVICES: VendorsScreen,
},
{
  initialRouteName: 'VENUE',
  tabBarComponent: TabButtons,
  tabBarPosition: 'top',
  swipeEnabled: true,
  animationEnabled: true,
});

BrowseTopNavigator.navigationOptions = {
  header: () => <BrowseHeader />
}

export default BrowseTopNavigator;