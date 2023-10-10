import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeSVGViewer.module.css";

const MemeSvgViewer = (props) => {
  const [state, setstate] = useState({});
  useEffect(() => {
    return () => {
    };
  }, [])
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer Component
    </div>
  );
};

MemeSvgViewer.propTypes = {};

MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer;
