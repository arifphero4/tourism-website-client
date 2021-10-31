import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageTours = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);


    const handleDelete = id =>{
        const url =`http://localhost:5000/services/${id} `;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    swal("DELETED!", "Deleted Successfully!", "success");
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div className="text-center">
            <h1>this is ManageTours ManageTours</h1>
            {
                services.map(service => <div key={service._id}>
                    <h3>Name: {service.name}</h3>
                    <p>Price:{service.price} </p>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageTours;