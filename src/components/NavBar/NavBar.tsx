import React, { useState, useEffect, useRef } from "react";
import { Nav, Container } from "react-bootstrap";
import styles from "./NavBar.module.css";

interface NavBarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, setActiveSection }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = ["home", "about", "skills", "projects", "contact"];

 

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = sectionRefs.current[id];
        if (section) observer.unobserve(section);
      });
    };
  }, [setActiveSection]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = id === "home" || id === "contact" ? 0 : 75;
      const y = section.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found in the DOM`);
    }
  };

  const scrollToSectionMobile = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = id === "home" || id === "contact" ? 0 : 40;
      const y = section.getBoundingClientRect().top + window.scrollY - yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.warn(`Section with id "${id}" not found in the DOM`);
    }
  };

  let expandedStyleTopBun = {};
  let expandedStyleMeat = {};
  let expandedNav = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: "rotate(-45deg)",
      marginTop: "25px",
      backgroundColor: "#fff",
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
              {sections.map((section) => (
                <span
                  key={section}
                  className={activeSection === section ? styles.active : ""}
                  onClick={() => {
                    scrollToSectionMobile(section);
                    setActiveSection(section);
                    setIsNavExpanded(false);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              ))}
            </nav>
            {/* <nav className={styles.innerNav}>
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
            </nav> */}
          </div>
        </div>
      </div>

      <Nav className={`w-100 fixed-top py-4 pb-4 ${styles.desktopNav}`}>
        <Container className="d-flex justify-content-between">
          <div>
            <h5 className={`${styles.navBrand}`}>Tatyana Karlen</h5>
          </div>
          <div className="d-flex gap-4">
            {sections.map((section) => (
              <Nav.Item key={section}>
                <span
                  onClick={() => {
                    scrollToSection(section);
                    setActiveSection(section);
                  }}
                  className={activeSection === section ? styles.active : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Nav.Item>
            ))}
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
