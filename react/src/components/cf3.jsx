import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../../shared/components/document/ClaimForm/logo/philhealth_logo.png";
import ClaimForm1 from "../../shared/components/document/ClaimForm/forms/ClaimForm1";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  logo: {
    width: 229,
    height: 78,
  },
});

// Create Document Component
const CF3 = () => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      <View style={styles.section}>
        <Image src={logo} alt="Philhealth Logo" style={styles.logo} />
        Hello
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default CF3;
