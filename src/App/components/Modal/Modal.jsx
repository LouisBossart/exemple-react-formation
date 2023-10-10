import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Button } from "react-bootstrap";

const Modal = (props) => {
  return props.isOpen ? (
    <div className={styles.Modal} data-testid="Modal">
      <div>
        {props.title && <div className={styles.title}>{props.title}</div>}
        <div className={styles.message}>
          <div>{props.message}</div>
        </div>
        <div className={styles.buttons}>
          <Button
            onClick={(evt) => {
              props.onOk();
            }}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.any.isRequired,
  onOk: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

Modal.defaultProps = { isOpen: false };

export default Modal;
