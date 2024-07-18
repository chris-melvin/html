import { Text, View, StyleSheet } from "@react-pdf/renderer";

const ListItem = ({ children, style }) => (
  <View style={[styles.row, style]}>
    <View style={styles.bullet}>
      <Text>{"\u2022" + " "}</Text>
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  bullet: {
    height: "100%",
  },
});

export default ListItem;
