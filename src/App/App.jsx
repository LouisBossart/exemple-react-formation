import React from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeSvgViewer from "./components/uis/MemeSVGViewer/MemeSVGViewer";
import MemeForm from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";

function App(props) {
  return (
    <div className="App">
      <FlexHGrow>
        <Header />
        <Navbar />
        <FlexWGrow>
          <MemeSvgViewer />
          <MemeForm />
        </FlexWGrow>
        <Footer />
      </FlexHGrow>
    </div>
  );
}

export default App;
