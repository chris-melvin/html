import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Dash from "../../../shared/components/document/typography/Dash";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Source Sans",
    fontWeight: "light",
  },
});

const SegmentedDate = ({ label, dateMarginLeft = ".10in", style, debug }) => (
  <Row
    style={[
      {
        paddingTop: 15,
      },
      style,
    ]}
    debug={debug}
  >
    {label ? (
      <Text style={{ fontFamily: "Source Sans", fontWeight: "light" }}>
        {label}
      </Text>
    ) : (
      <></>
    )}
    <Column
      style={{
        marginLeft: dateMarginLeft,
        marginRight: ".08in",
      }}
    >
      <SegmentedLineInput number={2} width=".15in" innerHeight={6} />
      <Text style={styles.label}>month</Text>
    </Column>
    <Dash />
    <Column
      style={{
        marginLeft: ".08in",
        marginRight: ".08in",
      }}
    >
      <SegmentedLineInput number={2} width=".15in" innerHeight={6} />
      <Text style={styles.label}>day</Text>
    </Column>
    <Dash />
    <Column
      style={{
        marginLeft: ".08in",
        marginRight: ".08in",
      }}
    >
      <SegmentedLineInput number={4} width=".15in" innerHeight={6} />
      <Text style={styles.label}>year</Text>
    </Column>
  </Row>
);

export default SegmentedDate;
