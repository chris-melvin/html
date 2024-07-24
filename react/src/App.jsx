import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { PDFViewer } from "@react-pdf/renderer";

import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import CF3 from "./components/cf3";
// import ClaimForm1 from "../shared/components/document/ClaimForm/forms/ClaimForm1";
// import ClaimForm4 from "../shared/components/document/ClaimForm/forms/ClaimForm4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ width: "100vw", overflowY: "hidden" }}>
      <PDFViewer width="100%" height={700}>
        <CF3 />
      </PDFViewer>
    </div>
  );
}

export default App;
