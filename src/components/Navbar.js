import React from 'react'
import './Navbar.css'
const Navbar = (props) => {
  return (
    <nav className="navbar">
        <div className='logo'>ANKIT</div>
        <div className="link-container">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </div>
        <button className="nav-btn">CONTACT ME</button>
    </nav>
  )
}

export default Navbar