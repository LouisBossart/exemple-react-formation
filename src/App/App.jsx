import React from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";
import { Link, Route, Routes } from "react-router-dom";
import Thumbnail from "./pages/thumbnail";
import Editor from "./pages/Editor";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar  from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import Footer from "./components/uis/Footer/Footer";
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
        <FlexHGrow>
          <Header />
          <Navbar />
          <FlexWGrow>
            <Routes>
              <Route path="/" element={<div>Bienvenue</div>}/>
              <Route path="/home" element={<div>Bienvenue</div>}/>
              <Route path="/thumbnail" element={<Thumbnail />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/editor/:id" element={<Editor />} />
            </Routes>
          </FlexWGrow>
          <Footer/>
        </FlexHGrow>
      </div>
      <Modal />
    </>
  );
}

export default App;
