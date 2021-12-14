import React, { useEffect } from 'react';
import '../styles/Home.css';
import homeImage from '../images/Loukas.png';

const Home = ({ setCurrentPage }) => {

  useEffect(() => {
    setCurrentPage('Home');
  }, [])

  return (
    <div className="home__main">
      <img src={homeImage} className="home__image" alt="Loukas Piloidis" />
      <h2 className="home__name" >Loukas Piloidis, MA</h2>
      <h3 className="home__signature" >Full Stack Developer</h3>
      <p className="home__desc" >Curious about everything, tech lover, believer in humanity, best cook in town</p>
      <p className="home__moto" >“Nothing is given to you; strive for success”</p>
    </div>
  )
}

export default Home;
