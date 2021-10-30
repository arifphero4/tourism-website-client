import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    
    const [setError,handleFormcontrol,handleEmailChange, handlePasswordChange] = useState('')
    const { signInUsingGoogle, error } = useAuth()
    const location = useLocation()

    
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()

     // Handle Google Sign In_________________
     const HandleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error =>setError(error) );
    }


    return (
        <div>
            <div className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
            <div className="card" style={{maxWidth:'500px', width:'100%'}}>
                    <div className="card-header bg-danger text-white">
                       <h1>Login Please</h1>
                    </div>
                    <div className="card-body p-4">
                        <form onClick={handleFormcontrol}>
                            <div className="from-group">
                                <input onClick={handleEmailChange} className="form-control mb-3" type="email" placeholder="Your email..." />
                                <input onClick={handlePasswordChange} className="form-control mb-3" type="password" placeholder="Your Password..." />
                            </div>
                                <span className="text-danger">{error }</span>
                                <button className="btn btn-danger mb-3" type="submit">Login</button>
                        </form>
                        <div className="d-flex justify-content-between pb-3">
                            <span className="h6">Are you new user?</span>
                            <Link className="h6" to="/register">Register</Link>
                        </div>
                            <div className="text-center">
                                <button onClick={HandleGoogleSignIn} className="btn btn-success fw-bold">
                                    <i class="fab fa-google me-2 "></i>
                                        By Google
                                </button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;