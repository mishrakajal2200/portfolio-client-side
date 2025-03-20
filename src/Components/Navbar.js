
import React, { useState } from "react";
import { Link} from "react-router-dom"; // Import useNavigate for navigation
import { useAuth } from "../context/AuthContext"; // Import authentication context
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { authData } = useAuth(); // Access auth state and logout function
  

  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          Kajal's Portfolio
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            {authData && (
              <>
                {/* Links available to authenticated users */}
                <li className="nav-item home">
                  <Link to="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item about">
                  <Link to="/about" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item projects">
                  <Link to="/projects" className="nav-link text-white">
                    Projects
                  </Link>
                </li>
                <li className="nav-item contact">
                  <Link to="/contact" className="nav-link text-white">
                    Contact
                  </Link>
                </li>
                <li className="nav-item skills">
                  <Link to="/skills" className="nav-link text-white">
                    Skills
                  </Link>
                </li>
                
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
