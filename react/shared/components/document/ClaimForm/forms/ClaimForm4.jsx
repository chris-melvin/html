import {
  Document,
  Page,
  StyleSheet,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";

import PhilHealthLogo from "../logo/philhealth_logo.png";

import { registerMinionPro, registerSourceSans } from "../../fonts";
import CheckBoxInput from "../../inputs/CheckBoxInput";
import SegmentedLineInput from "../../inputs/SegmentedLineInput";
import WideLineInput from "../../inputs/WideLineInput";
import SegmentedDateInput from "../../inputs/SegmentedDateInput";
import SegmentedTimeInput from "../../inputs/SegmentedTimeInput";
import TextInput from "../../inputs/TextInput";
import StackedBoxInput from "../../inputs/StackedBoxInput";

import Column from "../../layout/Column";
import Row from "../../layout/Row";
import BoldText from "../../typography/BoldText";
import SectionDividerBordered from "../../typography/SectionDividerBordered";
import BorderedField from "../../sections/BorderedField";
import SectionContent from "../../sections/SectionContent";
import BorderedRow from "../../sections/BorderedRow";
import BorderedCell from "../../sections/BorderedCell";
import SignatureField from "../../sections/SignatureField";

registerSourceSans();
registerMinionPro();

const styles = StyleSheet.create({
  page: {
    position: "relative",
    maxWidth: "100%",
    fontFamily: "Source Sans",
    fontWeight: 400,
    fontSize: 11.52,
  },
  body: {
    height: "100%",
    maxHeight: "100%",
    padding: "0.25in",
    fontFamily: "Source Sans",
    fontSize: 11.52,
    fontWeight: 400,
    // fontSize: 7.68,
  },

  top_header: {
    paddingBottom: "0.20in",
  },
  header_logo: {
    width: "1.40in",
    height: "0.56in",
    marginRight: "0.42in",
    marginTop: "0.42in",
    marginLeft: "0.28in",
  },
  header_right: {
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    fontFamily: "Source Sans",
    fontWeight: "bold",
    fontSize: 11.52,
  },
  bottom_header: {
    marginTop: "0.05in",
    marginLeft: "0.07in",
  },
  row: {
    marginBottom: 3,
  },
});

const ClaimForm4 = ({ values, signatures }) => (
  <Document>
    <Page
      size={{
        width: 815,
        height: 1248,
      }}
      style={styles.page}
    >
      <SignatureField
        signature={
          signatures?.find((signature) => signature?.page === 0)?.image
        }
      />
      <Column style={styles.body}>
        <Column>
          <Row style={styles.top_header}>
            <Column
              style={{
                height: "100%",
                marginRight: "auto",
              }}
            >
              <Image style={styles.header_logo} src={PhilHealthLogo} />
            </Column>
            <Column>
              <Column style={styles.header_right}>
                <Text>This form may be reproduced and is NOT FOR SALE</Text>
                <View
                  style={{
                    marginTop: -5,
                    width: "100%",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Source Sans",
                    fontWeight: "bold",
                    alignSelf: "center",
                  }}
                >
                  CF4
                </Text>
                <Text style={{ fontFamily: "Source Sans", fontWeight: "bold" }}>
                  (Claim Form 4)
                </Text>
                <Text>February 2020</Text>
              </Column>
              <Column
                style={{
                  marginTop: "0.05in",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      paddingRight: 4.32,
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Series #
                  </Text>
                  <SegmentedLineInput number={13} />
                </View>
              </Column>
            </Column>
          </Row>
          <Column style={styles.bottom_header}>
            <BoldText>IMPORTANT REMINDERS:</BoldText>
            <Row>
              <Text>
                PLEASE FILL OUT APPROPRIATE FIELDS, WRITE IN CAPITAL LETTERS AND
                CHECK THE APPROPRIATE BOXES.
              </Text>
            </Row>
            <Row>
              <Text>
                This form, together with other supporting documents, should be
                filed within{" "}
              </Text>
              <BoldText>sixty (60) calendar days</BoldText>
              <Text> from date of discharge.</Text>
            </Row>
            <Row>
              <Text>
                All information, fields and tick boxes in this form are
                necessary.{" "}
              </Text>
              <BoldText>
                Claim forms with incomplete information shall not be processed.
              </BoldText>
            </Row>
            <Row>
              <BoldText>
                FALSE / INCORRECT INFORMATION OR MISREPRESENTATION SHALL BE
                SUBJECT TO CRIMINAL, CIVIL OR ADMINISTRATIVE LIABILITIES.
              </BoldText>
            </Row>
          </Column>
        </Column>
        <SectionDividerBordered>
          I. HEALTH CARE INSTITUTION (HCI) INFORMATION
        </SectionDividerBordered>
        <SectionContent>
          <Row>
            <BorderedField label="1. Name of HCI" />
            <BorderedField label="2. Accreditation Number" disableRightBorder />
          </Row>
          <Row>
            <BorderedField label="3. Address of HCI" disableRightBorder>
              <WideLineInput
                fields={[
                  { label: "Bldg No. and Name/Lot/Block", size: 2 },
                  { label: "Street/Subdivision/Village", size: 2 },
                  { label: "Barangay/City/Municipality", size: 3 },
                  { label: "Province", size: 4 },
                  { label: "Zip Code", size: 1 },
                ]}
              />
            </BorderedField>
          </Row>
        </SectionContent>
        <SectionDividerBordered>II. PATIENT'S DATA</SectionDividerBordered>
        <SectionContent>
          <Row>
            <Column style={{ flexBasis: "65%" }}>
              <BorderedField label="1. Name of Patient">
                <WideLineInput
                  labelStyle={{ paddingBottom: 5 }}
                  fields={[
                    { label: "Last Name" },
                    { label: "First Name" },
                    { label: "Middle Name" },
                  ]}
                />
              </BorderedField>
              <BorderedField label="5. Chief Complaint" customHeight="0.36in" />
            </Column>
            <Column style={{ flexBasis: "35%" }}>
              <BorderedField label="2. PIN" disableRightBorder small />
              <BorderedField label="3. Age" disableRightBorder small />
              <BorderedField label="4. Sex" disableRightBorder small horizontal>
                <Row style={{ marginBottom: -10 }}>
                  <CheckBoxInput label="Male" style={{ marginRight: 5 }} />
                  <CheckBoxInput label="Female" />
                </Row>
              </BorderedField>
            </Column>
          </Row>
          <Row>
            <Column style={{ flexBasis: "32.5%" }}>
              <BorderedField
                label="6. Admitting Diagnosis"
                style={{ height: "0.92in" }}
              />
            </Column>
            <Column style={{ flexBasis: "32.5%" }}>
              <BorderedField
                label="7. Discharge Diagnosis"
                style={{ height: "0.92in" }}
              />
            </Column>
            <Column style={{ flexBasis: "35%" }}>
              <BorderedField
                label="8. a. 1st Case Rate Code"
                disableRightBorder
                small
              />
              <BorderedField
                label="8. b. 2nd Case Rate Code"
                disableRightBorder
                small
              />
            </Column>
          </Row>
          <Row>
            <BorderedField
              small
              horizontal
              label="9. a. Date Admitted"
              disableRightBorder
            >
              <SegmentedDateInput />
            </BorderedField>
            <BorderedField
              small
              horizontal
              label="9. b. Time Admitted"
              disableRightBorder
            >
              <Row style={{ alignItems: "center" }}>
                <SegmentedTimeInput style={{ marginRight: 10 }} />
                <CheckBoxInput label="AM" />
                <CheckBoxInput label="PM" />
              </Row>
            </BorderedField>
          </Row>
          <Row>
            <BorderedField
              small
              horizontal
              label="10. a. Date Discharged"
              disableRightBorder
            >
              <SegmentedDateInput />
            </BorderedField>
            <BorderedField
              small
              horizontal
              label="10. b. Time Discharged"
              disableRightBorder
            >
              <Row style={{ alignItems: "center" }}>
                <SegmentedTimeInput style={{ marginRight: 10 }} />
                <CheckBoxInput label="AM" />
                <CheckBoxInput label="PM" />
              </Row>
            </BorderedField>
          </Row>
        </SectionContent>
        <SectionDividerBordered>
          III. REASON FOR ADMISSION
        </SectionDividerBordered>
        <SectionContent>
          <Column>
            <BorderedField
              disableRightBorder
              label="1. History of Present Illness:"
              style={{ height: "1.4in" }}
            />
            <BorderedField
              disableRightBorder
              label="2.a. Pertinent Past Medical History:"
              style={{ height: "1in", borderBottomWidth: 0 }}
            />
            <BorderedField
              small
              disableRightBorder
              label="2.b. OB/GYN History"
              style={{ paddingBottom: 10 }}
            >
              <Row>
                <TextInput label="G" />
                <TextInput label="P" />
                <TextInput label="(" />
                <TextInput label="-" />
                <TextInput label="-" />
                <TextInput label="-" />
                <Text style={{ fontWeight: 400, marginRight: 10 }}>)</Text>
                <TextInput label="LMP:" width={100} />
                <CheckBoxInput label="NA" />
              </Row>
            </BorderedField>
            <BorderedField
              disableRightBorder
              label="3. Pertinent Signs and Symptoms on Admission (tick applicable box/es):"
              style={{ paddingBottom: 10 }}
            >
              <Row>
                <Column style={{ marginRight: 20 }}>
                  <CheckBoxInput label=" Altered mental sensorium" />
                  <CheckBoxInput label="Abdominal cramp/pain" />
                  <CheckBoxInput label="Anorexia" />
                  <CheckBoxInput label="Bleeding gums" />
                  <CheckBoxInput label="Body weakness" />
                  <CheckBoxInput label="Blurring of vision" />
                  <CheckBoxInput label="Chest pain/discomfort" />
                  <CheckBoxInput label="Constipation" />
                  <CheckBoxInput label="Cough" />
                </Column>
                <Column style={{ marginRight: 20 }}>
                  <CheckBoxInput label="Diarrhea" />
                  <CheckBoxInput label="Dizziness" />
                  <CheckBoxInput label="Dysphagia" />
                  <CheckBoxInput label="Dyspnea" />
                  <CheckBoxInput label="Dysuria" />
                  <CheckBoxInput label="Epistaxis" />
                  <CheckBoxInput label="Fever" />
                  <CheckBoxInput label="Frequency of urination" />
                  <CheckBoxInput label="Headache" />
                </Column>
                <Column style={{ marginRight: 20 }}>
                  <CheckBoxInput label="Hematemesis" />
                  <CheckBoxInput label="Hematuria" />
                  <CheckBoxInput label="Hemoptysis" />
                  <CheckBoxInput label="Irritability" />
                  <CheckBoxInput label="Jaundice" />
                  <CheckBoxInput label="Lower extremity edema" />
                  <CheckBoxInput label="Myalgia" />
                  <CheckBoxInput label="Orthopnea" />
                  <CheckBoxInput label="Pain,________________(site)" />
                </Column>
                <Column>
                  <CheckBoxInput label="Palpitations" />
                  <CheckBoxInput label="Seizures" />
                  <CheckBoxInput label="Skin rashes" />
                  <CheckBoxInput label="Stool, bloody/black tarry/mucoid" />
                  <CheckBoxInput label="Sweating" />
                  <CheckBoxInput label="Urgency" />
                  <CheckBoxInput label="Vomiting" />
                  <CheckBoxInput label="Weight loss" />
                  <CheckBoxInput>
                    <Text style={{ fontWeight: 400 }}>Others</Text>
                    <TextInput width={150} />
                  </CheckBoxInput>
                </Column>
              </Row>
            </BorderedField>
            <BorderedField
              label="4. Referred from another health care institution (HCI):"
              horizontal
              disableRightBorder
              style={{ paddingTop: 5 }}
            >
              <Row>
                <CheckBoxInput label="No" />
                <CheckBoxInput>
                  <Column>
                    <Row style={{ paddingBottom: 5 }}>
                      <Text style={{ fontWeight: 400, marginRight: 5 }}>
                        Yes, Specify Reason
                      </Text>
                      <TextInput width={200} />
                    </Row>
                    <Row>
                      <Text style={{ fontWeight: 400, marginRight: 5 }}>
                        Name of Originating HCI
                      </Text>
                      <TextInput width={180} />
                    </Row>
                  </Column>
                </CheckBoxInput>
              </Row>
            </BorderedField>
            <BorderedField
              label="5. Physical  Examination  on Admission  (Pertinent  Findings  per  System)"
              disableRightBorder
            >
              <Row style={styles.row}>
                <Column style={{ width: "15%" }}>
                  <Text style={{ fontWeight: 400 }}>General Survey</Text>
                </Column>
                <Column style={{ width: "20%" }}>
                  <CheckBoxInput label="Awake and Alert" />
                </Column>
                <Column>
                  <CheckBoxInput>
                    <TextInput label="Altered sensorium" width={180} />
                  </CheckBoxInput>
                </Column>
                <Column
                  style={{
                    float: "right",
                    borderColor: "black",
                    borderWidth: 1,
                    padding: 10,
                  }}
                >
                  <Row>
                    <TextInput label="Height:" width={50} />
                    <Text style={{ fontWeight: 400 }}>(cm)</Text>
                  </Row>
                  <Row>
                    <TextInput label="Weight:" width={50} />
                    <Text style={{ fontWeight: 400 }}>(kg)</Text>
                  </Row>
                </Column>
              </Row>
              <Row style={styles.row}>
                <Column style={{ width: "15%" }}>
                  <Text style={{ fontWeight: 400 }}>Vital Signs</Text>
                </Column>
                <Column style={{ width: "20%" }}>
                  <TextInput label="BP:" width={100} />
                </Column>
                <Column>
                  <Row>
                    <TextInput label="HR:" width={100} />
                    <TextInput label="RR:" width={100} />
                    <TextInput label="Temp:" width={100} />
                  </Row>
                </Column>
              </Row>
              <Row style={styles.row}>
                <Column style={{ width: "15%" }}>
                  <Text style={{ fontWeight: 400 }}>HEENT:</Text>
                </Column>
                <Column style={{ width: "21.25%" }}>
                  <CheckBoxInput label="Essentially normal" />
                  <CheckBoxInput label="Icteric sclerae" />
                </Column>
                <Column style={{ width: "21.25%" }}>
                  <CheckBoxInput label="Abnormal pupillary reaction" />
                  <CheckBoxInput label="Pale conjunctivae" />
                </Column>
                <Column style={{ width: "21.25%" }}>
                  <CheckBoxInput label="Cervical lymphadenopathy" />
                  <CheckBoxInput label="Sunken eyeballs" />
                </Column>
                <Column style={{ width: "21.25%" }}>
                  <CheckBoxInput label="Dry mucous membrane" />
                  <CheckBoxInput label="Sunken fontanelle" />
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "15%" }} />
                <Column>
                  <TextInput label="Others:" width={160} />
                </Column>
              </Row>
            </BorderedField>
          </Column>
        </SectionContent>
      </Column>
    </Page>
    <Page
      size={{
        width: 815,
        height: 1248,
      }}
      style={styles.page}
    >
      <SignatureField
        signature={
          signatures?.find((signature) => signature?.page === 1)?.image
        }
      />
      <Column style={styles.body}>
        <SectionContent style={{ borderTopWidth: 1 }}>
          <BorderedField
            label="5. Physical Examination continued (Pertinent Findings per System)"
            style={{ paddingBottom: 5 }}
            disableRightBorder
          >
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>CHEST/LUNGS:</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
                <CheckBoxInput label="Lump/s over breast(s)" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Asymmetrical chest expansion" />
                <CheckBoxInput label="Rales/crackles/rhonchi" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Decreased breath sounds" />
                <CheckBoxInput label="Intercostal rib/clavicular retraction" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Wheezes" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>CVS:</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
                <CheckBoxInput label="Irregular rhythm" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Displaced apex beat" />
                <CheckBoxInput label="Muffled heart sounds" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Heaves and/or thrills" />
                <CheckBoxInput label="Murmur" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Pericardial bulge" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>ABDOMEN:</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
                <CheckBoxInput label="Palpable mass(es)" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Abdominal rigidity" />
                <CheckBoxInput label="Tympanitic/dull abdomen" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Abdomen tenderness" />
                <CheckBoxInput label="Uterine contraction" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Hyperactive bowel sounds" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>GU (IE):</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Blood stained in exam finger" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Cervical dilation" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Presence of abnormal discharge" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>SKIN/EXTREMITIES:</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
                <CheckBoxInput label="Edema/swelling" />
                <CheckBoxInput label="Rashes/petechiae" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Clubbing" />
                <CheckBoxInput label="Decreased mobility" />
                <CheckBoxInput label="Weak pulses" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Cold clammy skin" />
                <CheckBoxInput label="Pale nailbeds" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Cyanosis/mottled skin" />
                <CheckBoxInput label="Poor skin turgor" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }}>
                <Text style={{ fontWeight: 400 }}>NEURO-EXAM:</Text>
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Essentially normal" />
                <CheckBoxInput label="Abnormal reflex(es)" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Abnormal gait" />
                <CheckBoxInput label="Poor/altered memory" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Abnormal position sense" />
                <CheckBoxInput label="Poor muscle tone/strength" />
              </Column>
              <Column style={{ width: "21.25%" }}>
                <CheckBoxInput label="Abnormal/decreased sensation" />
                <CheckBoxInput label="Poor coordination" />
              </Column>
            </Row>
            <Row style={styles.row}>
              <Column style={{ width: "15%" }} />
              <Column>
                <TextInput label="Others:" width={160} />
              </Column>
            </Row>
          </BorderedField>
        </SectionContent>
        <SectionDividerBordered>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ marginRight: 5 }}>
              IV. COURSE IN THE WARD (Attach photocopy of laboratory/imaging
              results)
            </Text>
            <CheckBoxInput label="Check box if there is/are additional sheet(s)." />
          </Row>
        </SectionDividerBordered>
        <SectionContent>
          <Column>
            <BorderedRow>
              <BorderedCell style={{ width: "20%" }}>
                <Text>Date</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "80%" }} disableRightBorder>
                <Text>DOCTOR'S ORDER/ACTION</Text>
              </BorderedCell>
            </BorderedRow>
            {[...Array(15)].map((cell) => (
              <BorderedRow>
                <BorderedCell style={{ width: "20%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "80%" }} disableRightBorder>
                  <Text> </Text>
                </BorderedCell>
              </BorderedRow>
            ))}
            <BorderedField disableRightBorder>
              <Text style={{ fontWeight: 400 }}>
                SURGICAL PROCEDURE/RVS CODE (Attach photocopy of OR technique):
              </Text>
            </BorderedField>
          </Column>
        </SectionContent>
        <SectionDividerBordered>
          <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ marginRight: 5 }}>V. DRUGS/MEDICINES</Text>
            <CheckBoxInput label="Check box if there is/are additional sheet(s)." />
          </Row>
        </SectionDividerBordered>
        <SectionContent>
          <Column>
            <BorderedRow>
              <BorderedCell style={{ width: "15%" }}>
                <Text>Generic Name</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "22%" }}>
                <Text>Quantity/Dosage/Route/Frequency</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "11%" }}>
                <Text>Total Cost</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "15%" }}>
                <Text>Generic Name (cont)</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "22%" }}>
                <Text>Quantity/Dosage/Route/Frequency (cont)</Text>
              </BorderedCell>
              <BorderedCell style={{ width: "15%" }} disableRightBorder>
                <Text>Total Cost (cont)</Text>
              </BorderedCell>
            </BorderedRow>
            {[...Array(7)].map((cell) => (
              <BorderedRow>
                <BorderedCell style={{ width: "15%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "22%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "11%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "15%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "22%" }}>
                  <Text> </Text>
                </BorderedCell>
                <BorderedCell style={{ width: "15%" }} disableRightBorder>
                  <Text> </Text>
                </BorderedCell>
              </BorderedRow>
            ))}
          </Column>
        </SectionContent>
        <SectionDividerBordered>
          VI. OUTCOME OF TREATMENT
        </SectionDividerBordered>
        <SectionContent>
          <BorderedField disableRightBorder>
            <Row style={{ paddingTop: 5, paddingBottom: 3 }}>
              <CheckBoxInput label="IMPROVED" />
              <CheckBoxInput label="RECOVERED" />
              <CheckBoxInput label="HAMA/DAMA" />
              <CheckBoxInput label="EXPIRED" />
              <CheckBoxInput label="ABSCONDED" />
              <CheckBoxInput label="TRANSFERRED" />
              <TextInput
                label="Specify reason:"
                width={100}
                style={{ fontWeight: 400 }}
              />
            </Row>
          </BorderedField>
        </SectionContent>
        <SectionDividerBordered>
          VII. CERTIFICATION OF HEALTH CARE PROFESSIONAL
        </SectionDividerBordered>
        <SectionContent style={{ fontSize: 11.52 }}>
          <BorderedField disableRightBorder style={{ fontWeight: 400 }}>
            <Column style={styles.part_five_section}>
              <Text style={{ marginBottom: 5 }}>
                Certification of Attending Health Care Professional:
              </Text>
              <Text
                style={{
                  fontFamily: "Source Sans",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
              >
                I certify that the above information given in this form,
                including all attachments, are true and correct.
              </Text>
              <Row
                style={{
                  justifyContent: "flex-start",
                  alignItems: "space-between",
                  marginTop: "0.2in",
                }}
              >
                <Column
                  style={{
                    paddingLeft: "0.5in",
                    width: "60%",
                    marginHorizontal: "auto",
                  }}
                >
                  <StackedBoxInput
                    upperText=""
                    lowerText="Signature over Printed Name of Attending Health Care Professional"
                    boxWidth="4.6in"
                  />
                </Column>
                <Column style={{ width: "40%", alignItems: "center" }}>
                  <SegmentedDateInput />
                  <Text style={{ fontSize: 10, textAlign: "center" }}>
                    Date Signed
                  </Text>
                </Column>
              </Row>
            </Column>
          </BorderedField>
        </SectionContent>
      </Column>
    </Page>
  </Document>
);

export default ClaimForm4;
