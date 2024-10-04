"use client"; // This must be the first line
import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {

  const [activeSection, setActiveSection] = useState('home'); // Initialize active section

  // Handle scroll event
  const handleScroll = () => {
    const scrollPos = window.scrollY; // Get current scroll position

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section); // Get section element by ID
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop; // Get the top position of the section
        const sectionHeight = sectionElement.offsetHeight; // Get the height of the section

        // Check if the scroll position is within this section's range
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(section); // Update the active section state
        }
      }
    });
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  // List of section IDs for tracking
  const sections = ['home', 'about', 'projects', 'contact'];
  return (
   <div className="text-light">
    <NavBar activeSection={activeSection}/>
   
    <div className={`bg-danger ${styles.fakeSection}`} id="home"><h1>Home</h1></div>
    <div  className={`bg-primary ${styles.fakeSection}`} id="about">About</div>
    {/* <div className={`bg-warning ${styles.fakeSection}`} id="skills">Skills</div> */}
    <div className={`bg-danger ${styles.fakeSection}`}  id="projects">Projects</div>
    <div className={`bg-success ${styles.fakeSection}`}  id="contact">Contact</div>
   </div>
  );
}
