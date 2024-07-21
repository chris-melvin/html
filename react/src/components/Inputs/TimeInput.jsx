import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Row from "../layout/Row";
import Column from "../layout/Column";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontSize: "8.04px",
  },
});

const TimeInput = ({ bottomLabel = "hh-mm", rightLabel, style, debug }) => (
  <Row
    style={[
      //   {
      //     paddingTop: 15,
      //   },
      style,
    ]}
    debug={debug}
  >
    <Column>
      <SegmentedLineInput number={1} width=".35in" />
      <Text style={styles.label}>{bottomLabel}</Text>
    </Column>
    {rightLabel ? <Text>{rightLabel}</Text> : <></>}
  </Row>
);

export default TimeInput;
