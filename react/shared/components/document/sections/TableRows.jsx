import { View, StyleSheet, Text } from "@react-pdf/renderer";
import PropTypes from "prop-types";
// import TextField from "./TextFields";

const styles = StyleSheet.create({
  cell: {
    flexWrap: "wrap",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    fontSize: 8,
    padding: 10,
    fontFamily: "Source Code Pro",
  },
  tableRowOdd: {
    backgroundColor: "#f0f3f9",
  },
  tableRowNoBg: {
    padding: 3,
  },
});

const TableRows = ({ headers, rows, noBackground, rowStyle, noSidePadding }) => {
  // console.log("Table keys", keys);
  console.log("Table rows", rows);
  return (
    <>
      {rows.map((row, index) => {
        const isOdd = Math.abs((index + 1) % 2) === 1;
        const style = [styles.tableRow, ...[rowStyle || []], ...[row.style || []]];

        if (noBackground) style.push(styles.tableRowNoBg);
        if (!noBackground && isOdd) style.push(styles.tableRowOdd);
        if (noSidePadding) style.push({ paddingLeft: 0, paddingRight: 0 });

        return (
          <View style={style}>
            {headers.map((col) => (
              <View
                style={{
                  ...styles.cellStyles,
                  ...(col.styles || {}),
                  ...(col?.cellStyles || {}),
                  ...(row?.indent?.colName === col.key ? { paddingLeft: row.indent.value } : {}),
                }}
              >
                <Text>{col.formatter ? col.formatter(row[col.key]) : row[col.key]}</Text>
              </View>
            ))}
          </View>
        );
      })}
    </>
  );
};

TableRows.propTypes = {
  headers: PropTypes.instanceOf(Array),
  rows: PropTypes.instanceOf(Array),
  rowStyle: PropTypes.instanceOf(Object),
  noBackground: PropTypes.bool,
};

TableRows.defaultProps = {
  headers: [],
  rows: [],
  rowStyle: {},
  noBackground: false,
};

export default TableRows;
