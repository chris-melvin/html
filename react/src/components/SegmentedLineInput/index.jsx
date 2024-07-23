import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
const styles = StyleSheet.create({
  square: {
    height: 6,
    borderBottomWidth: 0.7,
    borderLeftWidth: 0,
    borderRightWidth: 0.7,
    borderColor: "#000",
    boxSizing: "border-box",
  },
  firstSquare: {
    borderLeftWidth: 0,
  },
  lastsquare: {
    borderRightWidth: 0,
  },
  squaresContainer: {
    height: ".18in",
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
    flexDirection: "row",
    alignItems: "flex-end",
    boxSizing: "border-box",
  },
  removeBorderLeft: {
    borderLeftWidth: 0,
  },
});

function SegmentedLineInput({
  number,
  style,
  width = ".15in",
  innerHeight,
  removeBorderLeft = false,
}) {
  return (
    <View
      style={[
        styles.squaresContainer,
        style,
        removeBorderLeft ? styles.removeBorderLeft : {},
      ]}
    >
      {Array.from({ length: number }, (_, index) => (
        <View
          key={index}
          style={[
            styles.square,
            index === 0 ? styles.firstSquare : {},
            index === number - 1 ? styles.lastsquare : {},
            number === 1 ? styles.borderRight : {},
            width ? { width } : {},
            innerHeight ? { height: innerHeight } : {},
          ]}
        />
      ))}
    </View>
  );
}

export default SegmentedLineInput;
