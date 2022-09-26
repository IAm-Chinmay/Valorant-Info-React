import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-ul">
      <ul className="nav-li">
      <Link to={'/'}  style={{ textDecoration: 'none' }} >  <li>Home</li> </Link>
     <Link to={'/agents'} style={{ textDecoration: 'none' }} ><li>Agents</li></Link>
       <Link to = {'/weapons'} style={{ textDecoration: 'none' }}> <li>Weapons</li> </Link>
       <Link to = {'/maps'} style={{ textDecoration: 'none' }}>  <li>Maps</li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
