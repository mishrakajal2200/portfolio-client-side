

import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [authData, setAuthData] = useState(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return token && username ? { token, username } : null;
  });

  // Paths where Navbar should be hidden
  const hideNavbarPaths = ['/login', '/signup'];

  // Animation for sections
  const sectionAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 120 },
    },
  };

  useEffect(() => {
    if (authData) {
      localStorage.setItem('token', authData.token);
      localStorage.setItem('username', authData.username);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
  }, [authData]);

  return (
    <AuthProvider>
      <Router>
        <AppContent
          authData={authData}
          setAuthData={setAuthData}
          hideNavbarPaths={hideNavbarPaths}
          sectionAnimation={sectionAnimation}
        />
      </Router>
    </AuthProvider>
  );
}

function AppContent({ authData, setAuthData, hideNavbarPaths, sectionAnimation }) {
  const location = useLocation();

  return (
    <div className="App bg-gray-900 text-white font-sans">
      {/* Conditionally render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && (
        <Navbar />
      )}

      {/* Routes for each section */}
      <motion.div
        className="content"
        variants={sectionAnimation}
        initial="hidden"
        animate="visible"
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setAuthData={setAuthData} />} />
          <Route path="/signup" element={<Signup setAuthData={setAuthData} />} />
        </Routes>
      </motion.div>
    </div>
  );
}

export default App;
