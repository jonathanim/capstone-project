import React from 'react'
import "./Specials.css"
const Specials = () => {
  return (
    <div >
        <div className='specials-container'>
        <h2 className='specials-h2'>This Week's Specials</h2>
        <button className='specials-button'>Online Menu</button>
        </div>
        <div className='special-card-container'> 
            {/* 3 cards  */}
        </div>  
    </div>
  )
}

export default Specials
