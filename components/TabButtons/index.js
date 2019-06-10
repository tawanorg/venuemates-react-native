import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { TAB_MENUS } from 'config/Constants';
import Layout from 'config/Layout';
import Colors from 'config/Colors';
import { MonoTextBold } from '../StyledText';
import { LinearGradient } from 'expo-linear-gradient';

class TabButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    }

    this.flatListRef = React.createRef();
    this.getItemLayout = this.getItemLayout.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.onPressTabButton = this.onPressTabButton.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.currentIndex !== nextProps.navigation.state.index) {
      return {
        currentIndex: nextProps.navigation.state.index,
      }
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentIndex !== this.state.currentIndex) {
      this.scrollToIndex(this.state.currentIndex);
    }
  }

  getItemLayout(data, index) {
    return { length: data.length, index, offset: 33 * index }
  }

  scrollToIndex(index) {
    this.flatListRef.current.scrollToIndex({ animated: true, index });
  }

  onPressTabButton({ index, item }) {
    this.scrollToIndex(index);
    this.props.navigation.navigate(item.key);
  }
  
  render() {
    let { navigation } = this.props;
    let { state } = navigation;
    let routes = state.routes;
    let shouldSlider = routes.length > 2;
    
    return (
      <View style={[styles.container, !shouldSlider && styles.navigationRow]}>
        {
          shouldSlider ? (
            <FlatList
              horizontal
              getItemLayout={this.getItemLayout}
              showsHorizontalScrollIndicator={false}
              data={routes}
              ref={this.flatListRef}
              keyExtractor={item => item}
              initialScrollIndex={0}
              renderItem={({ index, item }, key) => {
                return (
                  <MenuWithNavigation
                    key={key} 
                    index={index}
                    item={item}
                    onPress={this.onPressTabButton}
                  />
                )
              }}
            />
        ) : routes.map((route, key) => (
          <MenuWithNavigation
            key={key} 
            index={key}
            item={route}
            onPress={this.onPressTabButton}
          />
        ))}
      </View>
    );
  }
};

const MenuWithNavigation = withNavigation(Menu);

function Menu({ navigation, onPress, index, item }) {
  let currentView = navigation.state.index;
  let currentViewBackground = currentView === index ? [Colors.primary, Colors.secondary] : ['#FFFFFF', '#FFFFFF']
  return (
    <TouchableOpacity 
      key={index}
      style={styles.navigation}
      onPress={() => onPress({ index, item })}
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
    paddingHorizontal: Layout.gutterWidth * 1.8,
    color: Colors.color,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  navigationTextActive: {
    color: Colors.primary,
  },
  activeViewBorder: {
    height: 2.5
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