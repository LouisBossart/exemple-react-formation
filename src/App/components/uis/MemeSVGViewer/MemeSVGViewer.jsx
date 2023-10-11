import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
const MemeSvgViewer = (props) => {
  const current = useSelector((s) => s.current);
  const images = useSelector((s) => s.ressources.images);
  // useEffect(() => {
  //  console.log('le meme a ete mis a jour declenchement du composant MemeSVG pour refresh')
  // }, [current])
  // console.log(current,images);
  return (
    <MemeSVGViewer
      {...props}
      meme={current}
      image={images.find((i) => i.id === current.imageId)}
    />
  );
};

MemeSvgViewer.propTypes = { basePath: PropTypes.string };

MemeSvgViewer.defaultProps = { basePath: "" };

export default MemeSvgViewer;
