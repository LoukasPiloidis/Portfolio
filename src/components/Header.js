import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = ({ currentPage }) => {
  return (
    <nav className="navbar__list">
      <Link to="home__main" className={`navbar__item ${currentPage === 'Home' && "active"}`} >Home</Link>
      <Link to="about__main" className={`navbar__item ${currentPage === 'About' && "active"}`}>About</Link>
      <Link to="projects" className={`navbar__item ${currentPage === 'Projects' && "active"}`}>Projects</Link>
      <Link to="contact-main" className={`navbar__item ${currentPage === 'Contact' && "active"}`}>Contact</Link>
  </nav>
  )
};

export default Header;
