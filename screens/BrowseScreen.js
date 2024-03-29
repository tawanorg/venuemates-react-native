import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import config from 'config/Layout';
import BrowseHeader from 'components/BrowseHeader';
import EventCard from 'components/EventCard';
import { MonoText } from 'components/StyledText';
import { Feather } from '@expo/vector-icons';

const MOCK_ITEMS = [
  'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1074&q=80',
  'https://images.unsplash.com/photo-1468359601543-843bfaef291a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
  'https://images.unsplash.com/photo-1521727284875-14f6b020d1d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1541559476210-2c7094bc222b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
];

export default function BrowseScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.contentContainerStyle}
        data={MOCK_ITEMS}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
      <View style={styles.foatingContainer}>
        <TouchableOpacity style={styles.foatingButton}>
          <MonoText style={styles.mapText}>Map</MonoText>
          <Feather
            name="map"
            size={18}
            color='#444444'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const renderItem = ({ index, item }) => {
  return (
    <EventCard 
      photoUrl={item}
    />
  )
}
 
BrowseScreen.navigationOptions = {
  header: <BrowseHeader />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  list: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingHorizontal: config.gutterWidth,
    paddingVertical: config.gutterWidth,
  },
  emptyText: {
    textAlign: 'center',
    lineHeight: 29,
  },
  foatingContainer: {
    position: 'absolute',
    bottom: config.gutterWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  foatingButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF'
  },
  mapText: {
    marginRight: 10,
    fontSize: 16
  },
  divider: {
    marginVertical: 10
  }
});
