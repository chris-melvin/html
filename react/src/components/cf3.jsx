import React from "react";
import { Page, Text, Document, StyleSheet } from "@react-pdf/renderer";
import Column from "./layout/Column";

import {
  registerArialNarrow,
  registerArial,
  registerTimesNewRoman,
  registerSourceSans,
} from "../../shared/components/document/fonts";
// Sections
import { PhilhealthHeader } from "../sections/PhilhealthHeader";
import { PersonalDetails } from "../sections/PersonalDetails";
import { PatientDetails } from "../sections/PatientDetails";
import { PrenatalConsultation } from "../sections/PrenatalConsultation";
import { DeliveryOutcome } from "../sections/DeliveryOutcome";
import { PostPartumCare } from "../sections/PostPartumCare";
import { SignatureSection } from "../sections/SignatureSection";
import { PageTitle } from "./PageTitle";
import { SectionTitle } from "./SectionTitle";

// Register fonts
registerArialNarrow();
registerArial();
registerTimesNewRoman();
registerSourceSans();

// Create styles
const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    fontSize: "8.76px",
    paddingRight: ".32in",
    paddingLeft: ".25in",
    paddingVertical: ".17in",
    boxSizing: "border-box",
  },
  body2: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    fontSize: "8.76px",
    paddingTop: ".25in",
    paddingHorizontal: ".44in",
    boxSizing: "border-box",
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

// Create Document Component
const CF3 = () => (
  <Document>
    <Page size="LEGAL" style={styles.page}>
      <Column style={styles.body}>
        {/* Page 1 Header */}
        <PhilhealthHeader />

        <PageTitle>PART I - PATIENT'S CLINICAL RECORD</PageTitle>
        {/* Part 1 -  1 to 5 */}
        <PersonalDetails />

        {/* Part 2 -  6 to 10 */}
        <PatientDetails />
      </Column>
    </Page>

    <Page size="LEGAL" style={styles.page}>
      <Column style={styles.body2}>
        {/* PART 2 */}

        <PageTitle fontSize="10.92">
          <Text style={{ color: "#FF0000" }}>PART II</Text>
          <Text>- MATERNITY CARE PACKAGE</Text>
        </PageTitle>

        {/* Start of Prenatal Consultation */}
        <SectionTitle color="#f00">
          <Text>PRENATAL CONSULTATION</Text>
        </SectionTitle>
        {/* Part 2 - 1 to 7 */}
        <PrenatalConsultation />

        {/* Start of Delivery Outcome */}
        <SectionTitle color="#f00">DELIVERY OUTCOME</SectionTitle>
        {/* Part 2 - 8 to 12 */}
        <DeliveryOutcome />

        {/* Start of Postpartum Care */}
        <SectionTitle color="#f00">POSTPARTUM CARE</SectionTitle>

        {/* PART 2 - 13 to 18 */}
        <PostPartumCare />

        {/* PART 2 - 19 */}
        <SignatureSection />
      </Column>
    </Page>
  </Document>
);

export default CF3;
