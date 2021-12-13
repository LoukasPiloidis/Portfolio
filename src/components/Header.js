import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar__list">
      <a to="#" className="navbar__item">Home</a>
      <a to="#" className="navbar__item">About</a>
      <a to="#" className="navbar__item">Projects</a>
      <a to="#" className="navbar__item">Contact</a>
  </nav>
  )
};

export default Header;
