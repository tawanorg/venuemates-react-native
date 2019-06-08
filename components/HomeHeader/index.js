import React from 'react';
import { StyleSheet } from 'react-native';
import config from 'config/Layout';
import Header from '../Header';
import Avatar from '../Avatar';
import { HeaderTitle } from '../StyledText';

const HomeHeader = ({ title }) => {
  return (
    <Header style={styles.container}>
      <HeaderTitle style={styles.titleText}>
        {title}
      </HeaderTitle>
      <Avatar />
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
  },
});

export default HomeHeader;