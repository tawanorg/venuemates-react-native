import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import photo from 'assets/images/timtawan.jpeg';

const Avatar = ({ size }) => {
  return (
    <TouchableOpacity 
      style={[styles.container, {
        width: size,
        height: size,
        borderRadius: (size) / 2
      }]}
      onPress={() => null}
    >
      <Image 
        source={photo} 
        style={{
          width: size,
          height: size,
          borderRadius: size / 2
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

Avatar.defaultProps = {
  size: 32,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Avatar;