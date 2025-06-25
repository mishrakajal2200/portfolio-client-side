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





import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "MERN Stack Quiz App",
    description: (
      <ul className="text-start lh-sm">
        A MERN stack quiz application where users can take quizzes, submit answers, and view results. Key features:
        <li><strong style={{ color: "blue" }}>User Authentication</strong>: Secure with <span style={{ color: "green" }}>JWT</span> and <span style={{ color: "purple" }}>bcryptjs</span>.</li>
        <li><strong style={{ color: "orange" }}>Twilio Integration</strong>: Sends quiz results via <span style={{ color: "red" }}>WhatsApp API</span>.</li>
        <li><strong style={{ color: "teal" }}>Responsive Design</strong>: Optimized for desktop and mobile.</li>
      </ul>
    ),
    image: "https://t3.ftcdn.net/jpg/00/96/97/90/240_F_96979048_Y3YBHNDut6fhtsf9TT97sU87aQDa10oQ.jpg",
    githubLink: "https://github.com/mishrakajal2200?tab=repositories",
    demoLink: "https://jazzy-zabaione-b29249.netlify.app",
  },
  {
    title: "E-Commerce Website",
    description: (
      <ul className="text-start lh-sm">
        <p className="text-success">🚧 This E-commerce website is currently under active development.</p>
        A fully functional E-Commerce website using MERN. Features:
        <li><strong style={{ color: "blue" }}>🏷️ Product Listings</strong>: Filterable product categories.</li>
        <li><strong style={{ color: "green" }}>🛍️ Cart & Checkout</strong>: Smooth shopping flow.</li>
        <li><strong style={{ color: "purple" }}>💳 Payment Integration</strong>: Supports multiple gateways.</li>
        <li><strong style={{ color: "red" }}>📱 Responsive Design</strong>: Fully mobile friendly.</li>
      </ul>
    ),
    image: "https://www.wedowebapps.ca/wp-content/uploads/2021/04/Advantages-of-e-commerce-100.jpg",
    githubLink: "https://github.com/mishrakajal2200/portfolio-client-side",
    demoLink: "https://www.gsienterprises.com",
  },
  {
    title: "MemeVerse",
    description: (
      <ul className="text-start lh-sm">
        MemeVerse is an interactive meme sharing site. Features:
        <li><strong style={{ color: "teal" }}>Responsive Design</strong>: Optimized for all devices.</li>
        <li><strong style={{ color: "blue" }}>🎭 Meme Explorer</strong>: Trending memes with infinite scroll.</li>
        <li><strong style={{ color: "green" }}>🖼️ Upload</strong>: Upload memes with AI captions.</li>
        <li><strong style={{ color: "purple" }}>❤️ Like & Comment</strong>: Engage socially with memes.</li>
      </ul>
    ),
    image: "https://yehaindia.com/wp-content/uploads/2020/07/Memes-feature-364x205.png",
    githubLink: "https://github.com/mishrakajal2200/memeProject.git",
    demoLink: "https://celadon-crostata-92df86.netlify.app/",
  },
];

const Project = () => {
  return (
    <section id="projects" className="bg-light py-5 min-vh-100">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Recent Work</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-sm-12 col-md-6 col-lg-4 d-flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card w-100 shadow h-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{project.title}</h5>
                  <div className="card-text overflow-auto" style={{ maxHeight: "180px" }}>
                    {project.description}
                  </div>
                  <div className="mt-auto d-flex justify-content-between pt-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark w-50 me-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="me-2" /> GitHub
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success w-50"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaExternalLinkAlt className="me-2" /> Live
                    </motion.a>
                  </div>
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
