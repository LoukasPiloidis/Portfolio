import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar__list">
      <Link to="/" className="navbar__item">Home</Link>
      <Link to="/about" className="navbar__item">About</Link>
      <Link to="/projects" className="navbar__item">Projects</Link>
      <Link to="/contact" className="navbar__item">Contact</Link>
  </nav>
  )
};

export default Header;
