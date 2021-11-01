import React from 'react';
import './BookTours.css'
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';



const BookTours = ({service}) => {
    
    const {name, price } =service;
    const {user} = useAuth();
   
    const { register, handleSubmit, reset  } = useForm();

    const onSubmit = data => {      
        console.log(data);
        data.serviceName = name;
        data.servicePrice = price;
        
        

        axios.post('https://salty-caverns-03551.herokuapp.com/booking', data)
        .then(res => {
            if(res.data.insertedId){
                swal("Good job!", "added successfully!", "success");
                reset();
            }
            console.log(res);
        })
        
    }

    return (
        <div className="book-service container mb-4">
          
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1> <span className="text-danger">Book</span> Your Tour</h1>

            <input value={user.displayName} {...register("name")} placeholder=" Name" />
            <input value={user.email} {...register("email")} placeholder=" Email" />            

            <input type="date" {...register("date")}  />

            <input {...register("Text")} placeholder=" Location" />

            <input type="number" {...register("price")} placeholder="Tour Budget" />
            <input className="btn-danger" type="submit" />
        </form>
           
        </div>
    );
};

export default BookTours;