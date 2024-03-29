import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import config from 'config/Layout';
import Header from '../Header';
import Avatar from '../Avatar';
import { HeaderTitle } from '../StyledText';
import { Feather } from '@expo/vector-icons';

const BrowseHeader = ({ title }) => {
  return (
    <Header style={styles.container}>
      <TouchableOpacity style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Feather
            name="search"
            size={18}
            color='#FFFFFF'
            style={styles.searchIcon}
          />
          <HeaderTitle style={styles.titleText}>Melbourne	• Wedding • 2 Days</HeaderTitle>
        </View>
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Feather
            name="filter"
            size={18}
            color='#FFFFFF'
          />
        </TouchableOpacity>
        <Avatar />
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: config.gutterWidth,
    paddingBottom: config.gutterWidth
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.35)',
    borderRadius: 10,
    paddingVertical: config.gutterWidth / 2,
    paddingHorizontal: config.gutterWidth / 2,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: (config.gutterWidth / 2)-3,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default BrowseHeader;