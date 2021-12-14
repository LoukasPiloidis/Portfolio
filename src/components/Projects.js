import React, { useEffect } from 'react';
import GameHub from '../images/GameHub.png';
import Apella from '../images/Apella.png';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = ({ setCurrentPage }) => {

  useEffect(() => {
    setCurrentPage('Projects');
  }, [])

  return (
    <div className="projects">
      <div className="projects__main">
        <img src={GameHub} alt="GameHub" className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">GameHub</h2>
          <h3 className="text__subtitle">A Social Medium for gamers</h3>
          <div className="text__buttons">
            <a className="button" href="https://github.com/LoukasPiloidis/GameHub" target="_blank" >Source Code</a>
            <a className="button"href="https://gamehub-client.herokuapp.com/" target="_blank" >Check it out</a>
          </div>
        </div>
      </div>
      <div className="projects__main">
        <img src={Apella} alt="Apella" className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">Apella</h2>
          <h3 className="text__subtitle">An online poll for movies</h3>
          <div className="text__buttons">
            <a className="button" href="https://github.com/LoukasPiloidis/Apella" target="_blank" >Source Code</a>
            <a className="button" href="https://github.com/LoukasPiloidis/GameHub" target="_blank" >Check it out</a>
          </div>
        </div>
      </div>
      <Link to="/contact">
      </Link>
    </div>
  )
};

export default Projects;
