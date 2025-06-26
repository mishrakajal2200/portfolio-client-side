
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
    githubLink: "https://github.com/mishrakajal2200/GSI-BACKEND.git",
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
