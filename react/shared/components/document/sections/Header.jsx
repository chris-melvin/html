import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import { stringifyAddress } from "core/utils/string";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    columnGap: 20,
    fontSize: 10,
    marginBottom: 20,
  },
  headerLeft: {
    // backgroundColor: "#F2F2F2",
    fontFamily: "Source Code Pro",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  headerRight: {
    width: "65%",
    // backgroundColor: "#F2F2F2",
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
    width: "48%",
    marginRight: "4%",
  },
  headerRightOrgDetailsRight: {
    width: "48%",
  },
  headerRightAddress: {
    marginBottom: 8,
  },
});

const Header = ({ organization }) => {
  const { street, district, region } = organization?.address || {};
  const orgAddress = {
    street,
    district,
    region,
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image style={styles.headerLogo} src={organization?.logo} />
      </View>
      <View style={styles.headerRight}>
        <Text style={styles.headerRightOrgName}>{organization?.name}</Text>
        <View style={styles.headerRightOrgDetails}>
          <View style={styles.headerRightOrgDetailsLeft}>
            <Text style={styles.headerRightAddress}>
              {stringifyAddress(orgAddress)}
            </Text>
            <Text>
              {
                organization?.contact?.find((x) => x?.type === "landline")
                  ?.value
              }
            </Text>
            <Text>
              {organization?.contact?.find((x) => x?.type === "website")?.value}
            </Text>
          </View>
          <View style={styles.headerRightOrgDetailsRight}>
            <Text>TIN: {organization?.details?.tin}</Text>
            <Text>DOH: {organization?.details?.doh_code}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Header.propTypes = {
  organization: PropTypes.instanceOf(Object),
};

Header.defaultProps = {
  organization: null,
};

export default Header;
