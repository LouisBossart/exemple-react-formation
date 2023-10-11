import React from "react";
import "./App.css";
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
