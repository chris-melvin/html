import { Text } from '@react-pdf/renderer';
import React from 'react';

const BoldText = ({
  children,
  style,
  fontSize,
  fontFamily = "Source Sans",
}) => (
  <Text style={[{ fontFamily: fontFamily, fontWeight: "bold", fontSize: fontSize }, style]}>
    {children}
  </Text>
);

export default BoldText;
