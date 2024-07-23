import { StyleSheet, View, Text } from "@react-pdf/renderer";
import Row from "../layout/Row";

const styles = StyleSheet.create({
  lineContainer: {
    width: "100%",
    display: "flex",
    marginTop: "auto",
    flexDirection: "column",
    alignItems: "stretch",
    marginLeft: ".04in",
  },
  line: {
    borderBottomWidth: 1,
    minHeight: "0.34in",
    width: "100%",
  },
  fieldContainer: {},
  fieldValue: {
    minHeight: "0.34in",
  },
  fieldLabel: {
    paddingVertical: 2,
    borderColor: "black",
    fontSize: "8.04px",
    fontFamily: "Arial",
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
  labelContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: ".07in",
    marginRight: ".07in",
  },
});

const LineInput = ({ fields, style, labelStyle }) => (
  <View style={[styles.lineContainer, style]}>
    <View style={styles.line}></View>
    <Row style={styles.labelContainer}>
      {fields?.map((field, index) => (
        <Text
          key={field?.label}
          style={[
            styles.fieldLabel,
            labelStyle,
            ...(index === fields.length - 1 ? [styles.noRightBorder] : []),
          ]}
        >
          {field?.label}
        </Text>
      ))}
    </Row>
  </View>
);

export default LineInput;
