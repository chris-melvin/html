import { Text } from '@react-pdf/renderer';
import React from 'react';

function Dash() {
  return (
    <Text
      style={{
        fontFamily: 'Helvetica',
        fontSize: 12,
        marginHorizontal: 1,
        bottom: 2,
        textAlign: 'center',
      }}
    >
      -
    </Text>
  );
}

export default Dash;
