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
        <Route path="/" element={<Home setCurrentPage={setCurrentPage} />} />
        <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
        <Route path="/projects" element={<Projects setCurrentPage={setCurrentPage} />} />
        <Route path="/contact" element={<Contact setCurrentPage={setCurrentPage} />} />
      </Routes>
    </>
  );
}

export default App;
