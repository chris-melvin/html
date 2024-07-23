import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import Column from "./layout/Column";
import FieldInput from "../../shared/components/document/inputs/FieldInput";
import Row from "./layout/Row";

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontWeight: 700,
    fontFamily: "Arial",
    marginTop: ".04in",
    marginBottom: ".06in",
    fontSize: "9.36px",
  },
  bar: {
    marginTop: ".1in",
  },
  barBottom: {
    marginBottom: ".1in",
  },
});

export const SectionTitle = ({ children, style, color }) => {
  return (
    <>
      <FieldInput height=".02in" style={[styles.bar, style]} />
      <Text style={{ color: color, ...styles.label }}>{children}</Text>
      <FieldInput height="0" style={[styles.barBottom, style]} />
    </>
  );
};
