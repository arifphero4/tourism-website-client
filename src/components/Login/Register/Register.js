import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { error,handleNameChange,setError, handleFormcontrol, signInUsingGoogle ,handlePasswordChange, handleEmailChange } = useAuth()
    const location = useLocation()
    const redirect_url = location.state?.from || '/home'
    const history = useHistory()


    // Handle Google Sign In_________________
    const HandleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
            .catch(error => setError(error));
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
                                <input onBlur={handleNameChange} className="form-control mb-3" type="text" placeholder="Your Name..." />
                                <input onBlur={handleEmailChange} className="form-control mb-3" type="email" placeholder="Your email..." />
                                <input onBlur={handlePasswordChange} className="form-control mb-3" type="password" placeholder="Your Password..." />
                            </div>
                                <span className="text-danger">{error }</span>
                                <button className="btn btn-danger mb-3" type="submit">Register</button>
                        </form>
                        <div className="d-flex justify-content-between pb-3">
                            <span className="h6">Already register?</span>
                            <Link className="h6" to="/login">Login</Link>
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

export default Register;