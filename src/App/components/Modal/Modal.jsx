import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hide } from "../../store/modalSlice";

const UModal = (props) => {
  console.log(props);
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

UModal.propTypes = {
  title: PropTypes.string,
  message: PropTypes.any.isRequired,
  onOk: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

UModal.defaultProps = { isOpen: false };

export const UnconnectedModal = UModal;

export const Modal = (props) => {
  const state = useSelector((s) => s.modal);
  const d = useDispatch();
  console.log(hide());
  const okfn = () => {
    d(hide());
  };
  return <UModal {...props} {...state} onOk={okfn}></UModal>;
};