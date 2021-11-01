import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import google from '../../images/google-play.png'



const Footer = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="mt-5">
            <div style={{background:'#E94760'}} className="py-5">
               <div className="container row mx-auto">
                    <div className="col-6 col-lg-3">
                        <ul>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/tours">My Tours</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/tourPlans">Make Tour Plans</NavLink>
                            {!user.email?
                                <div>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/login">Login</NavLink>
                            <NavLink className="text-decoration-none text-white d-block h6" to="/register">Register</NavLink>
                            </div>
                            :
                            <button className="btn btn-link text-decoration-none px-0 text-white"onClick={logOut} >Logout</button>
                            }
                            
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h3 className="text-center text-white ">Address</h3>
                        <ul style={{listStyle:"none"}}>
                           
                            <li className="text-white h6">Redwood City, CA 94872, Mumbai</li>
                            <li className="text-white h6"> <strong>Phone: </strong> +1 301-230-8925</li>
                            <li className="text-white h6"><strong>Email: trevily@gmail.com</strong></li>
                            
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div>
                            <h2 className="  text-white ">Social Links</h2>
                            <ul style={{listStyle:"none"}}>
                                <li><i class="fab fa-google text-white h4   "></i></li>
                                <li><i class="fab fa-facebook text-white h4    "></i></li>
                                <li><i class="fab fa-instagram text-white h4  "></i></li>
                                <li><i class="fab fa-twitter text-white h4   "></i></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h5 className="  text-white ">Download the Trevily app for the exciting tour plans</h5>
                        <img className="img-fluid" src={google} alt="" />
                    </div>
                </div>
            </div>
            <div style={{background:'#C9253E'}} className=" py-4">
                <p className="text-white text-center">all right reserved by Trevily Tourism <span >&copy; 2021</span></p>
            </div>
        </div>
    );
};

export default Footer;