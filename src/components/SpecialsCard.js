import React, { useEffect } from 'react'
import './SpecialsCard.css'
const SpecialsCard = (props) => {
    const image = props.data.img
    const price = props.data.price
    const title = props.data.title
    const description =props.data.description
 
    

    useEffect(()=>{
        console.log(image)
    })
  return (
    <div className='specialCard-card'>
        <div className='image-container'>
            <img src={image} alt={title} height="100%"/>
        </div>
        <div>
            <h2>{title}</h2> <h3>{price}</h3>
        </div>
        <div>
            <p>
                {description}
            </p>
        </div>
        <div>
            {/* button to order */}
            < button>Order for delivery</button>
        </div>
    </div>
  )
}

export default SpecialsCard
