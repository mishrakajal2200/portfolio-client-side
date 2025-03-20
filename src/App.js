import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Project from './Components/Project';

function App() {
  // Animation for sections
  const sectionAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 120 },
    },
  };

  return (
    <Router>
      <AppContent sectionAnimation={sectionAnimation} />
    </Router>
  );
}

function AppContent({ sectionAnimation }) {
  return (
    <div className="App bg-gray-900 text-white font-sans">
      <Navbar />

      {/* Routes for each section */}
      <motion.div className="content" variants={sectionAnimation} initial="hidden" animate="visible">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
         
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
