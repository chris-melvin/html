import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import Column from "./layout/Column";
import FieldInput from "../../shared/components/document/inputs/FieldInput";

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontWeight: "600",
    marginTop: ".02in",
    fontSize: "9.6px",
    fontFamily: "Arial",
    lineHeight: "1.2",
    marginBottom: ".05in",
  },
});

export const PageTitle = ({ children, fontSize, style }) => {
  return (
    <Column style={style}>
      <FieldInput />
      <FieldInput height=".03in" />
      <Text
        style={[
          styles.label,
          {
            fontSize: fontSize || "9.6",
          },
        ]}
      >
        {children}
      </Text>
      <FieldInput height="0" />
      <FieldInput height=".03in" />
    </Column>
  );
};
