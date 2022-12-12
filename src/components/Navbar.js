import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userlogo from "../images/userlogo.png";
import { useLogoutUserMutation } from '../services/appApi.js';
const Navbar = () => {

  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const[logoutUser] = useLogoutUserMutation();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutUser(user);
    navigate('/');
  }

  return (
    <div className='navbar-container'>
        <div className="navbar-row">
              <Link to="/">
              <img src="./assets/images/logo.png" alt="logo.name"className="logo"/>
              </Link>
        </div>
        <div className="navbar-row d-flex">
            {!user ? (<NavLink to="/login" activeclassname="active">Login</NavLink>) : (
              
              <div className="box">
                   <img src={userlogo} className="user-img" alt={userlogo} />
                <button className='logout' onClick={handleLogout}>Logout</button>
              </div>
              
              
            )}
            
            <NavLink to="/chat" activeclassname="active">Chat</NavLink>
        </div>
    </div>
  )
}

export default Navbar
