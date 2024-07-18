import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';
const styles = StyleSheet.create({
  square: {
    minWidth: 18,
    minHeight: 6,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0.5,
    borderColor: '#000',
  },
  firstSquare: {
    borderLeftWidth: 1,
  },
  squaresContainer: {
    height: 12,
    flexDirection: 'row',
  },
});

function SegmentedLineInput({ number, style }) {
  return (
    <View style={[styles.squaresContainer, style]}>
      {Array.from({ length: number }, (_, index) => (
        <View
          key={index}
          style={[styles.square, index === 0 ? styles.firstSquare : {}]}
        />
      ))}
    </View>
  );
}

export default SegmentedLineInput;
