import React from 'react';
import { Link } from 'react-router-dom';

const NotPage = () => {
    return (
        <div style={{minHeight:'100vh'}} className="bg-warning d-flex align-items-center justify-content-center text-center">
            <div>
                <h1 className="display-4 fw-bold text-dark">Opps! Page not found</h1>
                <Link to="/home" className="btn btn-outline-success mt-4 mx-auto">Home</Link>
            </div>
        </div>
    );
};

export default NotPage;