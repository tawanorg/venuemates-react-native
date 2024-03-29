import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import HomeHeader from 'components/HomeHeader';
import EmptyState from 'components/EmptyState';
import { MonoText } from 'components/StyledText';

export default function EventScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <EmptyState>
        <MonoText style={styles.emptyText}>No any event you are attending!</MonoText>
      </EmptyState>
    </ScrollView>
  );
}

EventScreen.navigationOptions = {
  header: <HomeHeader title="Event Calendar" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    textAlign: 'center',
    lineHeight: 29,
  }
});
