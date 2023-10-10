import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexWGrow.module.css";

const FlexWGrow = (props) => {
  return (
    <div className={styles.FlexWGrow} data-testid="FlexWGrow">
      {props.children}
    </div>
  );
};

FlexWGrow.propTypes = {
  children: PropTypes.any.isRequired,
};

FlexWGrow.defaultProps = {};

export default FlexWGrow;
