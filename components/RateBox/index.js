import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from 'config/Colors';
import { MonoTextBold } from '../StyledText';

function RateBox({ rate }) {
  let kind = null;
  if (rate >= 4.5) {
    kind = 'primary';
  } else if (rate >= 3.5 && rate < 4.5) {
    kind = 'success';
  } else if (rate <= 3) {
    kind = 'warning';
  } else {
    kind = 'light';
  }
  
  return (
    <View style={[styles.rateContainer, styles[kind]]}>
      <MonoTextBold style={styles.rateText}>{Number.parseFloat(rate).toFixed(1)}</MonoTextBold>
    </View>
  );
};

RateBox.defaultProps = {
  rate: 3.9
}

const styles = StyleSheet.create({
  rateContainer: {
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  rateText: {
    color: '#FFFFFF',
    fontWeight: "600"
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  success: {
    backgroundColor: Colors.success,
  },
  warning: {
    backgroundColor: Colors.warning,
  }
});


export default RateBox;