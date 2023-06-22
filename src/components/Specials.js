import React from 'react'
import "./Specials.css"
import SpecialsCard from './SpecialsCard'
import salad from './assets/salad.jpg'
import bruschetta from './assets/bruschetta1.jpg'
import dessert from './assets/lemon-dessert.jpg'


const Specials = () => {

    const specialData = [
        {
            id: 1,
            img: salad,
            price: "$12.99",
            title: "Greek Salad",
            description: "The famous Greek Salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garsnished with crunchy garlic, rosemary croutons."
        },
        {
            id: 2,
            price: "$5.99",
            img: bruschetta,
            title: "Bruschetta",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner."
        },
        {
            id: 3,
            price: "$4.99",
            img: dessert,
            title: "Lemon Dessert",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
        },
    ];


    const displayData = specialData.map((data, index)=>{
        return <SpecialsCard data={data} key={index}/>
    })

  return (
    <>
        <div className='specials-container'>
        <h2 className='specials-h2'>This Week's Specials</h2>
        <button className='specials-button'>Online Menu</button>
        </div>
        <div className='special-card-container'> 
          {displayData}
        </div>  
    </>
  )
}

export default Specials
