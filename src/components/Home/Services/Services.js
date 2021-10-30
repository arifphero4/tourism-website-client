import React, { useContext } from 'react';
import { useServices } from '../../../App';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useContext(useServices);
    return (
        <div>
            <div className="container-fluid  py-5 text-center">
                <span>Destination lists</span>
                 <h1 className=" text-capitalize ">Go Exotic Places</h1>
            </div>
            <div className="container ">
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