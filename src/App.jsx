import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css'
import Head from './Head.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Services from './Services.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Head/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App
