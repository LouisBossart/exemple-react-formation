import React, { useEffect, useState } from "react";
import MemeSvgViewer from "../components/uis/MemeSVGViewer/MemeSVGViewer";
import { ConnectedMemeForm } from "../components/functionnals/MemeForm/MemeForm";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMeme, clearMeme } from "../store/currentSlice";

export default function Editor(props) {
  //const [state, setstate] = useState({params:undefined,memes:undefined})
  const params = useParams();
  const memes = useSelector((s) => s.ressources.memes);
  const navigate = useNavigate();
  const d = useDispatch();
  console.log(params);
  useEffect(() => {
    if (undefined === params.id) {
      d(clearMeme());
    } else {
      const current = memes.find((m) => m.id === Number(params.id));
      if (undefined !== current) {
        d(changeMeme(current));
      } else if (memes.length !== 0) {
        navigate("/editor");
        //pas de meme avec l'id present dans les param .... redirection vers un nouveau meme
      }
    }
  }, [memes, params, d, navigate]);
  return (
    <>
      <MemeSvgViewer basePath="" />
      <ConnectedMemeForm />
    </>
  );
}
