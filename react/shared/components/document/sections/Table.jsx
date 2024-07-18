import { View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

const Table = ({ headers, rows, noBackground, rowStyle, noSidePadding }) => (
  <>
    <TableHeader headers={headers} noSidePadding={noSidePadding} />
    <TableRows headers={headers} rows={rows} noBackground={noBackground} rowStyle={rowStyle} noSidePadding={noSidePadding} />
  </>
);

Table.propTypes = {
  headers: PropTypes.instanceOf(Array),
  rows: PropTypes.instanceOf(Array),
  noBackground: PropTypes.bool,
  rowStyle: PropTypes.instanceOf(Object),
};

Table.defaultProps = {
  headers: [],
  rows: [],
  noBackground: false,
  rowStyle: {},
};

export default Table;
