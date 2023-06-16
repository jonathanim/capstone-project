import React from 'react'
import mainLogo from "./assets/little-lemon-title.png"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav-container'>
        <ul className='nav-ul'>
            <li>   <img src={mainLogo} className='nav-logo' alt='little lemon main logo'/>    {/* logo */}</li>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
</nav>
  )
}

export default Nav
