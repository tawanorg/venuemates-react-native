import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TAB_MENUS } from 'config/Constants';
import Layout from 'config/Layout';
import Colors from 'config/Colors';
import { MonoTextBold } from '../StyledText';
import { LinearGradient } from 'expo-linear-gradient';

function TabButtons({ navigation }) {
  let { state } = navigation;
  let routes = state.routes;
  let shouldSlider = routes.length > 2;
  return (
    <View style={[styles.container, !shouldSlider && styles.navigationRow]}>
      {
        shouldSlider ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={routes}
            renderItem={({ index, item }, key) => {
              return (
                <MenuWithNavigation
                  key={key} 
                  index={index}
                  item={item}
                />
              )
            }}
          />
      ) : routes.map((route, key) => (
        <MenuWithNavigation
          key={key} 
          index={key}
          item={route}
        />
      ))}
    </View>
  );
};

const MenuWithNavigation = withNavigation(Menu);

function Menu({ navigation, index, item }) {
  let currentView = navigation.state.index;
  let currentViewBackground = currentView === index ? [Colors.primary, Colors.secondary] : ['#FFFFFF', '#FFFFFF']
  return (
    <TouchableOpacity 
      key={index}
      style={styles.navigation}
      onPress={() => navigation.navigate(item.key)}
    >
      <MonoTextBold style={[styles.navigationText, currentView === index && styles.navigationTextActive]}>
        {TAB_MENUS[item.key]}
      </MonoTextBold>
      <View style={styles.activeViewBorder}>
        <LinearGradient
          colors={currentViewBackground}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}      
          style={styles.gradient}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 0.5,
  },
  navigation: {
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
  navigationRow: {
    flexDirection: 'row',
  },
  navigationText: {
    paddingVertical: Layout.gutterWidth / 1.2,
    paddingHorizontal: Layout.gutterWidth * 1.2,
    color: Colors.color,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  navigationTextActive: {
    color: Colors.primary,
  },
  activeViewBorder: {
    height: 2
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

export default TabButtons;