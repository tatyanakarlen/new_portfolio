import React from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBtn.module.css";
import Link from "next/link";

interface CustomBtnProps {
  text: string;
  onClick?: () => void; // optional
  link?: string;
  bgColor: string;
  textColor: string;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  text,
  onClick,
  link,
  bgColor,
  textColor,
}) => {
  return (
    <div
    onClick={onClick} // Call the onClick function if it exists
    className={`${styles.btn} ${textColor} ${bgColor} ${
      textColor === "black" ? styles.blackText : ""
    } rounded-pill border-0 fw-bold py-2 px-5`}
  >
    {link ? (
      <Link href={link} passHref className="text-decoration-none text-light"> {/* Use Link for navigation */}
        {text}
      </Link>
    ) : (
      text // Just render the text when no link is provided
    )}
  </div>
  );
};

export default CustomBtn;
