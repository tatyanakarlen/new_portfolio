import React from "react";
import styles from "./Home.module.css";
import CustomBtn from "@/components/CustomBtn/CustomBtn";
import { Image, Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import useMediaQueries from "@/utils/UseMediaQuery";

const Home: React.FC = () => {
  const { isXsMobile } = useMediaQueries();

  const image: string = "/images/bio.jpg";

  return (
    <Container>
      <div id="home" className={`${styles.home} d-flex align-items-center`}>
        <div className={`${styles.innerWrapper} w-100`}>
          <div
            className={`${styles.textContainer} d-flex flex-column gap-3 mt-3 w-100`}
          >
            <h5
              className={`${styles.hiThere} d-flex gap-2 align-items-center text-light mb-0`}
            >
              <span>&#128075;</span> <span>Hi there!</span>
            </h5>
            <h1 className={`${styles.h1} fw-bold mb-0`}>
              I&#39;m Tatyana, a full-stack{!isXsMobile && <br />} developer
            </h1>
            <hr className={styles.hrDeveloper}></hr>
            <h4 className={`${styles.h4}`}>
              Specializing in front-end development and
              {!isXsMobile && <br></br>} UI/UX.
            </h4>
            <div className={`${styles.btnContainer} w-100 d-flex gap-3 mt-3`}>
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

          <div className={`${styles.imgContainer}`}>
            <Image
              alt="developer bio image"
              className={styles.bioImage}
              roundedCircle
              src="https://res.cloudinary.com/poodlelady/image/upload/v1750011445/Bio%20pics/bio_f7zjxf.jpg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
