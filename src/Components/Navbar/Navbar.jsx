import React from 'react'
import "./Navbar.css"

import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    
<div className="Navbar">
  <div className="n-wrapper">

    <div className="navbar">
        <Link to="/">
        <img className='logo' src='/images/Coinly Logo.svg' alt='Navbar coinly logo' />
        </Link>
       <nav>
          <ul className='nav_links'>
            <li>
                <NavLink to="/about">About us</NavLink>
            </li>
            <li>
                <NavLink to="/products">Products</NavLink>
            </li>
            <li>
                <NavLink to="/faq">Faq</NavLink>
            </li>
          </ul>
    
       </nav>

       <Link to="/ContactUs"><button className='cta'>Contact us</button></Link>
     </div>
  </div>
 </div>
  )
}

export default Navbar