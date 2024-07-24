import {
    Document,
    Image,
    Page,
    StyleSheet,
    Text,
    View,
  } from '@react-pdf/renderer';
  import React from 'react';
  import PhilHealthHeaderPart from '../document-parts/PhilHealthHeader';
  import AddressInput from '../inputs/AddressInput';
  import BoxTextInput from '../inputs/BoxTextInput';
  import BoxInput from '../inputs/BoxInput';
  import CheckBoxInput from '../inputs/CheckBoxInput';
  import FieldInput from '../inputs/FieldInput';
  import SegmentedDateInput from '../inputs/SegmentedDateInput';
  import SegmentedLineInput from '../inputs/SegmentedLineInput';
  import SegmentedTimeInput from '../inputs/SegmentedTimeInput';
  import StackedLines from '../inputs/StackedLines';
  import Column from '../layout/Column';
  import Row from '../layout/Row';
  import BoldText from '../typography/BoldText';
  import Heading1 from '../typography/Heading1';
  import SectionDivider from '../typography/SectionDivider';
  import { registerMinionPro, registerSourceSans } from "components/document/fonts";

  import PhilHealthLogo from "assets/images/philhealth_logo-wide.png";

  
  const DEFAULT_LETTER_SPACING = -0.35;

registerSourceSans();
registerMinionPro();
  
  const styles = StyleSheet.create({
    page: {
      maxWidth: '100%',
      padding: '0.25in',
    },
  
    body: {
      borderWidth: 3,
      borderColor: '#000',
      borderStyle: 'solid',
      height: '100%',
      maxHeight: '100%',
      fontFamily: 'Source Sans',
      fontSize: 8.64,
      // fontSize: 7.68,
    },
  
    top_header: {
      borderBottom: '1.5 #000 solid',
      paddingBottom: '0.20in',
    },
    header_logo: {
      width: '1.40in',
      height: '0.56in',
      marginRight: '0.42in',
      marginTop: '0.42in',
      marginLeft: '0.28in',
    },
    header_right: {
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Source Sans',
    },
    bottom_header: {
      marginTop: '0.05in',
      marginLeft: '0.07in',
      letterSpacing: DEFAULT_LETTER_SPACING,
    },
    part_one_section: {
      margin: '0.07in',
      marginTop: 0,
      letterSpacing: DEFAULT_LETTER_SPACING,
    },
    part_two_section: {
      letterSpacing: DEFAULT_LETTER_SPACING,
    },
    part_three_section: {
      letterSpacing: DEFAULT_LETTER_SPACING,
    },
    part_four_section: {
      letterSpacing: DEFAULT_LETTER_SPACING,
    },
    part_five_section: {
      letterSpacing: DEFAULT_LETTER_SPACING,
      marginTop: '0.10in',
      marginLeft: '0.28in',
    },
  });
  
  function CF2() {
    return (
      <Document>
        <Page
          size={{
            width: 612,
            height: 936,
          }}
          style={styles.page}
        >
          <Column style={styles.body}>
            <Row style={styles.top_header}>
              <Column
                style={{
                  height: '100%',
                }}
              >
                <Image
                  style={styles.header_logo}
                  src={PhilHealthLogo}
                />
              </Column>
              <PhilHealthHeaderPart
                style={{
                  marginRight: '0.40in',
                  marginTop: '0.35in',
                }}
              />
              <Column>
                <Column style={styles.header_right}>
                  <Text>This form may be reproduced and</Text>
                  <Text>is NOT FOR SALE</Text>
                  <View
                    style={{
                      height: '0.50in',
                      width: '100%',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  ></View>
                  <Text
                    style={{
                      position: 'absolute',
                      fontSize: 38,
                      fontFamily: 'Source Sans',
                      alignSelf: 'center',
                      top: '0.25in',
                    }}
                  >
                    CF-2
                  </Text>
                  <Text style={{ fontFamily: 'Source Sans' }}>
                    (Claim Form 2)
                  </Text>
                  <Text>Revised September 2018</Text>
                </Column>
                <Column
                  style={{
                    marginTop: '0.05in',
                  }}
                >
                  <View
                    style={{
                      right: 0,
                      position: 'absolute',
                      flexDirection: 'row',
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: 'center',
                        paddingRight: 4.32,
                      }}
                    >
                      Series #
                    </Text>
                    <BoxInput number={10} />
                  </View>
                </Column>
              </Column>
            </Row>
            <Column style={styles.bottom_header}>
              <BoldText>IMPORTANT REMINDERS:</BoldText>
              <Row>
                <Text>PLEASE WRITE IN CAPITAL </Text>
                <BoldText>LETTERS </BoldText>
                <Text>AND </Text>
                <BoldText>CHECK </BoldText>
                <Text>THE APPROPRIATE BOXES.</Text>
              </Row>
  
              <Text>
                This form together with other supporting documents should be filed
                within sixty (60) calendar days from date of discharge.
              </Text>
              <Text>
                All information, fields and trick boxes required in this form are
                necessary. Claim forms with incomplete information
              </Text>
              <BoldText>
                FALSE/INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE SUBJECT
                TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
              </BoldText>
            </Column>
            <SectionDivider
              text={'PART I - HEALTH CARE INSTITUTION (HCI) INFORMATION'}
            />
            <Column style={styles.part_one_section}>
              <Row>
                <Heading1
                  style={{
                    marginRight: '0.20in',
                  }}
                >
                  1. PhilHealth Accreditation Number (PAN) of Health Care
                  Institution:
                </Heading1>
                <SegmentedLineInput number={9} />
              </Row>
              <Row>
                <Heading1
                  style={{
                    marginRight: '0.04in',
                  }}
                >
                  2. Name of Health Care Institution:
                </Heading1>
                <FieldInput width='5.60in' />
              </Row>
              <Row
                style={
                  {
                    // marginBottom: '0.11in',
                  }
                }
              >
                <Heading1
                  style={{
                    marginRight: '0.19in',
                  }}
                >
                  3. Address:
                </Heading1>
                <FieldInput
                  style={{
                    marginRight: '0.15in',
                  }}
                  width='2.86in'
                  label='Building Number and Street Name'
                />
                <FieldInput
                  style={{
                    marginRight: '0.15in',
                  }}
                  width='2in'
                  label='City/Municipality'
                />
                <FieldInput width='1.73in' label='Province' />
              </Row>
            </Column>
            <SectionDivider text={'PART II - PATIENT CONFINEMENT INFORMATION'} />
            <Column style={styles.part_two_section}>
              <Row
                style={{
                  borderBottom: '1.5 #000 solid',
                }}
              >
                <Column
                  style={{
                    margin: '0.07in',
                    marginTop: 0,
                  }}
                >
                  <Row>
                    <Heading1
                      style={{
                        marginRight: '0.28in',
                      }}
                    >
                      1. Name of Patient:
                    </Heading1>
                    <Row>
                      <FieldInput
                        label={'Last Name'}
                        style={{ marginRight: '0.16in' }}
                        width='1.50in'
                      />
                      <FieldInput
                        label={'First Name'}
                        style={{ marginRight: '0.12in' }}
                        width='1.66in'
                      />
                      <FieldInput
                        label={'Name Extension'}
                        style={{ marginRight: '0.16in' }}
                        width='1.12in'
                        description={'(JR/SR/III)'}
                      />
                      <FieldInput
                        label={'Middle Name'}
                        width='1.59in'
                        description={'(ex: DELA CRUZ JUAN JR SIPAG)'}
                      />
                    </Row>
                  </Row>
                  <Heading1>
                    2. Was patient referred by another Health Care Institution
                    (HCI)?
                  </Heading1>
                  <Row
                    style={{
                      marginLeft: '0.12in',
                    }}
                  >
                    <CheckBoxInput
                      isSmall
                      label={'NO'}
                      style={{
                        marginRight: '0.11in',
                      }}
                      debug
                    />
                    <CheckBoxInput
                      isSmall
                      label={'YES'}
                      style={{
                        marginRight: '0.11in',
                      }}
                    />
                    <FieldInput
                      label={'Name of referring Health Care Institution'}
                      width='2.06in'
                      style={{
                        marginRight: '0.18in',
                      }}
                    />
                    <AddressInput />
                  </Row>
                  <Row>
                    <Heading1
                      style={{
                        marginRight: '0.23in',
                      }}
                    >
                      3. Confinement Period:
                    </Heading1>
                    <Column>
                      <Row>
                        <SegmentedDateInput
                          label={'a. Date Admitted'}
                          style={{
                            marginRight: '0.23in',
                          }}
                        />
                        <SegmentedTimeInput
                          label={'b. Time Admitted'}
                          style={{
                            marginRight: '0.23in',
                          }}
                        />
                        <CheckBoxInput
                          label={'AM'}
                          isSmall
                          style={{
                            marginRight: '0.18in',
                          }}
                        />
                        <CheckBoxInput
                          label={'PM'}
                          isSmall
                          style={{
                            marginRight: '0.24in',
                          }}
                        />
                      </Row>
                      <Row>
                        <SegmentedDateInput
                          label={'c. Date Discharge'}
                          style={{
                            marginRight: '0.20in',
                          }}
                        />
                        <SegmentedTimeInput
                          label={'d. Time Discharge'}
                          style={{
                            marginRight: '0.23in',
                          }}
                        />
                        <CheckBoxInput
                          label={'AM'}
                          isSmall
                          style={{
                            marginRight: '0.18in',
                          }}
                        />
                        <CheckBoxInput
                          label={'PM'}
                          isSmall
                          style={{
                            marginRight: '0.24in',
                          }}
                        />
                      </Row>
                    </Column>
                  </Row>
                  <Row>
                    <Heading1>4. Patient Disposition: </Heading1>
                    <Text>(select only 1)</Text>
                  </Row>
                  <Column
                    style={{
                      marginLeft: '0.13in',
                    }}
                  >
                    <Row>
                      <CheckBoxInput
                        label={'a. Improved'}
                        boxMarginRight='0.22in'
                        isSmall
                        style={{
                          marginRight: '1.28in',
                        }}
                      />
                      <CheckBoxInput
                        label={'e. Expired'}
                        boxMarginRight='0.18in'
                        isSmall
                        style={{
                          marginRight: '0.19in',
                        }}
                      />
                      <SegmentedDateInput
                        style={{
                          marginRight: '0.20in',
                        }}
                      />
                      <SegmentedTimeInput
                        label={'Time: '}
                        style={{
                          marginRight: '0.24in',
                        }}
                      />
                      <CheckBoxInput
                        label={'AM'}
                        isSmall
                        style={{
                          marginRight: '0.18in',
                        }}
                      />
                      <CheckBoxInput
                        label={'PM'}
                        isSmall
                        style={{
                          marginRight: '0.24in',
                        }}
                      />
                    </Row>
                    <Row>
                      <CheckBoxInput
                        label={'b. Recovered'}
                        boxMarginRight='0.22in'
                        isSmall
                        style={{
                          marginRight: '1.24in',
                        }}
                      />
                      <CheckBoxInput
                        label={'f. Transferred/Referred'}
                        isSmall
                        boxMarginRight='0.22in'
                        style={{
                          marginRight: '0.08in',
                        }}
                      />
                      <FieldInput width='4.0in' debug />
                    </Row>
                    <Row>
                      <CheckBoxInput
                        label={'c. Home/Discharged Against Medical Advise'}
                        isSmall
                        boxMarginRight='0.22in'
                        style={{
                          marginRight: '0.90in',
                        }}
                      />
                      <AddressInput />
                    </Row>
                    <Row>
                      <CheckBoxInput
                        label={'d. Absconded'}
                        isSmall
                        boxMarginRight='0.23in'
                        style={{
                          marginRight: '1.67in',
                        }}
                      />
                      <Text
                        style={{
                          marginRight: '0.08in',
                        }}
                      >
                        Reason/s for referral/transfer:
                      </Text>
                      <FieldInput width='3.63in' debug />
                    </Row>
                  </Column>
                  <Row>
                    <Heading1
                      style={{
                        marginRight: '0.20in',
                      }}
                    >
                      5. Type of Accomodation:
                    </Heading1>
                    <CheckBoxInput
                      label='Private'
                      isSmall
                      style={{
                        marginRight: '0.18in',
                      }}
                      boxMarginRight='0.13in'
                    />
                    <CheckBoxInput
                      isSmall
                      label='Non-Private (Charity/Service)'
                      boxMarginRight='0.13in'
                    />
                  </Row>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: '1.5 #000 solid',
                }}
              >
                <Column
                  style={{
                    marginHorizontal: '0.07in',
                    marginTop: 0,
                    height: '0.50in',
                  }}
                >
                  <Heading1>6. Admission Diagnosis/es: </Heading1>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: '1.5 #000 solid',
                }}
              >
                <Column
                  style={{
                    margin: '0.07in',
                    marginTop: 0,
                  }}
                >
                  <Row
                    style={{
                      alignItems: 'center',
                    }}
                  >
                    <Heading1
                      style={{
                        marginRight: '0.04in',
                      }}
                    >
                      7. Discharge Diagnosis/es
                    </Heading1>
                    <Text>(Use additional CF2 if necessary):</Text>
                  </Row>
                  <Row
                    style={{
                      marginLeft: '0.20in',
                    }}
                  >
                    <Column
                      style={{
                        marginRight: '0.17in',
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: '0.29in',
                        }}
                      >
                        Diagnosis
                      </Text>
                      <Row>
                        <Column
                          style={{
                            marginRight: '0.09in',
                          }}
                        >
                          <Text style={{ marginBottom: '0.25in' }}>a.</Text>
                          <Text>b.</Text>
                        </Column>
                        <Column>
                          <StackedLines numLines={6} />
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.17in',
                      }}
                    >
                      <Text
                        style={{
                          marginLeft: '0.10in',
                        }}
                      >
                        ICD-10 Code/s
                      </Text>
                      <StackedLines numLines={6} />
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.17in',
                      }}
                    >
                      <Text style={{}}>
                        Related Procedure/s (if there’s any) RVS Code
                      </Text>
                      <Row>
                        <Column
                          style={{
                            marginRight: '0.05in',
                          }}
                        >
                          <Text>i.</Text>
                          <Text>ii.</Text>
                          <Text>iii.</Text>
                          <Text>i.</Text>
                          <Text>ii.</Text>
                          <Text>iii.</Text>
                        </Column>
                        <Column>
                          <StackedLines numLines={6} lineWidth='1.60in' />
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.17in',
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: 'center',
                        }}
                      >
                        RVS Code
                      </Text>
                      <Column>
                        <StackedLines numLines={6} lineWidth='0.84in' />
                      </Column>
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.21in',
                      }}
                    >
                      <Text
                        style={{
                          alignSelf: 'center',
                        }}
                      >
                        Date of Procedure
                      </Text>
                      <Column>
                        <StackedLines numLines={6} lineWidth='0.88in' />
                      </Column>
                    </Column>
                    <Column>
                      <Text
                        style={{
                          alignSelf: 'center',
                        }}
                      >
                        Laterality (check applicable box)
                      </Text>
                      <Column>
                        <Row>
                          <Column
                            style={{
                              marginRight: '0.10in',
                            }}
                          >
                            <CheckBoxInput isSmall label='left' />
                            <CheckBoxInput isSmall label='left' />
                            <CheckBoxInput isSmall label='left' />
                            <CheckBoxInput isSmall label='left' />
                            <CheckBoxInput isSmall label='left' />
                            <CheckBoxInput isSmall label='left' />
                          </Column>
                          <Column
                            style={{
                              marginRight: '0.10in',
                            }}
                          >
                            <CheckBoxInput isSmall label='right' />
                            <CheckBoxInput isSmall label='right' />
                            <CheckBoxInput isSmall label='right' />
                            <CheckBoxInput isSmall label='right' />
                            <CheckBoxInput isSmall label='right' />
                            <CheckBoxInput isSmall label='right' />
                          </Column>
                          <Column>
                            <CheckBoxInput isSmall label='both' />
                            <CheckBoxInput isSmall label='both' />
                            <CheckBoxInput isSmall label='both' />
                            <CheckBoxInput isSmall label='both' />
                            <CheckBoxInput isSmall label='both' />
                            <CheckBoxInput isSmall label='left' />
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: '1.5 #000 solid',
                }}
              >
                <Column
                  style={{
                    marginHorizontal: '0.07in',
                    marginTop: 0,
                  }}
                >
                  <Heading1>8. Special Considerations:</Heading1>
                </Column>
              </Row>
              <Row
                style={{
                  borderBottom: '1.5 #000 solid',
                }}
              >
                <Column
                  style={{
                    margin: '0.07in',
                    marginRight: 0,
                    marginTop: 0,
                  }}
                >
                  <Row>
                    <Text>
                      a. For the following repetitive procedures, check box that
                      applies and enumerate the procedure/sessions dates
                      [mm-dd-yyyy]. For chemotherapy, see guidelines
                    </Text>
                  </Row>
                  <Row
                    style={{
                      marginLeft: '0.32in',
                    }}
                  >
                    <Column
                      style={{
                        marginRight: '0.20in',
                      }}
                    >
                      <CheckBoxInput isSmall label={'Hemodialysis'} />
                      <CheckBoxInput isSmall label={'Peritoneal Dialysis'} />
                      <CheckBoxInput isSmall label={'Radiotherapy (LINAC)'} />
                      <CheckBoxInput isSmall label={'Radiotherapy (COBALT)'} />
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.20in',
                      }}
                    >
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.20in',
                      }}
                    >
                      <CheckBoxInput isSmall label={'Blood Transfusion'} />
                      <CheckBoxInput isSmall label={'Brachytherapy'} />
                      <CheckBoxInput isSmall label={'Chemotherapy'} />
                      <CheckBoxInput isSmall label={'Simple Debridement'} />
                    </Column>
                    <Column
                      style={{
                        marginRight: '0.20in',
                      }}
                    >
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                      <FieldInput
                        width={'2.05in'}
                        style={{
                          height: '0.17in',
                        }}
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Text
                      style={{
                        marginRight: '1.15in',
                      }}
                    >
                      b. For Z-Benefit Package
                    </Text>
                    <Heading1 fontSize={8.64} style={{ marginRight: '0.09in' }}>
                      Z-Benefit Package Code:
                    </Heading1>
                    <FieldInput width={'2.21in'} />
                  </Row>
                  <Row>
                    <Column>
                      <Text>
                        c. For MCP Package (enumerate four dates [mm-dd-year] of
                        pre-natal check-ups)
                      </Text>
                      <Row>
                        <Text
                          style={{
                            marginLeft: '0.08in',
                            marginRight: '0.08in',
                          }}
                        >
                          1
                        </Text>
                        <FieldInput
                          width={'1.80in'}
                          style={{
                            marginRight: '0.17in',
                          }}
                        />
                        <Text
                          style={{
                            marginRight: '0.05in',
                          }}
                        >
                          2
                        </Text>
                        <FieldInput
                          width={'1.64in'}
                          style={{
                            marginRight: '0.10in',
                          }}
                        />
                        <Text
                          style={{
                            marginRight: '0.04in',
                          }}
                        >
                          3
                        </Text>
                        <FieldInput
                          width={'1.50in'}
                          style={{
                            marginRight: '0.10in',
                          }}
                        />
                        <Text
                          style={{
                            marginRight: '0.08in',
                          }}
                        >
                          4
                        </Text>
                        <FieldInput width={'1.77in'} />
                      </Row>
                    </Column>
                  </Row>
                  <Row>
                    <Text>d. For TB DOTS Package</Text>
                    <CheckBoxInput isSmall label={'Intensive Phase'} />
                    <CheckBoxInput isSmall label={'Maintenance Phase'} />
                  </Row>
                  <Row>
                    <Column>
                      <Row>
                        <Text>
                          e. For Animal Bite Package (write the dates [mm-dd-year]
                          when the following doses of vaccine were given)
                        </Text>
                        <BoxTextInput>
                          <Heading1 fontSize={8.64}>
                            Note: Anti Rabies Vaccine (ARV), Rabies Immunoglobulin
                            (RIG)
                          </Heading1>
                        </BoxTextInput>
                      </Row>
  
                      <Row>
                        <Heading1 fontSize={8.64}>Day 0 ARV</Heading1>
                        <FieldInput />
                        <Heading1 fontSize={8.64}>Day 3 ARV</Heading1>
                        <FieldInput />
                        <Heading1 fontSize={8.64}>Day 7 ARV</Heading1>
                        <FieldInput />
                        <Heading1 fontSize={8.64}>RIG</Heading1>
                        <FieldInput />
                        <Heading1 fontSize={8.64}>Others (Specify)</Heading1>
                        <FieldInput />
                      </Row>
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      <Row>
                        <Text>f. For Newborn Care Package</Text>
                        <CheckBoxInput isSmall label={'Essential Newborn Care'} />
                        <CheckBoxInput isSmall label={'Newborn Hearing Screening Test'} />
                        <CheckBoxInput isSmall label={'Newborn Screening Test'} />
                        <CheckBoxInput isSmall label={'Newborn Screening Test'} />
                      </Row>
                      <BoxTextInput>
                        <Row>
                          <Heading1 fontSize={8.64}>
                            For Essential Newborn Care
                          </Heading1>
                          <Text>(check applicable boxes)</Text>
                        </Row>
                      </BoxTextInput>
                    </Column>
  
                    <BoxTextInput>
                      <Text
                        style={{
                          marginBottom: '0.09',
                        }}
                      >
                        For Newborn Screening
                      </Text>
                      <Text>please attach NBS Filter Sticker here</Text>
                    </BoxTextInput>
                  </Row>
                  <Row>
                    <Column>
                      <CheckBoxInput isSmall label={'Immediate drying of newborn'} />
                      <CheckBoxInput isSmall label={'Early skin-to-skin contact'} />
                    </Column>
                    <Column>
                      <CheckBoxInput isSmall label={'Timely cord clamping'} />
                      <CheckBoxInput isSmall label={'Eye Prophylaxis'} />
                    </Column>
                    <Column>
                      <CheckBoxInput isSmall label={'Weighing of the newborn'} />
                      <CheckBoxInput isSmall label={'Vitamin K administration'} />
                    </Column>
                    <Column>
                      <Row>
                        <CheckBoxInput isSmall label={'BCG vaccination'} />
                        <CheckBoxInput isSmall label={'Hepatitis B vaccination'} />
                      </Row>
                      <CheckBoxInput
                        isSmall
                        label={
                          'Non-separation of mother/baby for early breastfeeding initiation'
                        }
                      />
                    </Column>
                  </Row>
                  <Row>
                    <Text>g. For Outpatient HIV/AIDS Treatment Package</Text>
                    <Heading1 fontSize={8.64}>Laboratory Number:</Heading1>
                    <FieldInput />
                  </Row>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Heading1>9. PhilHealth Benefits:</Heading1>
                  <Row>
                    <Heading1 fontSize={8.64}>ICD 10 or RVS Code:</Heading1>
                    <Text>a. First Case Rate</Text>
                    <FieldInput /> <Text>2. Second Case Rate</Text>
                    <FieldInput />
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
        </Page>
      </Document>
    );
  }
  
  export default CF2;
  