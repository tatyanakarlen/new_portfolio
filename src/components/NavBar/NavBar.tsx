import React from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
    <div>My Portfolio</div>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/projects"><a>Projects</a></Link></li>
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
  </nav>
  )
}

export default NavBar
