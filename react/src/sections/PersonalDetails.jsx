import { StyleSheet, View, Text } from "@react-pdf/renderer";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import SegmentedLineInput from "../components/SegmentedLineInput";
import WideLineInput from "../components/Inputs/WideLineInput";
import TimeInput from "../components/Inputs/TimeInput";
import SegmentedDate from "../components/SegmentedDate";
import LineInput from "../components/Inputs/LineInput";

export const PersonalDetails = () => {
  const styles = StyleSheet.create({
    logo: {
      width: "2.41in",
      height: "1.1in",
      paddingVertical: ".10in",
    },
    text: {
      fontFamily: "Arial Narrow",
      fontStretch: "condensed",
    },
    rowStyles: {
      marginBottom: ".12in",
    },
    dateContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "3.0in",
      marginRight: ".20in",
    },
    timeContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "2.10in",
      marginTop: ".1in",
    },
    numberText: {
      fontSize: "8.76px",
      lineHeight: "1.2",
      marginLeft: ".02in",
    },
  });
  return (
    <>
      {/* Part 1, number 1 */}
      <Row style={[styles.rowStyles, styles.text, { marginTop: ".1in" }]}>
        <View style={{ marginRight: ".45in" }}>
          <Text style={styles.numberText}>
            1. PhilHealth Accreditation No. (PAN) - Institutional Health Care
            Provider:
          </Text>
        </View>
        <View>
          <SegmentedLineInput number={9} width=".235in" innerHeight={12} />
        </View>
      </Row>
      {/* Part 1, number 2 */}
      <Row
        style={[
          styles.text,
          { marginTop: ".01in", justifyContent: "space-between" },
        ]}
      >
        <Column>
          <Row>
            <View>
              <Text style={styles.numberText}>2. Name of Patient</Text>
            </View>
          </Row>
          <Row>
            <LineInput
              style={{ width: "5.09in", marginLeft: ".12in" }}
              fields={[
                { label: "Last Name," },
                { label: "First Name," },
                { label: "Middle Name" },
                { label: "(example: Dela Cruz, Juan Jr., Sipag)" },
              ]}
            />
          </Row>
          {/* 4 */}
          <Row style={{ marginTop: ".2in" }}>
            <View style={styles.dateContainer}>
              <View>
                <Text style={styles.numberText}>4. Date Admitted: </Text>
              </View>
              <View>
                <SegmentedDate style={{ paddingTop: 0 }} />
              </View>
            </View>
            <View style={styles.timeContainer}>
              <Text> Time Admitted: </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TimeInput
                  width=".30in"
                  rightLabelStyle={{
                    fontFamily: "Arial Narrow",
                    fontSize: "7.04px",
                  }}
                  rightLabel="AM"
                  style={{ marginRight: ".15in" }}
                />
                <TimeInput
                  width=".30in"
                  rightLabelStyle={{
                    fontFamily: "Arial Narrow",
                    fontSize: "7.04px",
                  }}
                  rightLabel="PM"
                />
              </View>
            </View>
          </Row>
          {/* 5 */}
          <Row style={{ marginVertical: ".1in" }}>
            <View style={styles.dateContainer}>
              <View>
                <Text style={styles.numberText}>5. Date Discharged: </Text>
              </View>
              <View>
                <SegmentedDate style={{ paddingTop: 0 }} />
              </View>
            </View>

            <View style={styles.timeContainer}>
              <Text> Time Discharged: </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TimeInput
                  width=".30in"
                  rightLabelStyle={{
                    fontFamily: "Arial Narrow",
                    fontSize: "7.04px",
                  }}
                  rightLabel="AM"
                  style={{ marginRight: ".15in" }}
                />
                <TimeInput
                  width=".30in"
                  rightLabelStyle={{
                    fontFamily: "Arial Narrow",
                    fontSize: "7.04px",
                  }}
                  rightLabel="PM"
                />
              </View>
            </View>
          </Row>
        </Column>
        <Column>
          <View
            style={{
              height: "1.55in",
              width: "2.18in",
              border: "1px solid black",
              paddingLeft: ".2in",
              paddingRight: ".1in",
              paddingTop: ".1in",
            }}
          >
            <Text>3. Chief Complaint / Reason for Admission:</Text>
          </View>
        </Column>
      </Row>
    </>
  );
};
