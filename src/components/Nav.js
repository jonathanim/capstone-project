import React from 'react'
import mainLogo from "./assets/little-lemon-title.png"
import "./Nav.css"
import { Link } from 'react-router-dom'



const Nav = () => {

  const links = [
    {name:"Home", path: "/"},
    {name:"About", path: "/"},
    {name:"Menu", path: "/"},
    {name:"Reservation", path: "/reservation"},
    {name:"Order Online", path: "/"},
    {name:"Login", path: "/"},
  ]



  return (
    <nav className='nav-container'>
        <ul className='nav-ul'>
            <li><Link to='/'><img src={mainLogo} className='nav-logo' alt='little lemon main logo'/> </Link> {/* logo */}</li>
            {links.map((link, index)=>{
              return <li key={index}><Link to={link.path}>{link.name}</Link></li>
            })}
        </ul>
</nav>
  )
}

export default Nav
