import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BookTours from './BookTours/BookTours';


const DetailsService = () => {
    const {id} = useParams();
    
    const [service, setService] = useState({});
    const {name, img, description, price} = service;
    useEffect(() => {
        fetch(`https://salty-caverns-03551.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [service]);
    

    return (
        <div className="my-5">
            <div className="container">
                <div className="row d-flex align-items-center ">
                     <div className="col-lg-6 col-md-12 col-sm-12 text-center mt-5 ">
                        <img style={{height:"300px", width:"400px"}}  src={ img} alt="" />
                        <h2>{name} </h2>
                        <h4>Event Fee: Rs. {price}</h4>
                        <p>{description}</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                       
                       <BookTours  service={service}> </BookTours>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DetailsService;