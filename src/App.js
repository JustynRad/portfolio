import React from 'react'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Photography from './pages/Photography';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/about" element={<About/>}/>
          <Route exact path ="/projects" element={<Projects/>}/>
          <Route exact path ="/photography" element={<Photography/>}/>
          <Route exact path ="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

