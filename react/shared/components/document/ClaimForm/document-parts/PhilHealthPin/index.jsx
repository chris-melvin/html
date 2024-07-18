import React from 'react';
import BoxInput from '../../../inputs/BoxInput';
import Row from '../../../layout/Row';
import Dash from '../../../typography/Dash';
import Heading1 from '../../../typography/Heading1';

function PhilHealthPinPart({ label, style }) {
  return (
    <Row
      style={[
        {
          margin: 0,
        },
        style,
      ]}
    >
      <Heading1>{label}</Heading1>
      <BoxInput
        style={{
          marginLeft: 5,
        }}
        number={2}
      />
      <Dash />
      <BoxInput number={9} />
      <Dash />
      <BoxInput number={1} />
    </Row>
  );
}

export default PhilHealthPinPart;
