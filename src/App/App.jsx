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
import {useDispatch} from 'react-redux'
//import { fillImages } from "./store/ressourcesSlice";
function App(props) {
  //const d=useDispatch()
//  useEffect(() => {
//    fetch('http://localhost:5679/images').then(r=>r.json()).then(arr=>d(fillImages({images:arr})))
//  }, [])
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
