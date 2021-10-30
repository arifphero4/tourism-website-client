import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useServices } from '../../../App';

const DetailsService = () => {
    
    const { id } = useParams();
    const history = useHistory()
    const [services] = useContext(useServices)
    const findService = services?.find(service => service.id === Number(id))
    console.log(findService);
    const { title, img,    detail, price } = findService;
    const serviceDetailsHeader = {
        background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${img}) no-repeat center`,
        minHeight: '250px',
        width:'100%'
    }
    return (
        <div className="mt-5 pt-2">
            {
                services ?
                    <div>
                        <div className="service-details-banner d-flex align-items-center justify-content-center" style={serviceDetailsHeader}>
                            <div >
                                <p className="d-flex align-items-center text-white"><Link className="text-decoration-none fw-bold text-danger" to="/home">Home </Link> <span className="text-danger px-2 h2">/</span> { title}</p>
                            </div>
                        </div>
                        <div className="container">
                                <div className="row mt-5">
                                    <div className="col-12 col-md-6">
                                        <img className="img-fluid" src={ img} alt="" />
                                    </div>
                                    <div className="col-12  col-md-6">
                                        <h2 >{title}</h2>
                                        <p className="lead fw-bold"><strong className=" me-3">Event Fee:  </strong>Rs. { price}</p>
                                        
                                        <p className="lead  fw-bold">{detail}</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                    :
                history.push('/')
             }
        </div>
    );
};

export default DetailsService;