import React from "react";
import styles from "./About.module.css";
import { Container } from "react-bootstrap";
import AboutSvg from "./svg/AboutSvg";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { FaDownload } from "react-icons/fa";
import useMediaQueries from "@/utils/UseMediaQuery";

const About = () => {
  const { isMobile, isXsMobile } = useMediaQueries();

  return (
    <div id="about" className={`${styles.about}`}>
      <Container className={`${styles.aboutContainer} d-flex section gap-5`}>
        <div className="d-flex justify-content-center align-items-center pe-5">
          <AboutSvg />
        </div>
        <div className={styles.contentWrapper}>
          <h2 className="fw-semibold">
          I am a passionate multi-skilled developer
            {!isMobile || (!isXsMobile && <br />)} based in Toronto
          </h2>
          <p className={`${styles.aboutText} mt-4 fw-light`}>
            With over 2.5 years of experience in software development, I have a
            unique background in fashion, piano performance and music pedagogy.
            Drawing from my creative foundation, I now build intuitive and
            visually appealing full-stack applications. My expertise in
            front-end development and UI/UX design allows me to seamlessly merge
            functionality with aesthetics, ensuring that every project resonates
            with users. I am excited to continue combining my artistic vision
            with my technical skills to create impactful and innovative
            solutions.
          </p>
          <div className={`${styles.btnContainer}`}>
            <CustomBtn
              /// add resume download
              icon={<FaDownload />}
              text="Resume"
              bgColor="hotPinkBtn"
              textColor="black"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
