import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <div className="navbar-title">
        <a href="/home">CRW</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/home">Recent Articles</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
