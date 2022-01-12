import React from 'react';
import GameHub from '../images/GameHub.png';
import Apella from '../images/Apella.png';
import Todo from '../images/Todo.png';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-scroll';
import '../styles/Projects.css';

const Projects = () => {

  return (
    <div className="projects">
      <Link to="about__main" ><IoIosArrowUp size={'2rem'} className="arrow-up" /></Link>
      <h2>Projects</h2>
      <div className="projects__main">
        <img src={GameHub} alt="GameHub" className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">GameHub</h2>
          <h3 className="text__subtitle">A Social Medium for gamers</h3>
          <div className="text__buttons">
            <a className="button" href="https://github.com/LoukasPiloidis/GameHub" rel="noreferrer" target="_blank" >Source Code</a>
            <a className="button"href="https://gamehub-client.herokuapp.com/" rel="noreferrer" target="_blank" >Check it out</a>
          </div>
        </div>
      </div>
      <div className="projects__main">
        <img src={Apella} alt="Apella" className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">Apella</h2>
          <h3 className="text__subtitle">An online poll for movies</h3>
          <div className="text__buttons">
            <a className="button" href="https://github.com/LoukasPiloidis/Apella" rel="noreferrer" target="_blank" >Source Code</a>
            <a className="button" href="https://apella-client.herokuapp.com/" rel="noreferrer" target="_blank" >Check it out</a>
          </div>
        </div>
      </div>
      <div className="projects__main">
        <img src={Todo} alt="todo" className="main__image"/>
        <div className="main__text">
          <h2 className="text__title">To Do</h2>
          <h3 className="text__subtitle">A classic project on steroids</h3>
          <div className="text__buttons">
            <a className="button" href="https://github.com/LoukasPiloidis/todo-typescript" rel="noreferrer" target="_blank" >Source Code</a>
            <a className="button" href="https://todo-loukas.herokuapp.com/" rel="noreferrer" target="_blank" >Check it out</a>
          </div>
        </div>
      </div>
      <Link to="contact" ><IoIosArrowDown size={'2rem'} className="arrow-down"/></Link>
    </div>
  )
};

export default Projects;
