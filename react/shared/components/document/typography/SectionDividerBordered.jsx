import { Text, View } from "@react-pdf/renderer";
import React from "react";

const SectionDividerBordered = ({ children, description }) => (
  <View
    style={{
      margin: 0,
      borderWidth: 1,
      borderColor: "black",
      fontFamily: "Source Sans",
      fontWeight: "bold",
      fontSize: 11.52,
      justifyContent: "center",
      display: "flex",
      width: "100%",
      flexDirection: "row",
    }}
  >
    {typeof children === "string" ? <Text>{children}</Text> : children}
    {description ? (
      <Text
        style={{
          fontFamily: "Source Sans",
          fontWeight: "light",
          fontSize: 8.64,
          marginLeft: "0.12in",
          alignSelf: "flex-end",
          bottom: 1,
          letterSpacing: -0.35,
        }}
      >
        {description}
      </Text>
    ) : (
      <></>
    )}
  </View>
);

export default SectionDividerBordered;
