import React from 'react';
import './MakeTours.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';



const MakeTours = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {      
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if(res.data.insertedId){
                    swal("Good job!", "added successfully!", "success");
                    reset();
                }
                console.log(res);
            })
    };

    return (
        <div className="add-service">
            
            
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Add a new <span className="text-danger">Tour Plan</span></h2>
                   
                <input {...register("name", { required: true, maxLength: 50 })} placeholder="Destination Name" />
                <input {...register("img")} placeholder="Photo URL" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Tour Budget" />
                <input className="btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default MakeTours;