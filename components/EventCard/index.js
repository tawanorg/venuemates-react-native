import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo';
import Colors from 'config/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { MonoText, SubTitle } from '../StyledText';

const EventCard = ({ photoUrl }) => {
  return (
    <View style={[styles.container]}>
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
      <View style={[styles.flexRow, { alignItems: 'center', marginTop: 8 }]}>
        <MonoText style={styles.typeText}>WEDDING, MEETING - PRIVATE</MonoText>
      </View>
      <SubTitle>Quiet Clubbing VIP Heated Rooftop Party</SubTitle>
      <View style={[styles.flexRow, { alignItems: 'center', marginBottom: 3 }]}>
        <MonoText style={styles.subText}>Start from $500 per day</MonoText>
      </View>
      <View style={[styles.flexRow, { alignItems: 'center' }]}>
        <View style={[styles.flexRow, { alignItems: 'center' }]}>
          <FontAwesome
            name="star"
            size={15}
            color={Colors.primary}
            style={styles.star}
          />
          <FontAwesome
            name="star"
            size={15}
            color={Colors.primary}
            style={styles.star}
          />
        </View>
        <MonoText style={styles.starText}>132</MonoText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
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
  starText: {
    position: 'relative',
    top: 1.5,
    marginLeft: 5,
    color: Colors.color,
  },
  star: {
    marginRight: 3,
  },
  typeText: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 24,
  }
});


export default EventCard;
