import React, { useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-scroll';
import '../styles/About.css';

const About = ({ setCurrentPage }) => {

  useEffect(() => {
    setCurrentPage('About');
  }, [])
  return (
    <div className="about__main">
      <Link to="home__main" ><IoIosArrowUp size={'2rem'} className="arrow-up" /></Link>
      <h2>About me</h2>
      <p>After finishing my bachelor’s and master’s degree in Media and Communications, I decided to put all that knowledge to a practical test.</p>
      <p>Working as a marketing specialist in a tech company has given me two things: working experience within a tech organisation, and the insight that a developer’s job is what I would love to follow as a career path.</p>
      <p>By completing the Salt bootcamp -arguably the best one in Sweden- and several projects later, I now come wiser, more experienced and ready to take on the world.</p>
      <div className="main__attributes" >
        <ul className="attributes__left" >
          <li>Style:</li>
          <li>Asset:</li>
          <li>Drive:</li>
        </ul>
        <ul className="attributes__right" >
          <li>Minimalistic</li>
          <li>Team player</li>
          <li>Love for the field and deep curiosity</li>
        </ul>
      </div>
      <Link to="projects" ><IoIosArrowDown size={'2rem'} className="arrow-down" /></Link>
    </div>
  )
};

export default About;
