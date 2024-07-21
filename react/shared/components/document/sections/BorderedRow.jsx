import { View } from "@react-pdf/renderer";
import React from "react";

const BorderedRow = ({ children, style }) => (
  <View
    style={[
      {
        margin: 0,
        borderBottomWidth: 1,
        borderColor: "black",
        fontFamily: "Source Sans",
        fontSize: 11.52,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 3,
        textAlign: "center",
        width: "100%",
        height: 22,
      },
      style,
    ]}
  >
    {children}
  </View>
);

export default BorderedRow;
