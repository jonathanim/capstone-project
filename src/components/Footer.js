import React from 'react'
import imageLogo from './assets/Lemon-logo.ico'

const Footer = () => {
  return (
    <footer>
        <img src={imageLogo} alt="little Lemon logo"/>
    <li>
        Little Lemon is a charming restaurant that offers a delightful dining experience in a cozy and intimate setting.
    </li>
    <li >
        The restaurant specializes in Mediterranean-inspired cuisine, with a menu that features a range of dishes made with fresh and flavorful ingredients.
    </li>
    <li>
        <button>Order</button>
        <button >Reserve</button>
        <button >Menu</button>
    </li>
</footer>
  )
}
 

export default Footer
 