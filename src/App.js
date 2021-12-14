import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  return (
    <>
      {/* <Header currentPage={currentPage}/> */}
      <Home setCurrentPage={setCurrentPage} />
      <About setCurrentPage={setCurrentPage} />
      <Projects setCurrentPage={setCurrentPage} />
      <Contact setCurrentPage={setCurrentPage} />
      <Footer />
    </>
  );
}

export default App;
