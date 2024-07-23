import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Row from "../layout/Row";
import Column from "../layout/Column";

const styles = StyleSheet.create({
  label: {
    fontSize: "8.04px",
    marginTop: ".02in",
    alignSelf: "flex-start",
    marginLeft: ".03in",
  },
});

const TimeInput = ({
  bottomLabel = "hh-mm",
  rightLabel,
  rightLabelStyle,
  style,
  debug,
  width = ".35in",
}) => (
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
      <Row style={{ alignItems: "flex-end" }}>
        <SegmentedLineInput number={1} width={width} />
        {rightLabel ? (
          <Text style={rightLabelStyle}> {rightLabel}</Text>
        ) : (
          <></>
        )}
      </Row>
      <Text style={styles.label}>{bottomLabel}</Text>
    </Column>
  </Row>
);

export default TimeInput;
