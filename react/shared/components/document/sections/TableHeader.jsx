import { View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import TextField from "./TextFields";

const styles = StyleSheet.create({
  tableHeader: {
    fontSize: 10,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
  },
});

const TableHeader = ({ headers }) => (
  <View style={styles.tableHeader}>
    {headers.map((col) => (
      <TextField value={col.label} customStyles={col.styles} />
    ))}
  </View>
);

TableHeader.propTypes = {
  headers: PropTypes.instanceOf(Array),
};

TableHeader.defaultProps = {
  headers: [],
};

export default TableHeader;
