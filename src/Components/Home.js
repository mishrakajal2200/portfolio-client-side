// import React from "react";
// import { motion } from "framer-motion"; // Import motion for animation
// import { FaGithub } from "react-icons/fa"; // Icons for social links
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import { Link } from "react-router-dom";
// import personalImage from "./kajal.jpg";
// import neonCircle from "./kajal2.png"; // Import neon circle image

// function Home() {
  
//   const textAnimation = {
//     hidden: { opacity: 0, x: -50 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1, type: "spring", stiffness: 100 },
//     },
//   };

//   return (
//     <div className="container-fluid justify-content-center d-flex min-vh-100 py-3  d-flex px-3 bg-dark">
//       <div className="row justify-content-center d-flex align-items-center mt-5 col-lg-12">
//         {/* Left Side (Text and Social Links) */}
//         <div className="col-lg-6 col-md-12 col-12 text-center text-md-start">
//           <p className="display-4 fs-2 fs-md-1 text-white">
//             Hello, it's me <br />
//             <span className="fw-bold text-primary">Kajal Mishra</span> <br />
//             and I am a
//           </p>
//           <motion.h2
//             className="mb-4 text-primary fs-4 fs-md-3 fs-lg-2"
//             variants={textAnimation}
//             initial="hidden"
//             animate="visible"
//           >
//             Full Stack Developer (MERN)
//           </motion.h2>
//           <p className="lead text-white lh-sm lh-md-base lh-lg-lg">
//             I am a passionate and experienced Full Stack Developer specializing
//             in the MERN stack (MongoDB, Express, React, Node.js). I build
//             dynamic, responsive, and modern web applications with a focus on
//             performance and user experience.
//           </p>

//           {/* Social Links */}
//           <div className="social-links mt-4">
//             <Link
//               to="https://github.com/mishrakajal2200"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="me-3"
//             >
//               <FaGithub size={30} />
//             </Link>

//             <Link
//               to="https://app.netlify.com/teams/mishrakajal2200-pb1faa0/sites"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="me-3"
//             >
//               <img
//                 src="https://www.netlify.com/v3/img/components/logomark.png"
//                 alt="Netlify"
//                 style={{ width: "30px", height: "30px" }}
//               />
//             </Link>
//           </div>

//           {/* Button to navigate to more about me */}
//           <Link to="/about" className="btn btn-primary mt-3">
//             More About Me
//           </Link>
//         </div>

//         {/* Right Side (Image) */}
//         <div className="col-lg-4 col-md-12 col-12">
//           <div
//             className="neon-circle mx-auto"
//             style={{
//               backgroundImage: `url(${neonCircle})`,
//               width: "300px",
//               height: "300px",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               borderRadius: "50%",
//               position: "relative",
//             }}
//           >
//             <img
//               src={personalImage}
//               alt="Kajal Mishra"
//               className="img-fluid col-12 rounded-circle shadow-animated"
//               style={{
//                 width: "200px",
//                 height: "200px",
//                 objectFit: "cover",
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import personalImage from "./kajal.jpg";
import neonCircle from "./kajal2.png";

function Home() {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-dark px-3 px-md-5">
      <div className="row w-100 align-items-center justify-content-center">

        {/* LEFT CONTENT */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0">
          <p
            className="text-uppercase text-secondary mb-2"
            style={{ letterSpacing: "2px", fontSize: "0.85rem" }}
          >
            Welcome
          </p>

          <h1 className="text-white fw-bold mb-3"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Hello, I’m <br />
            <span className="text-primary">Kajal Mishra</span>
          </h1>

          <motion.h2
            className="text-primary fw-semibold mb-3"
            style={{ fontSize: "clamp(1.1rem, 4vw, 1.8rem)" }}
            variants={textAnimation}
            initial="hidden"
            animate="visible"
          >
            Full Stack Developer (MERN)
          </motion.h2>

          <p
            className="text-light mx-auto mx-lg-0"
            style={{
              lineHeight: "1.7",
              maxWidth: "520px",
              fontSize: "clamp(0.95rem, 3vw, 1.05rem)",
            }}
          >
            I’m a passionate Full Stack Developer specializing in the MERN stack.
            I build modern, scalable, and responsive web applications with a
            strong focus on performance, clean code, and user experience.
          </p>

          {/* SOCIAL LINKS */}
          <div className="d-flex justify-content-center justify-content-lg-start gap-4 mt-4">
            <Link
              to="https://github.com/mishrakajal2200"
              target="_blank"
              className="text-white"
            >
              <FaGithub size={26} />
            </Link>

            <Link
              to="https://app.netlify.com/teams/mishrakajal2200-pb1faa0/sites"
              target="_blank"
            >
              <img
                src="https://www.netlify.com/v3/img/components/logomark.png"
                alt="Netlify"
                style={{ width: "26px", height: "26px" }}
              />
            </Link>
          </div>

          {/* CTA */}
          <Link
            to="/about"
            className="btn btn-primary mt-4 px-4 py-2"
            style={{ boxShadow: "0 0 20px rgba(13,110,253,0.4)" }}
          >
            More About Me
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-lg-4 col-md-8 col-10 text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="mx-auto"
            style={{
              backgroundImage: `url(${neonCircle})`,
              width: "min(280px, 80vw)",
              height: "min(280px, 80vw)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "50%",
              position: "relative",
              boxShadow: "0 0 40px rgba(0,123,255,0.3)",
            }}
          >
            <img
              src={personalImage}
              alt="Kajal Mishra"
              style={{
                width: "65%",
                height: "65%",
                objectFit: "cover",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                border: "3px solid #0d6efd",
              }}
            />
          </motion.div>
        </div>

      </div>
    </div>
  );
}

export default Home;
