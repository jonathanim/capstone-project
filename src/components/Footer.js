import React from 'react'
import LemonLogo from './assets/logo.png'
import "./Footer.css"


const Footer = () => {
  return (
    <footer>
        <div className='footer-container'>
            <div className='footer-top-section'>
                <img src={LemonLogo} alt="little Lemon logo"/>
                <p>
                    Little Lemon is a charming restaurant that offers a delightful dining experience in a cozy and intimate setting.
                </p>
            </div>
            <div className='footer-middle-section'>
                <div className='schedule'>
                    <h3>OPENING AND CLOSING TIME</h3>
                    <ul>
                        <li>MON - FRI: 10:00 AM - 11PM </li>
                        <li>SAT: 10:00AM - 12:00AM</li>
                        <li>SUN: 9:00AM - 9:00PM</li>
                    </ul>
                </div>
                <div className="contact">
                        <h3>CONTACT US</h3>
                        <ul>
                            <li>1234 San Marino Street</li>
                            <li>Tel: 123-234-5678</li>
                            <li>Email: littleLemon@lemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className='footer-copyright'>
                <p>©2023 Little Lemon Restaurant. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
