import { StyleSheet, View, Text } from "@react-pdf/renderer";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import SegmentedLineInput from "../components/SegmentedLineInput";
import WideLineInput from "../components/Inputs/WideLineInput";
import TimeInput from "../components/Inputs/TimeInput";
import SegmentedDate from "../components/SegmentedDate";
import FieldInput from "../../shared/components/document/inputs/FieldInput";
import TextInput from "../../shared/components/document/inputs/TextInput";
import CheckBoxInput from "../../shared/components/document/inputs/CheckBoxInput";

export const PatientDetails = () => {
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
      height: "1.1in",
      paddingVertical: ".10in",
    },
    text: {
      fontFamily: "Arial Narrow",
      fontStretch: "condensed",
    },
    numberText: {
      fontSize: "8.76px",
      lineHeight: "1.2",
      marginTop: ".1in",
      marginLeft: ".04in",
    },
    textSpacing: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });
  return (
    <>
      {/* Part 1, number 6 */}
      <FieldInput />
      <Row>
        <View style={{ height: "2in" }}>
          <Text style={[styles.text, styles.numberText]}>
            6. Brief History of Present Illness / OB History:
          </Text>
        </View>
      </Row>

      {/* Part 1, number 7 */}
      <FieldInput />
      <Row>
        <View>
          <Text style={[styles.text, styles.numberText]}>
            7. Physical Examination ( Pertinent Findings per System )
          </Text>
        </View>
      </Row>

      <Row>
        <View style={{ marginTop: ".1in", marginLeft: ".1in" }}>
          <Text style={styles.text}>General Survey:</Text>
        </View>
      </Row>

      <Row
        style={{
          marginTop: ".2in",
          marginLeft: ".1in",
          marginBottom: ".6in",
          ...styles.text,
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
              style={[
                styles.textSpacing,
                {
                  width: ".87in",
                  marginRight: ".20in",
                },
              ]}
            >
              <Text>HEENT</Text>
              <Text>:</Text>
            </View>
          </Row>
          <Row style={{ marginBottom: ".29in" }}>
            <View
              style={[
                styles.textSpacing,
                {
                  width: ".87in",
                  marginRight: ".20in",
                },
              ]}
            >
              <Text>Chest/Lungs</Text>
              <Text>:</Text>
            </View>
          </Row>
          <Row>
            <View
              style={[
                styles.textSpacing,
                {
                  width: ".87in",
                  marginRight: ".20in",
                },
              ]}
            >
              <Text>CVS</Text>
              <Text>:</Text>
            </View>
          </Row>
        </Column>
        <Column>
          <View
            style={[
              styles.textSpacing,
              {
                marginBottom: ".29in",
                width: "1.03in",
              },
            ]}
          >
            <Text>Abdomen</Text>
            <Text>:</Text>
          </View>
          <View
            style={[
              styles.textSpacing,
              {
                marginBottom: ".29in",
                width: "1.03in",
              },
            ]}
          >
            <Text>GU ( IE )</Text>
            <Text>:</Text>
          </View>
          <View
            style={[
              styles.textSpacing,
              {
                marginBottom: ".29in",
                width: "1.03in",
              },
            ]}
          >
            <Text>Skin/Extremities</Text>
            <Text>:</Text>
          </View>
          <View
            style={[
              styles.textSpacing,
              {
                width: "1.03in",
              },
            ]}
          >
            <Text>Neuro Examination</Text>
            <Text>:</Text>
          </View>
        </Column>
      </Row>

      {/* 8 */}
      <FieldInput />
      <Row>
        <View style={{ height: "2.08in" }}>
          <Text style={[styles.text, styles.numberText]}>
            8. Course in the Wards (attach additional sheets if necessary):
          </Text>
        </View>
      </Row>
      {/* 9 */}
      <FieldInput />
      <Row>
        <View style={{ height: "1.47in" }}>
          <Text style={[styles.text, styles.numberText]}>
            9. Pertinent Laboratory and Diagnostic Findings: ( CBC, Urinalysis,
            Fecalysis, X-ray, Biopsy, etc. )
          </Text>
        </View>
      </Row>

      {/* 10 */}

      <FieldInput />

      <Row
        style={{
          height: ".75in",
          ...styles.text,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: ".32in",
            marginbottom: ".16in",
            width: "100%",
          }}
        >
          <View
            style={{
              marginLeft: ".04in",
              marginRight: ".34in",
              paddingTop: ".04in",
            }}
          >
            <Text>10. Disposition on Discharge:</Text>
          </View>
          <View styles={{ backgroundColor: "red" }}>
            <CheckBoxInput
              boxMarginRight=".17in"
              isSmall={false}
              label="Improved"
              style={{ marginRight: ".45in" }}
            />
          </View>
          <View>
            <CheckBoxInput
              boxMarginRight=".17in"
              isSmall={false}
              label="Transferred"
              style={{ marginRight: ".45in" }}
            />
          </View>
          <View styles={{ width: "1.18in" }}>
            <CheckBoxInput
              boxMarginRight=".17in"
              isSmall={false}
              label="HAMA"
              style={{ marginRight: ".59in" }}
            />
          </View>
          <View styles={{ width: "1.02in" }}>
            <CheckBoxInput
              boxMarginRight=".17in"
              isSmall={false}
              label="Absconded"
              style={{ marginRight: ".22in" }}
            />
          </View>
          <View styles={{ width: "1.02in" }}>
            <CheckBoxInput
              boxMarginRight=".17in"
              isSmall={false}
              label="Expired"
            />
          </View>
        </View>
      </Row>
      <FieldInput style={{ marginBottom: ".50in" }} />
    </>
  );
};
