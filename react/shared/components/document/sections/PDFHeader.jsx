import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { stringifyAddress } from "core/utils/string";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    fontSize: 10,
  },
  headerLeft: {
    fontFamily: "Source Code Pro",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerRight: {
    paddingLeft: 10,
    width: "80%",
    fontFamily: "Poppins",
    display: "flex",
    flexDirection: "column",
  },
  headerLogo: {
    height: 80,
    width: "auto",
    objectFit: "scale-down",
  },
  headerRightOrgName: {
    // fontWeight: "bold",
    marginBottom: 8,
  },
  headerRightOrgDetails: {
    display: "flex",
    flexDirection: "row",
    fontSize: 8,
  },
  headerRightOrgDetailsLeft: {
    width: "41%",
  },
  headerRightOrgDetailsRight: {
    width: "59%",
  },
  headerRightOrgDetailsRightDOH: {
    marginBottom: 12,
  },
  headerRightAddress: {
    marginBottom: 8,
  },
});

const PDFHeader = ({ organization = {} }) => (
  <View style={styles.header}>
    <View style={styles.headerLeft}>
      {organization?.logo && (
        <Image style={styles.headerLogo} src={organization?.logo} />
      )}
    </View>
    <View style={styles.headerRight}>
      <Text style={styles.headerRightOrgName}>{organization?.name}</Text>
      <View style={styles.headerRightOrgDetails}>
        <View style={styles.headerRightOrgDetailsLeft}>
          <View style={styles.headerRightAddress}>
            <Text>{organization?.address?.street}</Text>
            <Text>{organization?.address?.district}</Text>
            <Text>{organization?.address?.state}</Text>
          </View>
        </View>
        <View style={styles.headerRightOrgDetailsRight}>
          <Text style={styles.headerRightOrgDetailsRightDOH}>
            DOH: {organization?.details?.doh_code}
          </Text>
          <Text>
            {
              organization?.contact?.find((item) => item?.type === "landline")
                ?.value
            }
          </Text>
          <Text>
            {
              organization?.contact?.find((item) => item?.type === "website")
                ?.value
            }
          </Text>
        </View>
      </View>
    </View>
  </View>
);

PDFHeader.propTypes = {
  organization: PropTypes.instanceOf(Object),
};

PDFHeader.defaultProps = {
  organization: null,
};

export default PDFHeader;
