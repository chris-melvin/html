import { Image, StyleSheet, View, Text } from "@react-pdf/renderer";
import Column from "../components/layout/Column";
import Row from "../components/layout/Row";
import logo from "../../shared/components/document/ClaimForm/logo/philhealth_logo.png";

export const PhilhealthHeader = () => {
  const styles = StyleSheet.create({
    logo: {
      width: "2.41in",
      height: "1in",
      paddingVertical: ".10in",
    },
    text: {
      fontFamily: "Arial Narrow",
      fontStretch: "condensed",
    },
    reminder: {
      fontWeight: 700,
      fontSize: "8.04px",
      marginBottom: ".18in",
      marginRight: ".06in",
      fontFamily: "Arial",
      lineHeight: "1.2",
    },
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    formCode: {
      fontSize: "28.80px",
      fontFamily: "Arial",
      lineHeight: ".8",
      fontWeight: 400,
      marginBottom: ".20in",
    },
  });
  return (
    <Row
      style={{
        width: "100%",
        justifyContent: "space-between",
        marginBottom: ".63in",
      }}
    >
      <Column>
        <View>
          <Image src={logo} alt="Philhealth Logo" style={styles.logo} />
        </View>
      </Column>

      <Column>
        <View>
          <Text style={styles.reminder}>
            This form may be reproduced and is NOT FOR SALE
          </Text>
        </View>
        <Row style={{ justifyContent: "flex-end" }}>
          <View style={styles.container}>
            <Text style={styles.formCode}>CF3</Text>
            <Text
              style={{
                fontSize: "8.76px",
                maringTop: ".15in",
                lineHeight: "1.2",
                marginBottom: ".03in",
              }}
            >
              (Claim Form)
            </Text>
            <Text style={{ fontSize: "8.04", lineHeight: "1.2" }}>
              revised November 2013
            </Text>
          </View>
        </Row>
      </Column>
    </Row>
  );
};
