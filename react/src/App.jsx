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
    <div>
      <PDFViewer width="1300" height="800">
        <CF3 />
        {/* <ClaimForm1 /> */}
        {/* <ClaimForm4 /> */}
      </PDFViewer>
    </div>
  );
}

export default App;
