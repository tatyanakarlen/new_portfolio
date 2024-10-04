"use client"; // This must be the first line
import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {

  const [activeSection, setActiveSection] = useState('home'); // Initialize active section

  

  return (
   <div className="text-light">
    <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
   
    <div className={`bg-danger ${styles.fakeSection}`} id="home"><h1>Home</h1></div>
    <div  className={`bg-primary ${styles.fakeSection}`} id="about">About</div>
    {/* <div className={`bg-warning ${styles.fakeSection}`} id="skills">Skills</div> */}
    <div className={`bg-danger ${styles.fakeSection}`}  id="projects">Projects</div>
    <div className={`bg-success ${styles.fakeSection}`}  id="contact">Contact</div>
   </div>
  );
}
