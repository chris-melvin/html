import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";
import Dash from "../typography/Dash";
import SegmentedLineInput from "./SegmentedLineInput";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Source Sans",
    fontWeight: "light",
  },
});

const SegmentedDateInput = ({ label, dateMarginLeft = ".10in", style, debug }) => (
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
        marginLeft: dateMarginLeft,
      }}
    >
      <SegmentedLineInput number={2} />
      <Text style={styles.label}>month</Text>
    </Column>
    <Dash />
    <Column>
      <SegmentedLineInput number={2} />
      <Text style={styles.label}>day</Text>
    </Column>
    <Dash />
    <Column>
      <SegmentedLineInput number={4} />
      <Text style={styles.label}>year</Text>
    </Column>
  </Row>
);

export default SegmentedDateInput;
