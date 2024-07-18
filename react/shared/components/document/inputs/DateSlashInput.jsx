import { StyleSheet } from "@react-pdf/renderer";
import React from "react";
import Row from "../layout/Row";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  input: {
    marginRight: 3,
  },
});

const DateSlashInput = ({ value, withPlaceholder = true, style }) => (
  <Row style={style}>
    <TextInput label="Date:" value={value?.day} style={styles.input} placeholder={withPlaceholder ? "DD" : undefined} />
    <TextInput label="/" value={value?.month} style={styles.input} placeholder={withPlaceholder ? "MM" : undefined} />
    <TextInput
      label="/"
      value={value?.year}
      style={styles.input}
      width={40}
      placeholder={withPlaceholder ? "YYYY" : undefined}
    />
  </Row>
);

export default DateSlashInput;
