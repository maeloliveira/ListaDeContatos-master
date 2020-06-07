import React from 'react';
import { View, StyleSheet } from 'react-native';

import Variables from '../Variables/Variables'

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.styles }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowRadius: Variables.small,
    backgroundColor: Variables.space100,
    padding: Variables.small,
  }
});

export default Card;