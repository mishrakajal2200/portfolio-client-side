// import React from 'react';
// import { motion } from 'framer-motion'; // Import Framer Motion
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and External Link



// const projects = [
//   {
//     title: "MERN Stack Quiz App",
//     description: (
//     <>
//   <ul className="text-start lh-sm">
//   A MERN stack quiz application where users can take quizzes, submit answers, and view results. Key features:
//     <li>
//       <strong style={{ color: "blue" }}>User Authentication</strong>: Secure with <span style={{ color: "green" }}>JWT</span> and <span style={{ color: "purple" }}>bcryptjs</span>.
//     </li>
//     <li>
//       <strong style={{ color: "orange" }}>Twilio Integration</strong>: Sends quiz results to teachers via <span style={{ color: "red" }}>WhatsApp API</span>.
//     </li>
//     <li>
//       <strong style={{ color: "teal" }}>Responsive Design</strong>: Optimized for desktop and mobile.
//     </li>
//   </ul>
//     </>
//   ),
//     image: "https://t3.ftcdn.net/jpg/00/96/97/90/240_F_96979048_Y3YBHNDut6fhtsf9TT97sU87aQDa10oQ.jpg",// Replace with actual project image
//     githubLink: "https://github.com/mishrakajal2200?tab=repositories", // Replace with your GitHub link
//     demoLink: "https://jazzy-zabaione-b29249.netlify.app", // Replace with your live demo link
//   },
  
//   {
//     title: "E-Commerce Website",
//     description: (
//       <>
//         <ul className="text-start lh-sm">
//           <p className="project-status text-success text-center">
//            🚧 This E-commerce website is currently under active development. New features are being added regularly. Stay tuned!
//           </p>
//          A fully functional E-Commerce website template built using the MERN stack (MongoDB, Express, React, and Node.js). This project is designed with scalability and performance in mind, offering a seamless user experience from browsing to checkout.
//           <li>
//             <strong style={{ color: "blue" }}>🏷️ Product Listings</strong>: Display products dynamically with categories and filters.
//           </li>
//           <li>
//             <strong style={{ color: "green" }}>🛍️ Cart & Checkout</strong>: Add items to cart and proceed to checkout seamlessly.
//           </li>
//           <li>
//             <strong style={{ color: "purple" }}>💳 Payment Integration</strong>: Supports multiple payment gateways.
//           </li>
//           <li>
//             <strong style={{ color: "red" }}>📱 Responsive Design</strong>: Works perfectly on all screen sizes.
//           </li>
//         </ul>
//       </>
//     ),
//     image: "https://www.wedowebapps.ca/wp-content/uploads/2021/04/Advantages-of-e-commerce-100.jpg", // Replace with an actual project image URL
//     githubLink: "https://github.com/mishrakajal2200/portfolio-client-side", // Replace with your GitHub repo link
//     demoLink: "https://www.gsienterprises.com", // Replace with your live demo link
//   },
  
//   {
//     title: "MemeVerse",
//     description: (
//     <>
//   <ul className="text-start lh-sm">
//   MemeVerse is a highly interactive multi-page platform where users can explore, upload, and engage with memes through dynamic features, AI-generated captions, and a seamless UI/UX experience.
//     <li>
//       <strong style={{ color: "teal" }}>Responsive Design</strong>: Optimized for desktop and mobile.
//     </li>
//     <li>
//   <strong style={{ color: "blue" }}>🎭 Meme Explorer</strong>: Browse trending, new, and classic memes with infinite scrolling and filters.
// </li>
// <li>
//   <strong style={{ color: "green" }}>🖼️ Meme Upload</strong>: Upload images/GIFs, add captions, and generate AI-based meme texts.
// </li>
// <li>
//   <strong style={{ color: "purple" }}>❤️ Like & Comment</strong>: Engage with memes through likes, comments, and share options.
// </li>

//   </ul>
//     </>
//   ),
//     image: "https://yehaindia.com/wp-content/uploads/2020/07/Memes-feature-364x205.png",// Replace with actual project image
//     githubLink: "https://github.com/mishrakajal2200/memeProject.git", // Replace with your GitHub link
//     demoLink: "https://celadon-crostata-92df86.netlify.app/", // Replace with your live demo link
//   },
// ];

// const Project = () => {
//   return (
//     <section id="projects" className="bg-light py-5 min-vh-100">
//   <div className="container text-center mt-5">
//     <h2 className="text-primary mb-5">Recent Work</h2>
//     <div className="row">
//       {projects.map((project, index) => (
//         <motion.div
//           key={index}
//           className="col-md-6 col-lg-4 mb-4 d-flex"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: index * 0.3 }}
//         >
//           <div
//             className="project-card shadow-lg rounded d-flex flex-column w-100"
//             style={{
//               height: "100%",          // makes it responsive inside column
//               minHeight: "500px",      // fixed minimum height
//               overflow: "hidden"       // prevents overflow of inner content
//             }}
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="img-fluid rounded-top"
//               style={{ height: "240px", objectFit: "cover" }}
//             />
//             <div className="p-3 d-flex flex-column justify-content-between flex-grow-1">
//               <div className="mb-3">
//                 <h4 className="text-dark">{project.title}</h4>
//                 <p className="text-dark" style={{ maxHeight: "100px", overflowY: "auto" }}>
//                   {project.description}
//                 </p>
//               </div>
//               <div className="d-flex justify-content-between">
//                 <motion.a
//                   href={project.githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-dark"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <FaGithub size={20} className="me-2" />
//                   GitHub
//                 </motion.a>
//                 <motion.a
//                   href={project.demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-success"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <FaExternalLinkAlt size={20} className="me-2" />
//                   Live Demo
//                 </motion.a>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// };

// export default Project;



import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MERN Stack Quiz App",
    description: (
      <>
        <ul className="list-disc pl-5 text-gray-700 text-sm text-left space-y-1">
          <li>
            <strong className="text-blue-600">User Authentication</strong> with <span className="text-green-600">JWT</span> & <span className="text-purple-600">bcryptjs</span>.
          </li>
          <li>
            <strong className="text-orange-500">Twilio API</strong> for WhatsApp quiz results.
          </li>
          <li>
            <strong className="text-teal-600">Responsive UI</strong> for mobile & desktop.
          </li>
        </ul>
      </>
    ),
    image: "https://t3.ftcdn.net/jpg/00/96/97/90/240_F_96979048_Y3YBHNDut6fhtsf9TT97sU87aQDa10oQ.jpg",
    githubLink: "https://github.com/mishrakajal2200?tab=repositories",
    demoLink: "https://jazzy-zabaione-b29249.netlify.app",
  },
  // Add your other projects here in same format...
];

const Project = () => {
  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">🚀 My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <div className="mb-4">{project.description}</div>

                <div className="mt-auto flex justify-between">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white bg-green-600 px-4 py-2 rounded hover:bg-green-500 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
