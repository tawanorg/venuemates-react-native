import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from 'config/Colors';
import { MonoText, SubTitle } from '../StyledText';
import RateBox from '../RateBox';

const EventCard = ({ photoUrl }) => {
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
      <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }]}>
        <MonoText style={styles.typeText}>conference, function - private</MonoText>
        <RateBox rate={3} />
      </View>
      <SubTitle>Quiet VIP Conference or Function Space</SubTitle>
      <View style={[styles.flexRow, { alignItems: 'center', marginBottom: 3 }]}>
        <MonoText style={styles.subText}>Start from $500 per day</MonoText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: 200,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subText: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 24,
  },
  typeText: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 24,
    textTransform: 'uppercase'
  }
});

export default EventCard;
