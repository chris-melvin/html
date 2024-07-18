import { Text } from "@react-pdf/renderer";
import PropTypes from "prop-types";

const TextField = ({ value, children, customStyles }) => (
  <Text style={{ ...customStyles }}>
    {value || ""}
    {children}
  </Text>
);

TextField.propTypes = {
  value: PropTypes.any,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.instanceOf(Array)]),
  customStyles: PropTypes.instanceOf(Object),
};

TextField.defaultProps = {
  value: "",
  children: undefined,
  customStyles: {},
};

export default TextField;
