import React from 'react';
import GameHub from '../images/GameHub.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__main">
        <img src={GameHub} className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">GameHub</h2>
          <h3 className="text__subtitle">A Social Medium for gamers</h3>
          <div className="text__buttons">
            <button>Source Code</button>
            <button>Check it out</button>
          </div>
        </div>
      </div>
      <div className="projects__main">
        <img src={GameHub} className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">Apella</h2>
          <h3 className="text__subtitle">An online poll for movies</h3>
          <div className="text__buttons">
            <button>Source Code</button>
            <button>Check it out</button>
          </div>
        </div>
      </div>
      <FontAwesomeIcon icon={faChevronDown} className="bounce" transform="down-20"></FontAwesomeIcon>
    </div>
  )
};

export default Projects;
