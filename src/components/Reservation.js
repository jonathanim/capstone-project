import React from 'react'
import ReservationForm from './ReservationForm'
import './Reservation.css'
const Reservation = () => {
  return (
    <div className='reservation-wrapper'>
    <div className='reservation-container'>
        <div className="reservation-left">
          <h3>Little Lemon Restaurant</h3>
          <p>
            At Little Lemon, we take great pride in providing our customers with the greatest experience in our traditional cuisines.  
          </p>
          <p>
            Book a table, and share your experience with your loved ones.
          </p>
        </div>
        <div className="reservation-right">
            <h3>Reservation Form</h3>
            <p>Input your info here, to reserve a table at Little Lemon Restaurant</p>
            <ReservationForm/>
        </div>
    </div>
    </div>
  )
}

export default Reservation
