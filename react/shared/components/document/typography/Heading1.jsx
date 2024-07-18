import { Text } from '@react-pdf/renderer';
import React from 'react';

function Heading1({ children, style, fontSize = 10 }) {
  return (
    <Text
      style={[
        {
          fontSize: fontSize,
          fontFamily: "Source Sans",
          fontWeight: "bold",
          letterSpacing: '0',
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export default Heading1;
