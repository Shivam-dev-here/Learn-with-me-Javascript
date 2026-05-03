import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <a href="/"><li>Home</li></a>
        <a href="/"><li>About</li></a>
        <a href="/"><li>Contact</li></a>
      </nav>
    </div>
  )
}

export default Navbar
