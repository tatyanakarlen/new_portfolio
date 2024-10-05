"use client"; // This must be the first line
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import useMediaQueries from "@/utils/UseMediaQuery";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home"); // Initialize active section
  const [isScreenMobile, setIsScreenMobile] = useState(false);
  const {
    isLgDesktopOrLaptop,
    isDesktopOrLaptop,
    isTablet,
    isMobile,
    isPortrait,
    isXsMobile,
  } = useMediaQueries();

  useEffect(() => {
    // Check if the screen is mobile or tablet
    const checkIfMobile = () => {
      if (isMobile || isTablet) {
        setIsScreenMobile(true);
      }
    };

    // Check on initial render
    checkIfMobile();

    // Optional: Add event listener to handle resize if needed
  }, [isMobile, isTablet]); // Depend on isMobile and isTablet

  // List of section IDs for tracking

  return (
    <Container className="text-light">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isScreenMobile={isScreenMobile}
      />

      <div className={`bg-danger ${styles.fakeSection}`} id="home">
        <h1>Home</h1>
      </div>
      <div className={`bg-primary ${styles.fakeSection}`} id="about">
        About
      </div>
      <div className={`bg-warning ${styles.fakeSection}`} id="skills">
        Skills
      </div>
      <div className={`bg-danger ${styles.fakeSection}`} id="projects">
        Projects
      </div>
      <div className={`bg-success ${styles.fakeSection}`} id="contact">
        Contact
      </div>
    </Container>
  );
}
