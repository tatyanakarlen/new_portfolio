import React, { useState, useEffect } from "react";
import { Nav, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./NavBar.module.css";
import useMediaQueries from "@/utils/UseMediaQuery";


const NavBar = ({ activeSection, setActiveSection, isScreenMobile }) => {
  const handleClick = (section) => {
    setActiveSection(section);
  };

  const [isMobileNav, setIsMobileNav] = useState(false);
  const {
    isLgDesktopOrLaptop,
    isDesktopOrLaptop,
    isTablet,
    isMobile,
    isPortrait,
    isXsMobile,
  } = useMediaQueries();

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedStyleMeat = {};

  //   possible hamburger too
  let expandedNav = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: "rotate(-45deg)",
      marginTop: "25px",
      backgroundColor: "#fff",
    };
    expandedStyleBottomBun = {
      opacity: "0",
      transform: "rotate(45deg)",
    };
    expandedStyleMeat = {
      transform: "rotate(45deg)",
      marginTop: "-6px",
      backgroundColor: "#fff",
    };
    expandedNav = {
      top: "0",
      transform: "scale(1)",
    };
  }

  return (
    <>
      <div className={styles.mobileNav}>
        <div
          className={styles.hamburger}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <div style={expandedStyleTopBun} className={styles.topBun}></div>
          <div style={expandedStyleMeat} className={styles.meat}></div>
        </div>
        <div style={expandedNav} className={styles.nav}>
          <div className={styles.navWrapper}>
            <nav className={styles.innerNav}>
              <Link onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
                Home
              </Link>
              <br />
              <Link
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                href="#about"
              >
                About
              </Link>
              <br />
              <Link
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                href="#projects"
              >
                {" "}
                Projects
              </Link>
              <br />
              <br />
              <Link
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                href="#contact"
              >
                {" "}
                Contact
              </Link>
              <br />
            </nav>
          </div>
        </div>
      </div>

      <Nav className={`w-100 fixed-top py-3 ${styles.desktopNav}`}>
        <Container className="d-flex justify-content-between">
          <div>
            <h5 className={styles.navBrand}>Tatyana Karlen</h5>
          </div>
          <div className="d-flex gap-3">
            <Nav.Item>
              <Link
                onClick={() => handleClick("home")}
                className={activeSection === "home" ? styles.active : ""}
                href="#home"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                onClick={() => handleClick("about")}
                className={activeSection === "about" ? styles.active : ""}
                href="#about"
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                onClick={() => handleClick("skills")}
                className={activeSection === "skills" ? styles.active : ""}
                href="#skills"
              >
                Skills
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                onClick={() => handleClick("projects")}
                className={activeSection === "projects" ? styles.active : ""}
                href="#projects"
              >
                Projects
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                onClick={() => handleClick("contact")}
                className={activeSection === "contact" ? styles.active : ""}
                href="#contact"
              >
                Contact
              </Link>
            </Nav.Item>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
