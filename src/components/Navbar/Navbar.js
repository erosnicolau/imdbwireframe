import { NavLink, NavNavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Nav(props) {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/" exact>Home</NavLink>
      <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
    </nav>
  );
}
