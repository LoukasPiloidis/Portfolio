import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar__list">
        <Link to="/" class="navbar__item">Home</Link>
        <Link to="/about" class="navbar__item">About</Link>
        <Link to="/projects" class="navbar__item">Projects</Link>
        <Link to="/contact" class="navbar__item">Contact</Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </>
  );
}

export default App;
