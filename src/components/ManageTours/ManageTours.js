import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const ManageTours = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('https://salty-caverns-03551.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);


    const handleDelete = id =>{
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                const url =`https://salty-caverns-03551.herokuapp.com/booking/${id} `;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if(data.deletedCount > 0){
                            swal("DELETE! file has been deleted!", {
                                icon: "success",
                              });
                           
                            const remaining = services.filter(service => service._id !== id);
                            setServices(remaining);
                        }
                    })
            } else {
              swal("Your imaginary file is safe!");
            }
          });
        
    }
    return (
        <div className="text-center">
            <h1> Manage Your <span className="text-danger">Tours</span> </h1>
            <div className="row">
            {
                services.map(service => <div className="col-sm-6"  key={service._id}>
                    
                   
                       
                            <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Name: {service.name}</h5>
                                <p className="card-text">Price: {service.price}</p>
                                <p className="card-text">Email: {service.email}</p>
                                <p className="card-text">Location: {service.Text}</p>
                                <button  className="btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                            </div>
                            </div>
                        </div> 
                )
            }
            </div>
        </div>
    );
};

export default ManageTours;