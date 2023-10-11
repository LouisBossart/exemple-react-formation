import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { changeMeme } from "../../../store/currentSlice";
import { Link } from "react-router-dom";
const MemeThumbnail = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <div className={styles.container}>
        {props.memes.map((m, i) => (
          <div onClick={props.onmemeclick(m)} key={"m"+i}>
            <Link to={"/editor/"+m.id}>
            <MemeSVGViewer
              meme={m}
              image={props.images.find((img) => img.id === m.imageId)}
              basePath=""
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
};
MemeThumbnail.defaultValue = {
  basePath: "",
  images:[],
  memes:[]
};

export default function ConnectedComponent(props) {
  const ressources = useSelector((s) => s.ressources);
  const d = useDispatch();
  return (
    <MemeThumbnail
      {...props}
      {...ressources}
    />
  );
}
