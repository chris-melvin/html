import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import CheckBoxInput from '../../../inputs/CheckBoxInput';
import FieldInput from '../../../inputs/FieldInput';
import Column from '../../../layout/Column';
import Row from '../../../layout/Row';

function MemberConsentAuthorizationPart({ isPatient = false }) {
  const title = isPatient ? 'patient' : 'member';
  const capitalisizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
  return (
    <Row>
      <Column
        style={{
          lineHeight: 0,
          letterSpacing: '-0.3',
          marginRight: '0.20in',
        }}
      >
        <Text>If member/representative is unable to write,</Text>
        <Text>put right thumbmark. Member/Representative</Text>
        <Text>should be assisted by an HCI representative.</Text>
        <Text>Check the appropriate box.</Text>
        <Row>
          <CheckBoxInput
            isSmall
            label={'Member'}
            style={{
              marginRight: 7.2,
            }}
          />
          <CheckBoxInput isSmall label={'Representative'} />
        </Row>
      </Column>
      <Column
        style={{
          marginTop: '0.08in',
          marginRight: '0.29in',
        }}
      >
        <View
          style={{
            borderWidth: '3',
            borderColor: '#000',
            width: '1.20in',
            height: '0.70in',
          }}
        />
      </Column>
      <Column>
        <Column
          style={{
            marginBottom: '0.12in',
            marginRight: '0.11in',
          }}
        >
          <Text>Relationship of the</Text>
          <Text>representative to the {title}</Text>
        </Column>
        <Column>
          <Text>Reason for signing on</Text>
          <Text>behalf of the {title}</Text>
        </Column>
      </Column>
      <Column>
        <Column>
          <Row>
            <CheckBoxInput
              isSmall
              style={{
                marginRight: '0.09in',
              }}
              label={'Spouse'}
            />
            <CheckBoxInput
              style={{
                marginRight: '0.09in',
              }}
              isSmall
              label={'Child'}
            />
            <CheckBoxInput isSmall label={'Parent'} />
          </Row>
          <Row>
            <CheckBoxInput
              label={'Sibling'}
              isSmall
              style={{
                marginTop: '0.02in',
                marginRight: '0.12in',
              }}
            />
            <CheckBoxInput
              label={'Others, Specify '}
              isSmall
              style={{
                marginTop: '0.02in',
              }}
            />
            <FieldInput width='1.04in' />
          </Row>
        </Column>
        <Column>
          <Row>
            <CheckBoxInput
              isSmall
              style={{
                marginTop: '0.02in',
              }}
              label={`${capitalisizedTitle} is incapacitated`}
            />
          </Row>
          <Row>
            <CheckBoxInput
              isSmall
              label={'Other reasons: '}
              style={{
                marginTop: '0.02in',
              }}
            />
            <FieldInput width={121} />
          </Row>
        </Column>
      </Column>
    </Row>
  );
}

export default MemberConsentAuthorizationPart;
