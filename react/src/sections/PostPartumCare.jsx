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

export const PostPartumCare = () => {
  const PostPartumCareQuestions = [
    {
      number: 13,
      label: "Perineal wound care",
    },
    {
      number: 14,
      label: "Signs of Maternal Postpartum Complications",
    },
    {
      number: 15,
      label: "Counselling and Education",
      hasChildren: true,
    },
    {
      label: "a. Breastfeeding and Nutrition",
      isChild: true,
    },
    {
      label: "b. Family Planning",
      isChild: true,
    },
    {
      number: 16,
      label: "Provided family planning service to patient ",
      subLabel: "(as requested by patient)",
      children: [],
    },
    {
      number: 17,
      label:
        "Referred to partner physician for Voluntary Surgical Sterilization ",
      subLabel: "(as requested by pt.)",
      children: [],
    },
    {
      number: 18,
      label: "Schedule the next postpartum follow-up",
      children: [],
    },
  ];
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
      <Row
        style={{
          paddingLeft: ".25",
          paddingRight: ".1in",
          marginBottom: ".04in",
          fontFamily: "Arial Narrow",
          fontStyle: "italic",
        }}
      >
        <Text
          style={{
            marginLeft: "4.22in",
            marginRight: "1.30in",
            fontSize: "7.8px",
          }}
        >
          done
        </Text>
        <Text style={{ fontSize: "7.8px" }}>Remarks</Text>
      </Row>
      {/* Map from 13 to 18 */}
      {PostPartumCareQuestions.map((item, index) => (
        <Row
          key={item}
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: ".25in",
            paddingRight: ".1in",
            ...styles.text,
          }}
        >
          <View style={{ marginBottom: ".07in" }}>
            <Text style={[item.isChild ? { marginLeft: ".1in" } : {}]}>
              {item.isChild ? (
                <></>
              ) : (
                <Text style={{ color: "#f00" }}>{item.number}. </Text>
              )}
              {item.label}
              <Text style={{ fontSize: "6.96px" }}>{item?.subLabel}</Text>
            </Text>
          </View>
          {item.hasChildren ? (
            <></>
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: ".02in",
              }}
            >
              <View style={{ display: "block", marginRight: ".07in" }}>
                <CheckBoxInput
                  isSmall={false}
                  customWidth=".13in"
                  customHeight=".17in"
                />
              </View>
              <View style={{ width: "3in" }}>
                <View
                  style={{
                    borderBottomWidth: 0.7,
                    borderColor: "#000",
                    height: ".18in",
                  }}
                />
              </View>
            </View>
          )}
        </Row>
      ))}
    </>
  );
};
