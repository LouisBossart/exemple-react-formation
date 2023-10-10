import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = (props) => {
  const [state, setstate] = useState({});
  useEffect(() => {
    return () => {
    };
  }, [])
  return (
    <div className={styles.Header} data-testid="Header">
      Header Component
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
