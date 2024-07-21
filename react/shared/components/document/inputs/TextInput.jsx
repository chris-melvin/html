import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import Row from "../layout/Row";

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
  },
  inputField: {
    height: "100%",
    borderBottomWidth: 0.5,
    borderColor: "#000",
  },
  fieldLabel: {
    alignSelf: "center",
    textAlign: "center",
    fontFamily: "Source Sans",
    marginRight: 3,
  },
  placeholder: {
    color: "#808080",
    textAlign: "center",
  },
  descriptionText: {
    fontFamily: "Source Sans",
    letterSpacing: -0.5,
    fontSize: 7.68,
    alignSelf: "center",
  },
});

const TextInput = ({
  label,
  value,
  placeholder,
  description,
  style,
  placeholderStyle,
  lineStyle,
  width = 20,
  fullWidth,
  debug,
}) => (
  <Row debug={debug} style={[styles.fieldContainer, style]}>
    <View style={styles.fieldLabel}>
      <Text>{label}</Text>
    </View>
    <View
      style={[
        styles.inputField,
        { width: fullWidth ? undefined : width, minWidth: width },
        lineStyle,
        { flex: fullWidth ? 1 : undefined },
      ]}
    >
      {value && <Text>{value}</Text>}
      {placeholder && !value && (
        <Text style={[styles.placeholder, placeholderStyle]}>
          {placeholder}
        </Text>
      )}
    </View>
  </Row>
);

export default TextInput;
