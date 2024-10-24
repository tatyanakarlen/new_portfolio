"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "@/components/NavBar/NavBar";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

export default function Main() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="text-light">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
