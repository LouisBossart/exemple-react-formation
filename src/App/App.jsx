import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeForm, {
  ConnectedMemeForm,
} from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";
import { emptyMeme } from "orsys-tjs-meme";
import { store } from "./store/store";
import MemeSVGViewer from './components/uis/MemeSVGViewer/MemeSVGViewer'
import {Modal} from "./components/Modal/Modal";
function App(props) {
 
  return (
    <>
    <div className="App">
      <FlexHGrow>
        <Header />
        <Navbar />
        <FlexWGrow>
          <MemeSVGViewer basePath="" />
          <ConnectedMemeForm />
        </FlexWGrow>
        <Footer />
      </FlexHGrow>
    </div>
    <Modal/>
    </>
  );
}

export default App;
