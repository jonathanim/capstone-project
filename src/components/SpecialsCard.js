import React from 'react'
import './SpecialsCard.css'
const SpecialsCard = (props) => {
    const {img,price,title, description} = props.data


   
  return (
        <div className='card'>
            <div className='image-container'>
                <img src={img} alt={title}/>
            </div>
            <div className='card-title'>
                <h3>{title}</h3>
                <h3 className='card-price'>{price}</h3>
            </div>
            <div className='card-text'>
                <p>
                    {description}
                </p>
            </div>
            <div className='card-button'>
                <button>Order for delivery</button>
            </div>
        </div>

  )
}

export default SpecialsCard
