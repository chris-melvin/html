import { Text, View } from "@react-pdf/renderer";
import React from "react";

const BorderedField = ({ label, children, disableRightBorder, style, horizontal, small, customHeight }) => {
  const valueHeight = customHeight || (small ? "0.245in" : "0.34in");
  return (
    <View
      style={[
        {
          margin: 0,
          borderRightWidth: disableRightBorder ? 0 : 1,
          borderBottomWidth: 1,
          borderColor: "black",
          fontFamily: "Source Sans",
          fontWeight: "bold",
          fontSize: 11.52,
          display: "flex",
          flexDirection: horizontal ? "row" : "column",
          paddingHorizontal: 3,
          width: "100%",
          paddingBottom: children && !horizontal ? 0 : valueHeight,
        },
        style,
      ]}
    >
      <Text>{label}</Text>
      {children && (
        <View
          style={[
            { minHeight: horizontal ? 0 : valueHeight },
            ...(horizontal ? [{ marginLeft: 10, marginRight: 30 }] : []),
          ]}
        >
          {children}
        </View>
      )}
    </View>
  );
};

export default BorderedField;
