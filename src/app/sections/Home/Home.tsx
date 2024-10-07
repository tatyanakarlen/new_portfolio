import React from "react";
import styles from "./Home.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { Image, Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Home: React.FC = () => {
  const image: string = "/images/bio.jpg";

  return (
    <Container>
      <div className={`${styles.home} d-flex align-items-center`}>
        <div
          className={`${styles.innerWrapper} w-100 d-flex align-items-center justify-content-between`}
        >
          <div
            className={`${styles.textContainer} d-flex flex-column gap-3 mt-3`}
          >
            <h5
              className={`${styles.hiThere} d-flex gap-2 align-items-center text-light mb-0`}
            >
              <span>&#128075;</span> <span>Hi there!</span>
            </h5>
            <h1 className={`${styles.h1} fw-bold mb-0`}>
              I'm Tatyana, a full-stack<br></br> developer
            </h1>
            <hr className={styles.hrDeveloper}></hr>
            <h4 className={`${styles.h4}`}>
              Specializing in front-end development and<br></br> UI/UX.
            </h4>
            <div className="d-flex gap-3 mt-3">
              <CustomBtn
                link="https://www.linkedin.com/in/tatyanakarlen/"
                text="LinkedIn"
                bgColor="hotPinkBtn"
                textColor="black"
                icon={<FaLinkedin />}
              />
              <CustomBtn
                link="https://github.com/tatyanakarlen"
                text="Github"
                textColor="text-light"
                bgColor="darkGreyBtn"
                icon={<FaGithub />}
              />
            </div>
          </div>
          {/* // default styling */}
          <div className="pe-5 me-5">
            <Image
              className={styles.bioImage}
              roundedCircle
              width={400}
              height={400}
              src={image}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
