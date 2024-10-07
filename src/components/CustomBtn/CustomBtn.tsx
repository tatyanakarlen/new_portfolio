import React from "react";
import { Button } from "react-bootstrap";
import styles from './CustomBtn.module.css'

const CustomBtn = ({ text, onClick, link, bgColor, textColor }) => {
  return (
    <div className={`${styles.btn} ${textColor} ${bgColor} ${textColor === "black" && styles.blackText} rounded-pill border-0 fw-bold py-2 px-5`}>
      {text}
    </div>
  );
};

export default CustomBtn;