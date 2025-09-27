import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles.css'
import Head from './Head.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Head/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App
