import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  signatureWrapper: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins",
    fontSize: 10.8,
    marginTop: 45,
    paddingTop: 15,
    marginHorizontal: 10,
    width: "100%",
  },
  signatureImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 5,
  },
  signatureImage: {
    height: 70,
    objectFit: "scale-down",
  },
  header: {
    fontSize: 12.6,
    minHeight: 22,
    marginBottom: 20,
  },
  doctorName: {
    // fontWeight: "bold",
  },
  doctorDetails: {
    fontFamily: "Source Code Pro",
  },
});

const Signature = ({ signature, customStyles, index }) => (
  <View style={{ ...styles.signatureWrapper, ...customStyles }}>
    <View style={styles.signatureImageContainer}>
      {signature?.date && signature?.url ? (
        <Image style={styles.signatureImage} src={signature?.url} />
      ) : (
        ""
      )}
    </View>
    <Text style={styles.header}>
      {signature?.header && !index ? signature?.header : ""}
    </Text>
    <View style={styles.doctorDetails}>
      <Text style={styles.doctorName}>{signature?.name}</Text>
      <Text>{signature?.title}</Text>
      {signature?.specializations ? (
        <Text>{signature?.specializations}</Text>
      ) : (
        ""
      )}
      {signature?.prc ? <Text>PRC: {signature?.prc}</Text> : ""}
      {signature?.date ? <Text>{signature?.date}</Text> : ""}
    </View>
  </View>
);

Signature.propTypes = {
  signature: PropTypes.instanceOf(Object),
  customStyles: PropTypes.instanceOf(Object),
};

Signature.defaultProps = {
  signature: null,
  customStyles: null,
};

export default Signature;
