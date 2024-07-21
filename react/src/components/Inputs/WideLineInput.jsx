import { StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  lineContainer: {
    width: "100%",
    display: "flex",
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "stretch",
  },
  fieldContainer: {
    flexBasis: "100%",
    flex: 1,
    fontSize: 14,
    flexDirection: "column",
    position: "relative",
  },
  fieldValue: {
    minHeight: "0.34in",
  },
  fieldLabel: {
    paddingVertical: 2,
    borderTopWidth: 1,
    borderColor: "black",
    textAlign: "center",
    fontSize: 8,
  },
  noRightBorder: {
    borderRightWidth: 0,
  },
});

const WideLineInput = ({ fields, style, labelStyle }) => (
  <View style={[styles.lineContainer, style]}>
    {fields?.map((field, index) => (
      <View style={[styles.fieldContainer, { flex: field.size || 1 }]}>
        <Text style={styles.fieldValue}>{field?.value || " "}</Text>
        <Text
          style={[
            styles.fieldLabel,
            labelStyle,
            ...(index === fields.length - 1 ? [styles.noRightBorder] : []),
          ]}
        >
          {field?.label}
        </Text>
      </View>
    ))}
  </View>
);

export default WideLineInput;
