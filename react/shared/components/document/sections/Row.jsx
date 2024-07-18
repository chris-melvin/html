import { View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  row: {
    display: "flex",
    flexDirection: "row",
  },
});

const Row = ({ children, wrap, customStyles = {} }) => (
  <View style={{ ...styles.row, ...customStyles, flexWrap: wrap ? "wrap" : undefined }}>{children}</View>
);

Row.propTypes = {
  children: PropTypes.node,
  wrap: PropTypes.bool,
  customStyles: PropTypes.instanceOf(Object),
};

Row.defaultProps = {
  children: null,
  wrap: false,
  customStyles: null,
};

export default Row;
