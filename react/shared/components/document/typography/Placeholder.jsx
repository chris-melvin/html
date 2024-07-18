import { Text } from "@react-pdf/renderer";
import React from "react";

const Placeholder = ({ children, style, fontSize = 11, fontFamily = "Source Sans" }) => (
  <Text style={[{ fontFamily, color: "#808080", fontSize }, style]}>{children}</Text>
);

export default Placeholder;
