import { View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";

import TextField from "./TextFields";

const styles = StyleSheet.create({
  tableHeader: {
    fontSize: 10,
    // fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
});

const Header = ({ headers }) => (
  <View style={styles.tableHeader}>
    {headers.map((col) => (
      <TextField value={col.label} customStyles={col.styles} />
    ))}
  </View>
);

Header.propTypes = {
  headers: PropTypes.instanceOf(Array),
};

Header.defaultProps = {
  headers: [],
};

const ChargesTable = ({ headers, rows }) => (
  <View>
    <Header headers={headers} />
    <Rows headers={headers} rows={rows} />
  </View>
);

ChargesTable.propTypes = {
  headers: PropTypes.instanceOf(Array),
  rows: PropTypes.instanceOf(Array),
};

ChargesTable.defaultProps = {
  headers: [],
  rows: [],
};

export default ChargesTable;
