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
import MemeSVGViewer from "./components/uis/MemeSVGViewer/MemeSVGViewer";
import { Modal } from "./components/Modal/Modal";
import { Link, Route, Routes } from "react-router-dom";
import Thumbnail from "./pages/thumbnail";
import Editor from "./pages/Editor";
function App(props) {
  return (
    <>
      <div className="App">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/thumbnail"> |Thumbnail</Link>
          <Link to="/editor"> | EDITOR</Link>
          <Link to="/editor/2"> | EDITOR/2</Link>
        </div>
        <Routes>
          <Route path="/" element={<div>Bienvenue</div>}></Route>
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/editor/:id" element={<Editor/>} />
        </Routes>
      </div>
      <Modal />
    </>
  );
}

export default App;
