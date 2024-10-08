"use client"; // This must be the first line
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import projects from "@/data/projects";

export default function Main() {
  const [activeSection, setActiveSection] = useState("home"); // Initialize active section
  console.log(projects, 'projects')

  return (
    <div className="w-100 text-light h-100">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
