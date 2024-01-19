// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './css/nav.css'

function Nav() {
  return (
    <nav className="navbar" id="nav" >
      <ul className="nav-list" id='navitems'>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <FaIcons.FaHome />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addtodo" className="nav-link">
            <FaIcons.FaPlus />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <FaIcons.FaInfoCircle />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutdev" className="nav-link">
            <FaIcons.FaUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
