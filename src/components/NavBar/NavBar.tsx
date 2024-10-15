import React, { useState, useEffect } from "react";
import { Nav, Container } from "react-bootstrap";
import Link from "next/link";
import styles from "./NavBar.module.css";
import { FaHeart } from "react-icons/fa";
import { GiSpanner } from "react-icons/gi";

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const handleClick = (section: string) => {
    setActiveSection(section);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = id === "home" || id === "contact" ? 0 : 75; // Offset for margin
      const y = section.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found in the DOM`);
    }
  };

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
      {/* <h4 className={`${styles.mobileNavBrand} mt-3`}>Tatyana Karlen</h4> */}
      <div className={styles.mobileNav}>
        <div
          className={`${styles.hamburger}`}
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <div style={expandedStyleTopBun} className={styles.topBun}></div>
          <div style={expandedStyleMeat} className={styles.meat}></div>
        </div>

        <div style={expandedNav} className={styles.nav}>
          <div className={styles.navWrapper}>
            <nav className={styles.innerNav}>
              <span
                className={activeSection === "home" ? styles.active : ""}
                onClick={() => {
                  handleClick("home");
                  scrollToSection("home");
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                Home
              </span>

              <span
                className={activeSection === "about" ? styles.active : ""}
                onClick={() => {
                  handleClick("about");
                  scrollToSection("about");
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                About
              </span>

              <span
                className={activeSection === "skills" ? styles.active : ""}
                onClick={() => {
                  handleClick("skills");
                  scrollToSection("skills");
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {" "}
                Skills
              </span>

              <span
                className={activeSection === "projects" ? styles.active : ""}
                onClick={() => {
                  handleClick("projects");
                  scrollToSection("projects");
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {" "}
                Projects
              </span>
              <span
                className={activeSection === "contact" ? styles.active : ""}
                onClick={() => {
                  handleClick("contact");
                  scrollToSection("contact");
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {" "}
                Contact
              </span>
            </nav>
          </div>
        </div>
      </div>

      <Nav className={`w-100 fixed-top py-4 pb-4 ${styles.desktopNav}`}>
        <Container className="d-flex justify-content-between">
          <div>
            <h5 className={`${styles.navBrand}`}>Tatyana Karlen</h5>
          </div>
          <div className="d-flex gap-4">
            <Nav.Item>
              <span
                onClick={() => {
                  scrollToSection("home");
                  handleClick("home");
                }}
                className={activeSection === "home" ? styles.active : ""}
              >
                Home
              </span>
            </Nav.Item>
            <Nav.Item>
              <span
                onClick={() => {
                  scrollToSection("about");
                  handleClick("about");
                }}
                className={activeSection === "about" ? styles.active : ""}
              >
                About
              </span>
            </Nav.Item>
            <Nav.Item>
              <span
                onClick={() => {
                  scrollToSection("skills");
                  handleClick("skills");
                }}
                className={activeSection === "skills" ? styles.active : ""}
              >
                Skills
              </span>
            </Nav.Item>
            <Nav.Item>
              <span
                onClick={() => {
                  scrollToSection("projects");
                  handleClick("projects");
                }}
                className={activeSection === "projects" ? styles.active : ""}
              >
                Projects
              </span>
            </Nav.Item>
            <Nav.Item>
              <span
                onClick={() => {
                  scrollToSection("contact");
                  handleClick("contact");
                }}
                className={activeSection === "contact" ? styles.active : ""}
              >
                Contact
              </span>
            </Nav.Item>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
