import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const Tours = () => {
    const [bookings, setBookings] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://salty-caverns-03551.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const checkBooking = bookings.filter(booking => booking.email === user.email);
    return (
        <div className="text-center">
           
           <h1> Manage  <span className="text-danger">Tours</span> </h1>
            <div className="row">
          
            
            { 
                checkBooking.map(booked => <div className="col-sm-6"   >
                  
                  <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Name: {booked.name}</h5>
                                <p className="card-text">Price: {booked.price}</p>
                                <p className="card-text">Email: {booked.email}</p>
                                <p className="card-text">Location: {booked.Text}</p>
                               
                            </div>
                            </div>
                        </div> 
                )
            }

           </div>
            </div>
             
       
        
    );
};

export default Tours;

/* 

<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>
*/