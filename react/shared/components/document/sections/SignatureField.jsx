import { View, StyleSheet, Image } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  signatureImageWrapper: {
    position: "absolute",
    padding: 0,
    margin: 0,
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  signatureImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

const SignatureField = ({ signature, ...signatureProps }) =>
  signature ? (
    <View style={styles.signatureImageWrapper}>
      <Image src={signature} style={styles.signatureImage} />
    </View>
  ) : (
    <></>
  );

SignatureField.propTypes = {
  signature: PropTypes.string,
};

SignatureField.defaultProps = {
  signature: null,
};

export default SignatureField;
