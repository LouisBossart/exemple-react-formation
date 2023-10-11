import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = (props) => {

  return (
    <div className={styles.Footer} data-testid="Footer" style={{textAlign:"center"}}>
      Copyright &copy; Orsys 2023
    </div>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
