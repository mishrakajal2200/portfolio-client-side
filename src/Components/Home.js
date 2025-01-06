import React from "react";
import { motion } from "framer-motion"; // Import motion for animation
import { FaGithub } from "react-icons/fa"; // Icons for social links
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";
import personalImage from "./kajal.jpg";
import neonCircle from "./kajal2.png"; // Import neon circle image

function Home() {
  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="container-fluid justify-content-center d-flex min-vh-100 py-3  d-flex px-3 bg-dark">
      <div className="row justify-content-center d-flex align-items-center mt-5 col-lg-12">
        {/* Left Side (Text and Social Links) */}
        <div className="col-lg-6 col-md-12 col-12 text-center text-md-start">
          <p className="display-4 fs-2 fs-md-1 text-white">
            Hello, it's me <br />
            <span className="fw-bold text-primary">Kajal Mishra</span> <br />
            and I am a
          </p>
          <motion.h2
            className="mb-4 text-primary fs-4 fs-md-3 fs-lg-2"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer (MERN)
          </motion.h2>
          <p className="lead text-white lh-sm lh-md-base lh-lg-lg">
            I am a passionate and experienced Full Stack Developer specializing
            in the MERN stack (MongoDB, Express, React, Node.js). I build
            dynamic, responsive, and modern web applications with a focus on
            performance and user experience.
          </p>

          {/* Social Links */}
          <div className="social-links mt-4">
            <Link
              to="https://github.com/mishrakajal2200"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <FaGithub size={30} />
            </Link>

            <Link
              to="https://app.netlify.com/teams/mishrakajal2200-pb1faa0/sites"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <img
                src="https://www.netlify.com/v3/img/components/logomark.png"
                alt="Netlify"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
          </div>

          {/* Button to navigate to more about me */}
          <Link to="/about" className="btn btn-primary mt-3">
            More About Me
          </Link>
        </div>

        {/* Right Side (Image) */}
        <div className="col-lg-4 col-md-12 col-12">
          <div
            className="neon-circle mx-auto"
            style={{
              backgroundImage: `url(${neonCircle})`,
              width: "300px",
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <img
              src={personalImage}
              alt="Kajal Mishra"
              className="img-fluid col-12 rounded-circle shadow-animated"
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
