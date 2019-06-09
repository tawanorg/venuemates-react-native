import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from 'config/Colors';
import { MonoText, SubTitle, MonoTextBold } from '../StyledText';

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
      <View style={[styles.flexRow, { alignItems: 'center', justifyContent: 'space-between', marginTop: 8 }]}>
        <MonoText style={styles.typeText}>WEDDING, MEETING - PRIVATE</MonoText>
        <View style={[styles.rateContainer, { backgroundColor: Colors.warning }]}>
          <MonoTextBold style={styles.rateText}>2.9</MonoTextBold>
        </View>
      </View>
      <SubTitle>Quiet Clubbing VIP Heated Rooftop Party</SubTitle>
      <View style={[styles.flexRow, { alignItems: 'center', marginBottom: 3 }]}>
        <MonoText style={styles.subText}>Start from $500 per day</MonoText>
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
  rateContainer: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  rateText: {
    color: '#FFFFFF',
    fontWeight: "600"
  },
  typeText: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 24,
  }
});


export default EventCard;
