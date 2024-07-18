import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
const styles = StyleSheet.create({
  square: {
    minWidth: 12,
    height: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  firstSquare: {
    borderLeftWidth: 1,
  },
  squaresContainer: {
    flexDirection: "row",
  },
});

function BoxInput({ number, style }) {
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

export default BoxInput;
