import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Footer = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <div style={{background:'#333'}} className="py-5">
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
                        <ul style={{listStyle:"none"}}>
                            <li className="text-white h6"> <strong>Address</strong></li>
                            <li className="text-white h6">Redwood City, CA 94872, USA</li>
                            <li className="text-white h6"> <strong>Phone: </strong> +1 301-230-8925</li>
                            <li className="text-white h6"><strong>Email: abc@hospitalplus.com</strong></li>
                            
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div>
                            <ul style={{listStyle:"none"}}>
                                <li><i class="fab fa-google text-white h4  "></i></li>
                                <li><i class="fab fa-facebook text-white h4  "></i></li>
                                <li><i class="fab fa-instagram text-white h4  "></i></li>
                                <li><i class="fab fa-twitter text-white h4  "></i></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <img className="img-fluid" src="https://i.ibb.co/PWJDGGZ/141701025-man-using-credit-card-in-shop-cashless-payment-with-pos-terminal.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-dark py-4">
                <p className="text-white text-center">all right reserved by Dental <span className="text-danger">&copy; 2021</span></p>
            </div>
        </div>
    );
};

export default Footer;