import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Tours = () => {
    const [bookings, setBookings] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [bookings])

    const checkBooking = bookings.filter(booking => booking.email === user.email);
    return (
        <div >
            {
                checkBooking.map(booked => <div >
                    <h2>{booked.name}</h2>
                    <p>{booked.email}</p>
                    <p>{booked.date}</p>
                    <p>{booked.Text}</p>
                    <p>{booked.price}</p>
                </div>)
            }
        </div>
    );
};

export default Tours;