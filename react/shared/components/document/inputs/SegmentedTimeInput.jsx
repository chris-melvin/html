import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import SegmentedLineInput from "./SegmentedLineInput";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Source Sans",
    fontWeight: "light",
  },
});

const SegmentedTimeInput = ({ label, hourMarginLeft = ".10in", style, debug }) => (
  <Row
    style={[
      {
        paddingTop: 15,
      },
      style,
    ]}
    debug={debug}
  >
    {label ? <Text style={{ fontFamily: "Source Sans", fontWeight: "light" }}>{label}</Text> : <></>}
    <Column
      style={{
        marginLeft: hourMarginLeft,
      }}
    >
      <SegmentedLineInput number={2} />
      <Text style={styles.label}>hour</Text>
    </Column>
    <Text
      style={{
        fontSize: 12,
        marginHorizontal: 2,
        bottom: 2,
        textAlign: "center",
      }}
    >
      :
    </Text>
    <Column>
      <SegmentedLineInput number={2} />
      <Text style={styles.label}>minute</Text>
    </Column>
  </Row>
);

export default SegmentedTimeInput;
