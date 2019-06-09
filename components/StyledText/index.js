import React from 'react';
import { Text } from 'react-native';

export function HeaderTitle(props) {
  return (
    <Text numberOfLines={1} {...props} style={[{ fontFamily: 'Medium', fontSize: 18, lineHeight: 24, }, props.style]} />
  );
}

export function SubTitle(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'Medium', fontSize: 16, lineHeight: 24, }]} />
  );
}

export function MonoText(props) {
  return (
    <Text {...props} style={[{ fontFamily: 'Regular', fontSize: 14, }, props.style]} />
  );
}

export function MonoTextBold(props) {
  return (
    <Text {...props} style={[{ fontFamily: 'Medium', fontSize: 14, }, props.style]} />
  );
}
