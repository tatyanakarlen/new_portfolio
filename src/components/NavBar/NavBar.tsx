import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = ( {activeSection, setActiveSection} ) => {

  const handleClick = (section) => {
    setActiveSection(section);
  };


  return (
    <nav className={`d-flex w-100 ${styles.nav}`}>
   
    <ul className={`${styles.ul} d-flex`}>
      <li><Link 
       onClick={() => handleClick('home')}
      className={activeSection === 'home' ? styles.active : ''} href="#home">Home</Link></li>
      <li><Link 
       onClick={() => handleClick('about')}
      className={activeSection === 'about' ? styles.active : ''} href="#about">About</Link></li>
      <li><Link 
       onClick={() => handleClick('projects')}
      className={activeSection === 'projects' ? styles.active : ''} href="#projects">Projects</Link></li>
      <li><Link 
       onClick={() => handleClick('contact')}
      className={activeSection === 'contact' ? styles.active : ''} href="#contact">Contact</Link></li>
    </ul>
  </nav>
  )
}

export default NavBar
