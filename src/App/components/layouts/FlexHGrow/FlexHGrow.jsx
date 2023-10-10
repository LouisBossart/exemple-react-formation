import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexHGrow.module.css";

const FlexHGrow = (props) => {
  return (
    <div className={styles.FlexHGrow} data-testid="FlexHGrow">
      {props.children}
    </div>
  );
};

FlexHGrow.propTypes = {
  children: PropTypes.any.isRequired,
};

FlexHGrow.defaultProps = {};

export default FlexHGrow;
