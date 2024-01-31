"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";

import classes from "./Modal.module.scss";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (IsLoaded) {
    return ReactDOM.createPortal(
      <>
        <Backdrop />
        <div className={classes.Container}>{children}</div>
      </>,
      document.getElementById("modal")!
    );
  }
};

export default Modal;
