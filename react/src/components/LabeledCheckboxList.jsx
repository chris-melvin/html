import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import Column from "./layout/Column";
import FieldInput from "../../shared/components/document/inputs/FieldInput";
import Row from "./layout/Row";
import CheckBoxInput from "../../shared/components/document/inputs/CheckBoxInput";

const styles = StyleSheet.create({
  text: {
    fontSize: "7.8px",
    fontFamily: "Arial Narrow",
    marginBottom: ".1in",
  },
});

export const LabeledCheckboxList = ({
  array,
  width = "1.8in",
  marginRight,
}) => {
  return (
    <Column
      style={{
        marginLeft: ".1in",
        width: width,
        marginRight: marginRight,
      }}
    >
      {array.map((item) => (
        <Row
          key={item}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.text}>{item}</Text>
          </View>
          <View style={{ marginBottom: ".03in" }}>
            <CheckBoxInput
              isSmall={false}
              customHeight=".18in"
              customWidth=".14in"
            />
          </View>
        </Row>
      ))}
    </Column>
  );
};
