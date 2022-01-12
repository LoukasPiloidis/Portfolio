import React from 'react';
import { FaLinkedin, FaGithub, FaFacebookSquare, FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from 'react-scroll';
import '../styles/Contact.css';

const Contact = () => {

  return (
    <div className="contact">
      <Link to="projects" ><IoIosArrowUp size={'2rem'} /></Link>
      <h3 className="main__touch">Let's get in touch</h3>
      <h3 className="main__find">You can find me here:</h3>
      <div className="socials">
        <a href="https://www.linkedin.com/in/loukaspiloidis/" rel="noreferrer" target="_blank"><FaLinkedin size={'3rem'} /></a>
        <a href="https://github.com/LoukasPiloidis/" rel="noreferrer" target="_blank"><FaGithub size={'3rem'} /></a>
        <a href="https://www.facebook.com/loukas.piloidis/" rel="noreferrer" target="_blank"><FaFacebookSquare size={'3rem'} /></a>
      </div>
      <h3 className="main__email">You can even email me at:</h3>
      <div className="email">
      <MdOutlineAlternateEmail size={'2rem'} />
      <h3 className="email__address">l.piloidis@gmail.com</h3>
      </div>
      <h3 className="main__talk">Or if you would rather talk:</h3>
      <div className="phone">
      <FaPhoneAlt size={'2rem'} />
      <h3 className="talk__phone">+46 73 6873 803</h3>
      </div>
    </div>
  )
};

export default Contact;
