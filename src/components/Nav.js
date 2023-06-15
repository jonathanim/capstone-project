import React from 'react'
import mainLogo from "./assets/Lemon-logo.ico"

const Nav = () => {
  return (
    <nav>
        <div>
            <img src={mainLogo} alt='little lemon main logo'/>    {/* logo */}
        </div>
        <ul>
            <li>menu</li>
            <li>reserve</li>
            <li>order</li>
            <li>about us</li>
        </ul>
   
</nav>
  )
}

export default Nav
