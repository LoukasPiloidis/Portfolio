import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ currentPage }) => {
  return (
    <nav className="navbar__list">
      <Link to="/" className={`navbar__item ${currentPage === 'Home' && "active"}`} >Home</Link>
      <Link to="/about" className={`navbar__item ${currentPage === 'About' && "active"}`}>About</Link>
      <Link to="/projects" className={`navbar__item ${currentPage === 'Projects' && "active"}`}>Projects</Link>
      <Link to="/contact" className={`navbar__item ${currentPage === 'Contact' && "active"}`}>Contact</Link>
  </nav>
  )
};

export default Header;
