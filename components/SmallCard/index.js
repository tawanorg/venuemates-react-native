import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from 'config/Colors';
import { MonoText, SubTitle } from '../StyledText';
import RateBox from '../RateBox';

const SmallCard = ({ photoUrl }) => {
  return (
    <TouchableOpacity 
      style={[styles.container]}
      onPress={() => null}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: photoUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'transparent', 'rgba(0,0,0,0.8)']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between' }]}>
          <MonoText style={styles.subText}>Southbank, VIC</MonoText>
          <RateBox rate={3} />
        </View>
        <SubTitle numberOfLines={1}>Southbank Corporate Catering</SubTitle>
        <MonoText numberOfLines={2} style={[styles.subText, styles.descText]}>Corporate, Wedding, Event & Meeting</MonoText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
    width: 90,
    height: 90,
  },
  image: {
    borderRadius: 10,
    width: 90,
    height: 90,
  },
  info: {
    flexDirection: 'column',
    flex: 1,
    marginLeft: 10
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  descText: {
    color: Colors.grey,
  },
  subText: {
    color: Colors.grey,
    fontSize: 13,
    lineHeight: 18,
    textTransform: 'uppercase'
  }
});

export default SmallCard;
