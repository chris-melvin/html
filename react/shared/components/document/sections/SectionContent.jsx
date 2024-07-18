import { View } from "@react-pdf/renderer";

const SectionContent = ({ children, style, debug = false }) => (
  <View
    style={[
      {
        margin: 0,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "black",
      },
      style,
    ]}
    debug={debug}
  >
    {children}
  </View>
);

export default SectionContent;
