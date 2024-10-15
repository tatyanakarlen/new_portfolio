import React from 'react'
import styles from './Footer.module.css'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container className="align-items-center py-3">
      <p className="text-right mb-0">&copy; 2024 Tatyana Karlen. All rights reserved.</p>
      </Container>
    </div>
  )
}

export default Footer
