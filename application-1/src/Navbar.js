import './index.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar-above" id="navbarabove">
        <div className="navbar-scroll">
            <nav className="navbar navbar-expand-lg bg-none">
            <div className="container-fluid nav-main">
                <div className="" id="navbarNavAltMarkup">
                <div className="navbar">
                    <Link className="nav-link active" to="/addTask"><button id='addTaskBtn'>Add</button></Link>
                    <Link className="nav-link active" to="/">Tasks</Link>
                    {/* Add more links here */}
                </div>
                </div>
            </div>
            </nav>
        </div>
        </div>            
    );
}

export default Navbar;