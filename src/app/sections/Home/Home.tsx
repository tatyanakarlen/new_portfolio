import React from "react";
import styles from "./Home.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";

// text, onClick, link, bgColor, textColor

const Home = () => {
  return (
    <div className={`${styles.home} d-flex align-items-center`}>
      <div className={`${styles.textContainer} d-flex flex-column gap-3`}>
        <h5
          className={`${styles.hiThere} d-flex gap-2 align-items-center text-light mb-0`}
        >
          <span>&#128075;</span> <span>Hi there!</span>
        </h5>
        <h1 className={`${styles.h1} mt-2 w-75 fw-bold mb-0`}>
          I'm Tatyana, a full-stack developer
        </h1>
        <hr className={styles.hrDeveloper}></hr>
        <h4 className={`${styles.h4} w-75`}>
          Specializing in front-end development and UI/UX.
        </h4>
        <div className="d-flex gap-3 mt-3">
          <CustomBtn text="LinkedIn" bgColor="hotPinkBtn" textColor="black" />
          <CustomBtn
            text="Github"
            textColor="text-light"
            bgColor="darkGreyBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
