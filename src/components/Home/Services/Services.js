import React, { useContext } from 'react';
import { useServices } from '../../../App';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useContext(useServices);
    return (
        <div>
            <div className="container-fluid bg-danger py-5 text-center">
                 <h1 className="text-white text-capitalize ">Our all services</h1>
            </div>
            <div className="container py-5">
                <div className="row">
                    {
                        services.map(service=> <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;