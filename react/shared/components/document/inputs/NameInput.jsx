import React from 'react';
import Row from '../layout/Row';
import FieldInput from './FieldInput';

function NameInput({ style, debug }) {
  return (
    <Row style={style} debug={debug}>
      <FieldInput
        label={'Last Name'}
        style={{ marginRight: '0.16in' }}
        width='1.38in'
      />
      <FieldInput
        label={'First Name'}
        style={{ marginRight: '0.16in' }}
        width='1.38in'
      />
      <FieldInput
        label={'Name Extension'}
        style={{ marginRight: '0.16in' }}
        width='1.38in'
        description={'(JR/SR/III)'}
      />
      <FieldInput
        label={'Middle Name'}
        style={{ width: 83.52 }}
        width='1.13in'
        description={'(ex: DELA CRUZ JUAN JR)'}
      />
    </Row>
  );
}

export default NameInput;
