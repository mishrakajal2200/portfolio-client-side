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
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import personalImage from "./kajal.jpg";

function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-4 py-2 text-sm rounded-full bg-neutral-800 text-neutral-300">
              Open to Remote Opportunities
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m{" "}
              <span className="text-blue-500">Kajal Mishra</span>
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-medium text-neutral-300">
              Senior MERN Stack Developer
            </h2>

            <p className="mt-6 text-neutral-400 max-w-xl leading-relaxed">
              I design and build scalable, high-performance web applications
              using React, Node.js, Express, and MongoDB. With 2+ years of
              professional experience, I focus on clean UI, efficient APIs,
              and maintainable architecture.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition font-medium"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-md border border-neutral-600 hover:border-neutral-400 transition font-medium"
              >
                Contact Me
              </Link>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-6 mt-8 text-neutral-400">
              <a
                href="https://github.com/mishrakajal2200"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition"
              >
                <FaLinkedin size={26} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-neutral-800 flex items-center justify-center">
                <img
                  src={personalImage}
                  alt="Kajal Mishra"
                  className="w-64 h-64 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Home;
