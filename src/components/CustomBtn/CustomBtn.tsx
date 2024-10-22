import React, { ReactNode } from "react";
import styles from "./CustomBtn.module.css";
import Link from "next/link";
import { Button } from "react-bootstrap";

interface CustomBtnProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // For buttons
  link?: string;
  bgColor: string;
  textColor: string;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset"; // Optional valid button types
}

const CustomBtn: React.FC<CustomBtnProps> = ({
  text,
  onClick,
  link,
  bgColor,
  textColor,
  icon,
  type, // Keep this optional and only use it when necessary
}) => {
  const isButton = !link; // Determine if it's a button or link

  return isButton ? (
    <Button
      type={type || "button"} // Default to 'button' if type is not provided
      onClick={onClick}
      className={`${styles.btn} ${textColor} ${bgColor} ${
        textColor === "black" ? styles.blackText : ""
      } rounded-pill border-0 fw-bold py-2 px-5`}
    >
      <div className="d-flex gap-2 align-items-center">
        {icon && <span className="mb-1">{icon}</span>}
        <span>{text}</span>
      </div>
    </Button>
  ) : (
    <Link href={link} passHref className="text-decoration-none text-light">
      <div
        className={`${styles.btn} ${textColor} ${bgColor} ${
          textColor === "black" ? styles.blackText : ""
        } rounded-pill border-0 fw-bold py-2 px-5 d-flex gap-2 align-items-center`}
      >
        {icon && <span className="mb-1">{icon}</span>}
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default CustomBtn;
