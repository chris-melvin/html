import { View, StyleSheet } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import TextField from "./TextFields";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 1,
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  containerVertical: {
    flexDirection: "column",
  },
  label: {
    // fontWeight: "bold",
  },
  value: {
    paddingLeft: 10,
    alignItems: "flex-start",
  },
});

const SectionField = ({
  field,
  customContainerStyles,
  customLabelStyles,
  vertical,
}) => {
  if (!field?.label && !field?.value) return "";
  return (
    <View
      style={{
        ...styles.container,
        ...(vertical ? styles.containerVertical : null),
        ...customContainerStyles,
      }}
    >
      <View style={{ ...styles.label, ...(customLabelStyles || {}) }}>
        <TextField value={field?.label} />
      </View>
      <View
        style={{
          ...styles.value,
          ...(vertical ? { paddingLeft: 0, paddingTop: 6 } : null),
        }}
      >
        {field?.valueIsComponent ? (
          field?.value
        ) : (
          <TextField value={field?.value} />
        )}
      </View>
    </View>
  );
};

SectionField.propTypes = {
  field: PropTypes.instanceOf(Object),
  customContainerStyles: PropTypes.instanceOf(Object),
  customLabelStyles: PropTypes.instanceOf(Object),
  vertical: PropTypes.bool,
};

SectionField.defaultProps = {
  field: {},
  customContainerStyles: null,
  customLabelStyles: null,
  vertical: false,
};

export default SectionField;
