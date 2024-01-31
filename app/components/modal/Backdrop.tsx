"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import classes from "./Backdrop.module.scss";

const Backdrop = () => {
  const [IsLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (IsLoaded) {
    return ReactDOM.createPortal(
      <div className={classes.Container}></div>,
      document.getElementById("backdrop")!
    );
  }
};

export default Backdrop;
