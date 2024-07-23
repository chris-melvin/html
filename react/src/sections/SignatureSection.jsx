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
import Dash from "../../shared/components/document/typography/Dash";

export const SignatureSection = () => {
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
    <View
      style={{
        border: "1px solid #000",
        marginLeft: ".25in",
        marginRight: ".1in",
        marginTop: ".1in",
        paddingBottom: ".2in",
        marginBottom: "1.5in",
      }}
    >
      <View>
        <Text style={styles.text}>
          <Text style={{ color: "#f00" }}>19.</Text> Certification of Attending
          Physician/Midwife:
        </Text>
      </View>
      <View style={{ marginHorizontal: ".4in", marginVertical: ".4in" }}>
        <Text
          style={{
            fontStyle: "italic",
            fontFamily: "TimesNewRoman",
            fontWeight: "bold",
          }}
        >
          I certify that the above information given in this form are true and
          correct.
        </Text>
      </View>
      <Row
        style={{
          display: "flex",
          alignItems: "flex-end",
          marginLeft: ".12in",
          ...styles.text,
        }}
      >
        <View style={{ marginRight: "1.14in", fontSize: "7.8px" }}>
          <StackedBoxInput
            upperText=""
            boxWidth="3.06in"
            lowerText="Signature Over Printed Name of Attending Physician/Midwife"
          />
        </View>
        <View style={{ marginRight: ".3in" }}>
          <Row>
            <Column
              style={{
                marginRight: ".08in",
              }}
            >
              <SegmentedLineInput number={2} width=".12in" innerHeight={6} />
            </Column>
            <Column
              style={{
                marginLeft: ".08in",
                marginRight: ".08in",
              }}
            >
              <SegmentedLineInput number={2} width=".12in" innerHeight={6} />
            </Column>

            <Column
              style={{
                marginLeft: ".08in",
                marginRight: ".08in",
              }}
            >
              <SegmentedLineInput number={4} width=".12in" innerHeight={6} />
            </Column>
          </Row>
          <Text
            style={{ margin: "0 auto", fontSize: "6.96px", ...styles.text }}
          >
            Date Signed (Month / Day / Year)
          </Text>
        </View>
      </Row>
    </View>
  );
};
