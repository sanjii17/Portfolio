import './index.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
<div className="navbar-above collapse" id="navbarabove">
  <div className="navbar-scroll">
    <nav className="navbar navbar-expand-lg bg-none">
      <div className="nav-main">
        <div id="navbarNavAltMarkup">
          <div className="custom-navbar">
            <Link className="nav-link active" to="/addTask">
              <button id="addTaskBtn">Add</button>
            </Link>
            <Link className="nav-link home" to="/">Tasks</Link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</div>
      
    );
}

export default Navbar;