import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";
import styles from "./CustomBtn.module.css";
import Link from "next/link";

interface CustomBtnProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  link?: string;
  bgColor: string;
  textColor: string;
  icon?: ReactNode;
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  text,
  onClick,
  link,
  bgColor,
  textColor,
  icon, 
}) => {
  return (
    <div
    role="button"
    onClick={onClick} // Call the onClick function if it exists
    className={`${styles.btn} ${textColor} ${bgColor} ${
      textColor === "black" ? styles.blackText : ""
    } rounded-pill border-0 fw-bold py-2 px-5`}
  >
    {link ? (
      <Link href={link} passHref className="text-decoration-none text-light"> {/* Use Link for navigation */}
        <div className="d-flex gap-2 align-items-center">
          <span className="mb-1">{icon && icon}</span><span>{text}</span>
        </div> {/* Correct closing tag */}
      </Link>
    ) : (
      <div className="d-flex gap-2 align-items-center"><span className="mb-1">{icon && icon}</span><span>{text}</span> </div> // Just render the text when no link is provided
    )}
  </div>
  );
};

export default CustomBtn;
