import React from 'react'
import respicture from './assets/restauranfood.jpg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className='header-left-container'>
          <div className='header-left'> 
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned, Mediterranean restaurant,<br/> focused on traditional <br/>recipes served with a modern <br/> twist.</p>
          <button className='header-reserve-button'>Reserve a table</button>
          </div>
        </div>
      
      <div className='header-right-container'>
        <img src={respicture} alt='Picture of server carrying a dish.' className='header-restaurant-picture'/>
      </div>

    </header>
  )
}

export default Header
