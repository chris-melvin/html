import { StyleSheet, Text, View } from "@react-pdf/renderer";
import Row from "../layout/Row";
import BoxInput from "./BoxInput";

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    fontFamily: "Arial Narrow",
    paddingTop: 2,
    flexWrap: "nowrap",
    overflow: "visible",
  },
  smallSquare: {
    // minWidth: 14,
    width: ".11in",
    height: ".15in",
    alignSelf: "center",
    marginRight: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#000",
  },
  square: {
    marginRight: 5,
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderLeftWidth: 0.7,
    borderRightWidth: 0.7,
    borderColor: "#000",
  },
  smLabel: {
    alignSelf: "center",
    marginRight: 8,
    fontFamily: "Arial Narrow",
    fontSize: 8,
  },
});

const CheckBoxInput = ({
  children,
  label,
  style,
  isSmall = true,
  customSquareSize,
  boxMarginRight = "0.05in",
  customWidth = ".16in",
  customHeight = ".18in",
}) => (
  <Row
    style={{
      ...(isSmall ? { maxHeight: 14 } : { marginBottom: 3 }),
      ...style,
    }}
  >
    {isSmall ? (
      <>
        <View
          style={[
            styles.smallSquare,
            { minWidth: customSquareSize, height: customSquareSize },
          ]}
        />
        {label && <Text style={styles.smLabel}>{label}</Text>}
        {children}
      </>
    ) : (
      <>
        <View
          style={[
            styles.square,
            {
              minWidth: customWidth,
              height: customHeight,
              marginRight: boxMarginRight,
            },
          ]}
        />
        {label && <Text style={styles.label}>{label}</Text>}
        {children}
      </>
    )}
  </Row>
);

export default CheckBoxInput;
