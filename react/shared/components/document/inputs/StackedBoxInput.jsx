import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";

const styles = StyleSheet.create({
  container: {
    textAlign: "left",
  },
  upperText: {
    borderBottomWidth: 0.5,
    borderColor: "#000",
    padding: "0.03in",
    width: "100%",
  },
  lowerText: {
    padding: "0.03in",
    height: 22,
    textAlign: "center",
    width: "100%",
  },
  borderedContainer: {
    borderColor: "#000",
    borderWidth: 0.5,
  },
  borderedLowerText: {
    textAlign: "left",
    height: "0.25in",
  },
  borderedUpperText: {
    textAlign: "left",
    height: "0.25in",
  },
});

function StackedBoxInput({
  label,
  upperText,
  lowerText,
  style = {},
  debug,
  boxWidth,
  isBordered,
}) {
  return (
    <Row style={{ ...style }} debug={debug}>
      <Text
      // style={{
      //   marginRight: '0.14in',
      //   marginTop: '0.04in',
      // }}
      >
        {label}
      </Text>
      <Column
        style={{
          ...styles.container,
          width: boxWidth,
          ...(isBordered ? styles.borderedContainer : {}),
        }}
      >
        <View
          style={{
            ...styles.upperText,
            ...(isBordered ? styles.borderedUpperText : {}),
          }}
        >
          <Text>{upperText}</Text>
        </View>
        <View
          style={{
            ...styles.lowerText,
            ...(isBordered ? styles.borderedLowerText : {}),
          }}
        >
          <Text>{lowerText}</Text>
        </View>
      </Column>
    </Row>
  );
}

export default StackedBoxInput;
