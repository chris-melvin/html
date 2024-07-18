import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Row from "../layout/Row";
import BoxInput from "./BoxInput";

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontFamily: "Source Sans",
    fontSize: 11.52,
    fontWeight: 400,
    paddingTop: 2,
    flexWrap: "nowrap",
    overflow: "visible",
    marginRight: 8,
  },
  smallSquare: {
    minWidth: 14,
    height: 14,
    alignSelf: "center",
    marginRight: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  square: {
    minWidth: 18,
    height: 18,
    marginRight: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  smLabel: {
    alignSelf: "center",
    marginRight: 8,
    fontFamily: "Source Sans",
    fontSize: 10,
  },
});

const CheckBoxInput = ({ children, label, style, isSmall = false, customSquareSize, boxMarginRight = "0.05in" }) => (
  <Row
    style={{
      ...(isSmall ? { maxHeight: 14 } : { marginRight: 5, marginBottom: 3 }),
      ...style,
    }}
  >
    {isSmall ? (
      <>
        <View style={[styles.smallSquare, { minWidth: customSquareSize, height: customSquareSize }]} />
        {label && <Text style={styles.smLabel}>{label}</Text>}
        {children}
      </>
    ) : (
      <>
        <View style={[styles.square, { minWidth: customSquareSize, height: customSquareSize }]} />
        {label && <Text style={styles.label}>{label}</Text>}
        {children}
      </>
    )}
  </Row>
);

export default CheckBoxInput;
