import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/skills">Skills</a></li>
        <i class="fa-solid fa-sun modeChanger"></i>
      </ul>
    </nav>
  )
}

export default Navbar