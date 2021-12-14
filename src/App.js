import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('Home')
  return (
    <>
      <Header currentPage={currentPage}/>
      <Routes>
        <Route path="/portfolio" element={<Home setCurrentPage={setCurrentPage} />} />
        <Route path="/portfolio/about" element={<About setCurrentPage={setCurrentPage} />} />
        <Route path="/portfolio/projects" element={<Projects setCurrentPage={setCurrentPage} />} />
        <Route path="/portfolio/contact" element={<Contact setCurrentPage={setCurrentPage} />} />
      </Routes>
    </>
  );
}

export default App;
