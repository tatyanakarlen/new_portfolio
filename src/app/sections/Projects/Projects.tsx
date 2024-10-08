import React from 'react'
import styles from './Projects.module.css'
import { Container } from 'react-bootstrap'


const Projects = () => {
  return (
    <div id="projects" className={`${styles.projects}`}>
        <Container className="section">
        <h3 className="fw-semibold">Projects</h3>
        </Container>
      
    </div>
  )
}

export default Projects
