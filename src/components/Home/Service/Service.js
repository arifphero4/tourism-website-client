import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img style={{minHeight:'250px'}} className="img-fluid card-img" src={img} alt={name} />
            <div className="card-body">
              <h2>{name}</h2>
              <p>{description.substring(0, 100)}</p>
              
              <h4>Event Fee: Rs. {price} <small></small> </h4>
            </div>
            <div className="card-footer text-center">
                <Link className="btn btn-outline-danger px-5 py-2" to={`/details/${_id}`}>Details</Link>
            </div>
           </div>
        </div>
    );
};

export default Service;