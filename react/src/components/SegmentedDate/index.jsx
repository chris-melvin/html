import { StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";

import SegmentedLineInput from "../SegmentedLineInput";
import Row from "../layout/Row";
import Column from "../layout/Column";
import Dash from "../../../shared/components/document/typography/Dash";

const styles = StyleSheet.create({
  label: {
    alignSelf: "center",
    fontFamily: "Arial Narrow",
    fontStyle: "italic",
  },
});

const SegmentedDate = ({
  label,
  dateMarginLeft = ".10in",
  style,
  boxWidth = ".15in",
  debug,
  innerHeight = ".08in",
  fontSize = "8.04px",
}) => (
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
      <Text style={{ fontFamily: "Arial Narrow" }}>{label}</Text>
    ) : (
      <></>
    )}
    <Column
      style={{
        marginLeft: dateMarginLeft,
        marginRight: ".04in",
      }}
    >
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
      />
      <Text style={[styles.label, { fontSize: fontSize }]}>Month</Text>
    </Column>
    <Dash />
    <Column
      style={{
        marginLeft: ".04in",
        marginRight: ".04in",
      }}
    >
      <SegmentedLineInput
        number={2}
        width={boxWidth}
        innerHeight={innerHeight}
      />
      <Text style={[styles.label, { fontSize: fontSize }]}>Day</Text>
    </Column>
    <Dash />
    <Column
      style={{
        marginLeft: ".04in",
        marginRight: ".04in",
      }}
    >
      <SegmentedLineInput
        number={4}
        width={boxWidth}
        innerHeight={innerHeight}
      />
      <Text style={[styles.label, { fontSize: fontSize }]}>Year</Text>
    </Column>
  </Row>
);

export default SegmentedDate;
