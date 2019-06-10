import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import config from 'config/Layout';
import BrowseHeader from 'components/BrowseHeader';
import SmallCard from 'components/SmallCard';
import { MonoText } from 'components/StyledText';
import { Feather } from '@expo/vector-icons';

const MOCK_ITEMS = [
  'https://images.unsplash.com/photo-1489513691500-41ef4acdb665?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1496285416008-dfb54bbaedff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1529347599731-ec02b259c9f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1508137368284-90070818e0ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
];

export default function DecorScreen() {
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
          <MonoText style={styles.mapText}>Refine</MonoText>
          <Feather
            name="filter"
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
    <SmallCard 
      photoUrl={item}
    />
  )
}
 
DecorScreen.navigationOptions = {
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
