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
import StackedBoxInput from "../../shared/components/document/inputs/StackedBoxInput";
import SegmentedDateInput from "../../shared/components/document/inputs/SegmentedDateInput";

export const DeliveryOutcome = () => {
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
  });
  return (
    <>
      {/* 8 */}
      <Row
        style={{
          marginBottom: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: ".48in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>8.</Text> Date and Time of Delivery
          </Text>
        </View>
        <View style={{ marginRight: ".3in" }}>
          <SegmentedDate label="Date" style={{ paddingTop: 0 }} />
        </View>
        <Row style={{ alignItems: "flex-start" }}>
          <Text
            style={{
              paddingRight: ".1in",
            }}
          >
            Time
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TimeInput
              rightLabel="AM"
              style={{ marginRight: ".15in" }}
              width=".25in"
            />
            <TimeInput rightLabel="PM" width=".25in" />
          </View>
        </Row>
      </Row>

      <Row
        style={{
          marginBottom: ".1in",
          justifyContent: "space-between",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          fontFamily: "Arial",
          fontSize: "6.24px",
        }}
      >
        <View style={{ marginRight: ".3in" }}>
          <Text style={[styles.text, { fontSize: "8.64px" }]}>
            <Text style={{ color: "#f00" }}>9.</Text> Maternal Outcome
          </Text>
        </View>
        <Row>
          <View
            style={{
              marginRight: ".03in",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <StackedBoxInput
              upperText=""
              lowerText="Obstetric Index"
              boxWidth=".66in"
            />
            {/* TODO: FIX ALIGNMENT */}
            <Text
              style={{
                fontSize: "8.64px",
                fontFamily: "Arial Narrow",
              }}
            >
              Pregnancy Uterine,
            </Text>
          </View>
          <View style={{ marginRight: ".12in" }}>
            <StackedBoxInput
              upperText=""
              lowerText="AOG by LMP"
              boxWidth="1.44in"
            />
          </View>
          <View style={{ marginRight: ".12in" }}>
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
      {/* 10 */}
      <Row
        style={{
          marginBottom: ".1in",
          justifyContent: "space-between",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          fontFamily: "Arial",
          fontSize: "6.24px",
        }}
      >
        <View style={{ marginRight: ".3in" }}>
          <Text style={[styles.text, { fontSize: "8.64px" }]}>
            <Text style={{ color: "#f00" }}>10.</Text> Birth Outcome
          </Text>
        </View>
        <Row>
          <View style={{ marginRight: ".12in" }}>
            <StackedBoxInput
              upperText=""
              lowerText="Fetal Outcome"
              boxWidth="1.44in"
            />
          </View>
          <View style={{ marginRight: ".12in" }}>
            <StackedBoxInput upperText="" lowerText="Sex" boxWidth="1.44in" />
          </View>
          <View style={{ marginRight: ".12in" }}>
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
      {/* 11 */}
      <Row
        style={{
          marginBottom: ".1in",
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: ".92in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>11.</Text> Scheduled Postpartum
            follow-up consultation 1 week after delivery
          </Text>
        </View>
        <View style={{ marginRight: ".3in" }}>
          <SegmentedDate boxWidth=".12in" style={{ paddingTop: 0 }} />
        </View>
      </Row>
      {/* 12 */}
      <Row
        style={{
          paddingLeft: ".25in",
          paddingRight: ".1in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: ".3in" }}>
          <Text>
            <Text style={{ color: "#f00" }}>12.</Text> Date and Time of
            Discharge
          </Text>
        </View>
        <View style={{ marginRight: ".3in" }}>
          <SegmentedDate boxWidth=".12in" style={{ paddingTop: 0 }} />
        </View>
        <Row style={{ alignItems: "flex-start" }}>
          <Text
            style={{
              paddingRight: ".1in",
            }}
          >
            Time
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <TimeInput
              rightLabel="AM"
              style={{ marginRight: ".15in" }}
              width=".25in"
            />
            <TimeInput rightLabel="PM" width=".25in" />
          </View>
        </Row>
      </Row>
    </>
  );
};
