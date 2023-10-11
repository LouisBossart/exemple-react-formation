import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { changeMeme } from "../../../store/currentSlice";
const MemeThumbnail = (props) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      <div clasName={styles.container}>
        {props.memes.map((m, i) => (
          <div onClick={props.onmemeclick(m)} key={i}>
            <MemeSVGViewer
              meme={m}
              image={props.images.find((img) => img.id === m.imageId)}
              basePath={props.basePath}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

MemeThumbnail.propTypes = {
  memes: PropTypes.array.isRequired,
  images: PropTypes.array.isRequired,
  basePath: PropTypes.string,
  onmemeclick: PropTypes.func.isRequired,
};
MemeThumbnail.defaultValue = {
  basePath: "",
};

export default function ConnectedComponent(props) {
  const ressources = useSelector((s) => s.ressources);
  const d = useDispatch();
  return (
    <MemeThumbnail
      {...props}
      {...ressources}
      onmemeclick={(meme) => {
        d(changeMeme(meme));
      }}
    ></MemeThumbnail>
  );
}
