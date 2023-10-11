import React, { useEffect, useState } from "react";
import "./App.css";
import FlexHGrow from "./components/layouts/FlexHGrow/FlexHGrow";
import Header from "./components/uis/Header/Header";
import Navbar from "./components/uis/Navbar/Navbar";
import FlexWGrow from "./components/layouts/FlexWGrow/FlexWGrow";
import MemeForm from "./components/functionnals/MemeForm/MemeForm";
import Footer from "./components/uis/Footer/Footer";
import { MemeSVGViewer, emptyMeme } from "orsys-tjs-meme";
import {Modal} from "./components/Modal/Modal";
import {Provider} from 'react-redux'
import { store } from "./store/store";
function App(props) {
  const [state, setstate] = useState(emptyMeme);
  const [images, setimages] = useState([]);
  const [modal, setmodal] = useState({
    title: "titre",
    isOpen: true,
    message: "message",
  });
  useEffect(() => {
    fetch("http://localhost:5679/images")
      .then((resp) => resp.json())
      .then((arr) => setimages(arr));
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <FlexHGrow>
          <Header />
          <Navbar />
          <FlexWGrow>
            <MemeSVGViewer basePath="" meme={state} />
            <MemeForm
              images={images}
              meme={state}
              onMemeChange={(meme) => {
                setstate(meme);
              }}
            />
          </FlexWGrow>
          <Footer />
        </FlexHGrow>
      </div>
      <Modal  />
    </Provider>
  );
}

export default App;
