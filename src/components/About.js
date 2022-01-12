import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-scroll';
import '../styles/About.css';

const About = () => {

  return (
    <div className="about__main">
      <Link to="home__main" ><IoIosArrowUp size={'2rem'} className="arrow-up" /></Link>
      
      <h2>About me</h2>
      <div className='about__block'>
        <h3 className='block__title'>On Work</h3>
        <p className='block__text'>
          Experienced in various industries including marketing, sales, and cooking, I come with a very open mind, passion for tech, and attraction towards efficiency.
        </p>
      </div>
      <div className='about__block'>
        <h3 className='block__title'>On Education</h3>
        <p className='block__text'>Holder of a double bachelor degree in Communications and a master in Media, having a solid academic background, I come fully equipped as a fullstack developer.</p>
      </div>
      <div className='about__block'>
        <h3 className='block__title'>On Personality</h3>
        <p className='block__text'>Admirer of minimalism, curious about everything, and the best team player your team will ever have.</p>
      </div>
      
      
      {/* <div className="main__attributes" >
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
      </div> */}
      <Link to="projects" ><IoIosArrowDown size={'2rem'} className="arrow-down" /></Link>
    </div>
  )
};

export default About;
