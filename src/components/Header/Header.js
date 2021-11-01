import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo-1.png'
const Header = () => {
    const activeNavMenu = {
        color : 'red'
  }
  const {user, logOut} = useAuth()
    return (
        <div  >
            <nav style={{background:'#E94760'}} className="navbar fixed-top navbar-expand-lg navbar-light  ">
                <div className="container">
                    <NavLink className="navbar-brand text-white" to="/"><img width="200px" src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-4">
                          <NavLink activeStyle={activeNavMenu} className="nav-link text-white"  to="/">Home</NavLink>
                        </li>
                        
                        
                        <li className="nav-item ms-4">
                         {
                         user.email ?
                         <div className="d-flex">
                          
                          <li className="nav-item ms-4">
                          <NavLink activeStyle={activeNavMenu} className="nav-link  text-white " to="/tours">My Tours</NavLink>
                        </li>
                        <li className="nav-item ms-4">
                          <NavLink activeStyle={activeNavMenu} className="nav-link  text-white "  to="/tourPlans">Make Tour Plans</NavLink>
                        </li> 
                          <NavLink activeStyle={activeNavMenu} className="nav-link  text-white mr-5"  to="/manageTours">Manage all Tours</NavLink>
                        
                          
                       
                        <button onClick={logOut} className="btn btn-danger px-3 text-white fw-bold nav-link active" >Logout</button>
                        </div>
                     

                          :
                        <NavLink className="btn btn-danger px-3 text-white fw-bold nav-link active" to="/login">Login</NavLink>
                          }
                        </li>
                         <li className="align-self-center ms-3 text-white text-bold">
                             {
                            user.displayName ?
                            <span>{user.displayName}</span>
                            :
                            <span></span>
                             }
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;