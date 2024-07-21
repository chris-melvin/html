import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import logo from "../../shared/components/document/ClaimForm/logo/philhealth_logo.png";
import Column from "./layout/Column";
import Row from "./layout/Row";
import BoxInput from "../../shared/components/document/inputs/BoxInput";
import CheckBoxInput from "../../shared/components/document/inputs/CheckBoxInput";
import DateInput from "../../shared/components/document/inputs/DateInput";
import DateSlashInput from "../../shared/components/document/inputs/DateSlashInput";
import FieldInput from "../../shared/components/document/inputs/FieldInput";
import NameInput from "../../shared/components/document/inputs/NameInput";
import SegmentedDateInput from "../../shared/components/document/inputs/SegmentedDateInput";
import SegmentedTimeInput from "../../shared/components/document/inputs/SegmentedTimeInput";
import StackedBoxInput from "../../shared/components/document/inputs/StackedBoxInput";
import TextInput from "../../shared/components/document/inputs/TextInput";
import WideLineInput from "./Inputs/WideLineInput";
import SegmentedDate from "./SegmentedDate";
import SegmentedLineInput from "./SegmentedLineInput";
import TimeInput from "./Inputs/TimeInput";
import {
  registerArialNarrow,
  registerArial,
  registerTimesNewRoman,
  registerSourceSans,
} from "../../shared/components/document/fonts";

registerArialNarrow();
registerArial();
registerTimesNewRoman();
registerSourceSans();

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  body: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    fontSize: "8.64px",
    paddingHorizontal: ".25in",
    paddingVertical: ".15in",
    boxSizing: "border-box",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: "2.41in",
    height: "1in",
    paddingVertical: ".10in",
  },
  text: {
    fontFamily: "Arial Narrow",
    fontStretch: "condensed",
  },
});

const PostPartumCare = [
  {
    number: 13,
    label: "Perineal wound care",
    children: [],
  },
  {
    number: 14,
    label: "Signs of Maternal Postpartum Complications",
    children: [],
  },
  {
    number: 15,
    label: "Counselling and Education",
    children: [
      {
        label: "a. Breastfeeding and Nutrition",
        children: [],
      },
      {
        label: "b. Family Planning",
        children: [],
      },
    ],
  },
  {
    number: 16,
    label:
      "Provided family planning service to patient (as requested by patient)",
    children: [],
  },
  {
    number: 17,
    label:
      "Referred to partner physician for Voluntary Surgical Sterilization (as requested by pt.)",
    children: [],
  },
  {
    number: 18,
    label: "Schedule the next postpartum follow-up",
    children: [],
  },
];

// Create Document Component
const CF3 = () => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      <Column style={styles.body}>
        <Row
          style={{
            width: "100%",
            justifyContent: "space-between",
            ...styles.text,
          }}
        >
          <Column
            style={{
              height: "100%",
            }}
          >
            <View>
              <Image src={logo} alt="Philhealth Logo" style={styles.logo} />
            </View>
          </Column>

          <Column>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "8px",
                  marginBottom: ".18in",
                }}
              >
                This form may be reproduced and is NOT FOR SALE
              </Text>
            </View>
            <Row style={{ display: "flex", justifyContent: "flex-end" }}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "1.25in",
                }}
              >
                <Text style={{ fontSize: "28px" }}>CF3</Text>
                <Text>(Claim Form)</Text>
                <Text>revised November 2013</Text>
              </View>
            </Row>
          </Column>
        </Row>

        <Column>
          <FieldInput />
          <FieldInput height=".02in" />
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              marginVertical: ".02in",
              fontSize: "9.6px",
            }}
          >
            PART I - PATIENT'S CLINICAL RECORD
          </Text>
          <FieldInput height="0" />
          <FieldInput height=".02in" />
        </Column>
        <Row style={{ marginVertical: ".1in" }}>
          <View style={{ marginRight: ".45in" }}>
            <Text style={{ fontSize: "8.76px" }}>
              1. PhilHealth Accreditation No. (PAN) - Institutional Health Care
              Provider:
            </Text>
          </View>
          <View>
            <SegmentedLineInput number={9} width=".24in" innerHeight={12} />
          </View>
        </Row>
        <Row
          style={{
            marginVertical: ".1in",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Column>
            <Row>
              <View>
                <Text>2. Name of Patient</Text>
              </View>
            </Row>
            <Row style={{ display: "flex" }}>
              <WideLineInput
                style={{ width: "5.09in" }}
                fields={[
                  { label: "Last Name," },
                  { label: "First Name," },
                  { label: "Middle Name" },
                  { label: "(example: Dela Cruz, Juan Jr., Sipag)" },
                ]}
              />
            </Row>
            {/* 4 */}
            <Row
              style={{
                marginVertical: ".1in",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "2.9in",
                  marginRight: ".20in",
                }}
              >
                <View>
                  <Text>4. Date Admitted: </Text>
                </View>
                <View>
                  <SegmentedDate style={{ paddingTop: 0 }} />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "2.3in",
                }}
              >
                <Text style={{ marginRight: ".15in" }}> Time Admitted: </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TimeInput rightLabel="AM" style={{ marginRight: ".15in" }} />
                  <TimeInput rightLabel="PM" />
                </View>
              </View>
            </Row>
            {/* 5 */}
            <Row style={{ marginVertical: ".1in" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "2.9in",
                  marginRight: ".20in",
                }}
              >
                <View>
                  <Text>5. Date Discharged: </Text>
                </View>
                <View>
                  <SegmentedDate style={{ paddingTop: 0 }} />
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "2.30in",
                }}
              >
                <Text style={{ marginRight: ".15in" }}> Time Discharged: </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <TimeInput rightLabel="AM" style={{ marginRight: ".15in" }} />
                  <TimeInput rightLabel="PM" />
                </View>
              </View>
            </Row>
          </Column>
          <Column>
            <View
              style={{
                height: "1.55in",
                width: "2.19in",
                border: "1px solid black",
                paddingLeft: ".2in",
                paddingRight: ".1in",
                paddingVertical: ".1in",
              }}
            >
              <Text>3. Chief Complaint / Reason for Admission:</Text>
            </View>
          </Column>
        </Row>

        {/* Part 1, number 6 */}
        <FieldInput />
        <Row>
          <View style={{ height: "2.1in" }}>
            <Text style={{ marginTop: ".1in", marginLeft: ".1in" }}>
              6. Brief History of Present Illness / OB History:
            </Text>
          </View>
        </Row>

        {/* Part 1, number 7 */}
        <FieldInput />
        <Row>
          <View>
            <Text style={{ marginTop: ".1in", marginLeft: ".1in" }}>
              7. Physical Examination ( Pertinent Findings per System )
            </Text>
          </View>
        </Row>

        <Row>
          <View style={{ marginTop: ".1in", marginLeft: ".1in" }}>
            <Text>General Survey:</Text>
          </View>
        </Row>

        <Row
          style={{
            marginTop: ".2in",
            marginLeft: ".1in",
            marginBottom: ".6in",
          }}
        >
          <Column style={{ width: "4.95in" }}>
            <Row style={{ marginBottom: ".29in" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: ".87in",
                  marginRight: ".20in",
                }}
              >
                <Text>Vital Signs </Text> <Text>:</Text>
              </View>
              <View>
                <TextInput label="BP:" width=".47in" />
              </View>
              <View>
                <TextInput label="CR:" width=".55in" />
              </View>
              <View style={{ marginRight: ".15in" }}>
                <TextInput label="RR:" width=".47in" />
              </View>
              <View>
                <TextInput label="Temperature:" width=".55in" />
              </View>
            </Row>
            <Row style={{ marginBottom: ".29in" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: ".87in",
                  marginRight: ".20in",
                }}
              >
                <Text>HEENT</Text>
                <Text>:</Text>
              </View>
            </Row>
            <Row style={{ marginBottom: ".29in" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: ".87in",
                  marginRight: ".20in",
                }}
              >
                <Text>Chest/Lungs</Text>
                <Text>:</Text>
              </View>
            </Row>
            <Row>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: ".87in",
                  marginRight: ".20in",
                }}
              >
                <Text>CVS</Text>
                <Text>:</Text>
              </View>
            </Row>
          </Column>
          <Column>
            <View
              style={{
                marginBottom: ".29in",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "1.03in",
              }}
            >
              <Text>Abdomen: </Text>
            </View>
            <View
              style={{
                marginBottom: ".29in",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "1.03in",
              }}
            >
              <Text>GU(IE): </Text>
            </View>
            <View
              style={{
                marginBottom: ".29in",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "1.03in",
              }}
            >
              <Text>Skin/Extremities: </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "1.03in",
              }}
            >
              <Text>Neuro Examination: </Text>
            </View>
          </Column>
        </Row>

        {/* 8 */}
        <FieldInput />
        <Row>
          <View style={{ height: "2.18in" }}>
            <Text style={{ marginTop: ".1in", marginLeft: ".1in" }}>
              8. Course in the Wards (attach additional sheets if necessary):
            </Text>
          </View>
        </Row>
        {/* 9 */}
        <FieldInput />
        <Row>
          <View style={{ height: "1.57in" }}>
            <Text style={{ marginTop: ".1in", marginLeft: ".1in" }}>
              9. Pertinent Laboratory and Diagnostic Findings: ( CBC,
              Urinalysis, Fecalysis, X-ray, Biopsy, etc. )
            </Text>
          </View>
        </Row>

        {/* 10 */}

        <FieldInput />

        <Row
          style={{
            height: ".75in",
          }}
        >
          <View
            style={{
              display: "fex",
              flexDirection: "row",
              marginTop: ".32in",
              marginbottom: ".26in",
            }}
          >
            <View style={{ marginLeft: ".1in" }}>
              <Text>10. Disposition on Discharge:</Text>
            </View>
            <View>
              <CheckBoxInput label="Improved" />
            </View>
            <View>
              <CheckBoxInput label="Transferred" />
            </View>
            <View>
              <CheckBoxInput label="HAMA" />
            </View>
            <View>
              <CheckBoxInput label="Absconded" />
            </View>
            <View>
              <CheckBoxInput label="Expired" />
            </View>
          </View>
        </Row>
        <FieldInput />
      </Column>
    </Page>
    <Page size="LEGAL" style={styles.page}>
      <Column style={styles.body}>
        {/* PART 2 */}

        <Column>
          <FieldInput />
          <FieldInput height=".02in" />
          <View
            style={{
              fontWeight: "bold",
              marginVertical: ".02in",
              fontSize: ".14in",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#FF0000" }}>PART II</Text>
            <Text>- MATERNITY CARE PACKAGE</Text>
          </View>
          <FieldInput height="0" />
          <FieldInput height=".02in" />
        </Column>

        <FieldInput height=".02in" />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginVertical: ".02in",
            fontSize: ".14in",
            color: "#ff0000",
          }}
        >
          PRENATAL CONSULTATION
        </Text>
        <FieldInput height="0" />

        <Row style={{ marginVertical: ".1in" }}>
          <View style={{ marginRight: ".3in" }}>
            <Text style={{ color: "#ff0000" }}>
              {" "}
              1. Initial Prenatal Consultation{" "}
            </Text>
          </View>
          <View style={{ marginRight: ".3in" }}>
            <SegmentedDate style={{ paddingTop: 0 }} />
          </View>
        </Row>

        {/* 2 */}
        <View style={{ marginRight: ".3in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>2.</Text> Clinical History and
            Physical Examination
          </Text>
        </View>
        <Row style={{ marginVertical: ".1in" }}>
          <Row>
            <Column
              style={{
                marginLeft: ".1in",
                width: "2.82in",
                marginRight: ".30in",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: ".22in",
                }}
              >
                <View>
                  <Text>
                    <Text style={{ color: "#00" }}>a.</Text> Vital signs are
                    normal
                  </Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>b. Ascertain the present Pregnancy is low-Risk</Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </View>
            </Column>
            <Column style={{ width: "4.35in" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text>c. Menstrual History </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text>LMP</Text>
                  <SegmentedDate style={{ paddingTop: 0 }} />
                  <View>
                    <TextInput label="Age of Menarche" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <View>
                  <Text style={{ marginRight: ".2in" }}>
                    d. Obstetric History
                  </Text>
                </View>
                <View>
                  <TextInput label="G" />
                </View>
                <View>
                  <TextInput label="P" />
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                  }}
                >
                  <Text>(</Text>

                  <StackedBoxInput lowerText="T" />
                  <StackedBoxInput label="," lowerText="P" />
                  <StackedBoxInput label="," lowerText="A" />
                  <StackedBoxInput label="," lowerText="L" />
                  <Text>)</Text>
                </View>
              </View>
            </Column>
          </Row>
        </Row>
        {/* 3 */}
        <View>
          <Text>
            <Text style={{ color: "#f00", marginBottom: ".2in" }}>3.</Text>{" "}
            Obstetric risk factors
          </Text>
        </View>
        <Row>
          <Column style={{ marginLeft: ".1in", width: "1.80in" }}>
            {["a. Multiple Pregnancy", "b. Ovarian cyst", "c. Myoma uteri"].map(
              (item) => (
                <Row
                  key={item}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <View>
                    <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                  </View>
                  <View>
                    <CheckBoxInput />
                  </View>
                </Row>
              )
            )}
          </Column>
          <Column style={{ width: "1.8in" }}>
            {[
              "d. Placenta previa",
              "e. History of 3 miscarriages",
              "f. History of stillbirth",
            ].map((item) => (
              <Row
                key={item}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View>
                  <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </Row>
            ))}
          </Column>
          <Column style={{ width: "1.7in" }}>
            {[
              "g. History of pre-eclampsia",
              "h. History of eclampsia",
              "i. Premature contraction",
            ].map((item) => (
              <Row
                key={item}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View>
                  <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </Row>
            ))}
          </Column>
        </Row>
        <View>
          <Text>
            <Text style={{ color: "#f00", marginBottom: ".2in" }}>4. </Text>
            Medical/Surgical risk factors
          </Text>
        </View>
        <Row>
          <Column style={{ marginLeft: ".1in", width: "1.8in" }}>
            {["a. Hypertension", "b. Heart Disease", "c. Diabetes"].map(
              (item) => (
                <Row
                  key={item}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <View>
                    <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                  </View>
                  <View>
                    <CheckBoxInput />
                  </View>
                </Row>
              )
            )}
          </Column>
          <Column style={{ width: "1.8in" }}>
            {[
              "d. Thyroid Disorder",
              "e. Obesity",
              "f. Moderate to severe asthma",
            ].map((item) => (
              <Row
                key={item}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View>
                  <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </Row>
            ))}
          </Column>
          <Column style={{ width: "1.7in" }}>
            {["g. Epilepsy", "h. Renal disease", "i. Bleeding disorders"].map(
              (item) => (
                <Row
                  key={item}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <View>
                    <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                  </View>
                  <View>
                    <CheckBoxInput />
                  </View>
                </Row>
              )
            )}
          </Column>
          <Column style={{ width: "2.0in" }}>
            {[
              "j. History of previous cesarian section",
              "k. History of uterine myomectomy",
            ].map((item) => (
              <Row
                key={item}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <View>
                  <Text style={{ marginBottom: ".1in" }}>{item}</Text>
                </View>
                <View>
                  <CheckBoxInput />
                </View>
              </Row>
            ))}
          </Column>
        </Row>

        <View style={{ marginBottom: ".1in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>5.</Text> Admitting Diagnosis
          </Text>
          <View style={{ width: "100%" }}>
            <TextInput label="" fullWidth={true} />
          </View>
        </View>
        <Row>
          <Text>
            <Text style={{ color: "#f00" }}>6.</Text> Delivery Plan
          </Text>
        </Row>

        <Row
          style={{
            marginLeft: ".1in",
            marginTop: ".24in",
            marginBottom: ".29in",
          }}
        >
          <View style={{ marginRight: ".2in" }}>
            <Text>
              <Text style={{ color: "#f00" }}>a.</Text> Orientation to
              MCP/Availment of Benefits
            </Text>
          </View>
          <View style={{ marginRight: ".1in" }}>
            <CheckBoxInput />
            <Text>yes</Text>
          </View>
          <View>
            <CheckBoxInput />
            <Text>no</Text>
          </View>
          <View>
            <Text>
              <Text style={{ color: "#f00" }}>b.</Text> Expected date of
              delivery
            </Text>
          </View>
          <View>
            <SegmentedDate style={{ paddingTop: 0 }} />
          </View>
        </Row>

        <Row>
          <View>
            <Text>
              <Text style={{ color: "#f00", marginBottom: ".1in" }}>7.</Text>
              Follow-up Prenatal Consultation
            </Text>
          </View>
        </Row>
        <Row
          style={{
            justifyContent: "space-between",
            marginLeft: ".1in",
            marginRight: ".1in",
          }}
        >
          <View>
            <Text>a. Prenatal Consultation No.</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {Array.from(Array(10).keys()).map((item) => (
              <View
                key={item}
                style={{
                  border: "1px solid black",
                  paddingHorizontal: ".05in",
                  paddingVertical: ".02in",
                  marginLeft: ".25in",
                }}
              >
                <Text>
                  {item + 2}
                  {item + 2 === 1
                    ? "st"
                    : item + 2 === 2
                    ? "nd"
                    : item + 2 === 3
                    ? "rd"
                    : "th"}
                </Text>
              </View>
            ))}
          </View>
        </Row>

        <Row
          style={{
            justifyContent: "space-between",
            marginLeft: ".1in",
            marginBottom: ".1in",
          }}
        >
          <View>
            <Text>b. Date of visit (mm/ dd/ yy)</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {Array.from(Array(10).keys()).map((item, index) => (
              <View key={item}>
                <SegmentedLineInput
                  number={3}
                  width=".18in"
                  removeBorderLeft={index !== 0}
                />
              </View>
            ))}
          </View>
        </Row>

        <Row
          style={{
            justifyContent: "space-between",
            marginLeft: ".1in",
            marginRight: ".1in",
          }}
        >
          <View>
            <Text>c. AOG in weeks</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {Array.from(Array(10).keys()).map((item) => (
              <View
                key={item}
                style={{
                  height: ".2in",
                  border: "1px solid black",
                  paddingHorizontal: ".2in",
                  paddingVertical: ".03in",
                  marginLeft: ".12in",
                  marginBottom: ".04in",
                }}
              ></View>
            ))}
          </View>
        </Row>

        <Row style={{ marginLeft: ".1in", marginBottom: ".1in" }}>
          <View>
            <Text>d. Weight & Vital signs:</Text>
          </View>
        </Row>
        <Column style={{ marginLeft: ".2in", marginRight: ".1in" }}>
          {[
            "d.1. Weight",
            "d.2. Cardiac Rate",
            "d.3. Respiratory Rate",
            "d.4Blood Pressure",
            "d.5. Temperature",
          ].map((item) => (
            <Row key={item} style={{ justifyContent: "space-between" }}>
              <View sty>
                <Text>{item}</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {Array.from(Array(10).keys()).map((item) => (
                  <View
                    key={item}
                    style={{
                      height: ".2in",
                      border: "1px solid black",
                      paddingHorizontal: ".2in",
                      paddingVertical: ".03in",
                      marginLeft: ".12in",
                      marginBottom: ".04in",
                    }}
                  ></View>
                ))}
              </View>
            </Row>
          ))}
        </Column>

        {/* Start of Delivery Outcome */}
        <FieldInput height=".02in" />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginVertical: ".02in",
            fontSize: ".14in",
          }}
        >
          DELIVERY OUTCOME
        </Text>
        <FieldInput height="0" />

        <Row style={{ marginVertical: ".1in" }}>
          <View style={{ marginRight: ".3in" }}>
            <Text>
              <Text style={{ color: "#f00" }}>8.</Text> Date and Time of
              Delivery
            </Text>
          </View>
          <View style={{ marginRight: ".3in" }}>
            <SegmentedDate style={{ paddingTop: 0 }} />
          </View>
          <Text> Time </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TimeInput rightLabel="AM" style={{ marginRight: ".15in" }} />
            <TimeInput rightLabel="PM" />
          </View>
        </Row>

        <Row
          style={{ marginVertical: ".1in", justifyContent: "space-between" }}
        >
          <View style={{ marginRight: ".3in" }}>
            <Text>9. Maternal Outcome</Text>
          </View>
          <Row>
            <View style={{ marginRight: ".03in" }}>
              <StackedBoxInput upperText="" lowerText="Obstetric Index" />
            </View>
            <View style={{ marginRight: ".1in" }}>
              <StackedBoxInput
                upperText=""
                label="Pregnancy Uterine,"
                lowerText="AOG by LMP"
                boxWidth="1.44in"
              />
            </View>
            <View style={{ marginRight: ".1in" }}>
              <StackedBoxInput
                upperText=""
                lowerText="Manner of Delivery"
                boxWidth="1.44in"
              />
            </View>
            <View>
              <StackedBoxInput
                upperText=""
                lowerText="Presentation"
                boxWidth="1.44in"
              />
            </View>
          </Row>
        </Row>

        <Row
          style={{ marginVertical: ".1in", justifyContent: "space-between" }}
        >
          <View style={{ marginRight: ".3in" }}>
            <Text>10. Birth Outcome</Text>
          </View>
          <Row>
            <View style={{ marginRight: ".1in" }}>
              <StackedBoxInput
                upperText=""
                lowerText="Fetal Outcome"
                boxWidth="1.44in"
              />
            </View>
            <View style={{ marginRight: ".1in" }}>
              <StackedBoxInput upperText="" lowerText="Sex" boxWidth="1.44in" />
            </View>
            <View style={{ marginRight: ".1in" }}>
              <StackedBoxInput
                upperText=""
                lowerText="Birth Weight(gm)"
                boxWidth="1.44in"
              />
            </View>
            <View>
              <StackedBoxInput
                upperText=""
                lowerText="APGAR Score"
                boxWidth="1.44in"
              />
            </View>
          </Row>
        </Row>
        <Row style={{ marginVertical: ".1in" }}>
          <View style={{ marginRight: ".3in" }}>
            <Text>
              11. Scheduled Postpartum follow-up consultation 1 week after
              delivery
            </Text>
          </View>
          <View style={{ marginRight: ".3in" }}>
            <SegmentedDateInput style={{ paddingTop: 0 }} />
          </View>
        </Row>
        <Row style={{ marginVertical: ".1in" }}>
          <View style={{ marginRight: ".3in" }}>
            <Text>12. Date and Time of Discharge</Text>
          </View>
          <View style={{ marginRight: ".3in" }}>
            <SegmentedDateInput style={{ paddingTop: 0 }} />
          </View>
        </Row>

        <FieldInput height=".02in" />
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginVertical: ".02in",
            fontSize: ".14in",
            color: "#f00",
          }}
        >
          POSTPARTUM CARE
        </Text>
        <FieldInput height="0" />

        {/* Map from 13 to 18 */}
        {PostPartumCare.map((item, index) => (
          <Row
            key={item}
            style={{
              marginVertical: ".1in",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>
                <Text style={{ color: "#f00" }}>{item.number}. </Text>
                {item.label}
              </Text>
              {item.children.map((child, index) => (
                <Text key={item} style={{ marginLeft: ".2in" }}>
                  {child.label}
                </Text>
              ))}
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ display: "block" }}>
                <CheckBoxInput />
              </View>
              <View style={{ width: "3in" }}>
                <View
                  style={{
                    borderBottomWidth: 0.5,
                    borderColor: "#000",
                    height: ".17in",
                  }}
                />
              </View>
            </View>
          </Row>
        ))}

        {/* 19 */}

        <View style={{ border: "1px solid #000" }}>
          <View>
            <Text>
              <Text style={{ color: "#f00" }}>19.</Text> Certification of
              Attending Physician/Midwife:
            </Text>
          </View>
          <View style={{ marginHorizontal: ".4in", marginVertical: ".4in" }}>
            <Text style={{ fontStyle: "italic" }}>
              I certify that the above information given in this form are true
              and correct.
            </Text>
          </View>
          <Row
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginLeft: ".12in",
            }}
          >
            <View style={{ marginRight: "1.14in" }}>
              <StackedBoxInput
                upperText=""
                lowerText="Signature Over Printed Name of Attending Physician/Midwife"
              />
            </View>
            <View style={{ marginRight: ".3in" }}>
              <SegmentedDate style={{ paddingTop: 0 }} />
            </View>
          </Row>
        </View>
      </Column>
    </Page>
  </Document>
);

export default CF3;
