
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "MERN Stack Quiz App",
    description: (
      <ul className="text-start lh-sm">
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
  title: "AI Tech-Debt Eliminator",
  description: (
    <ul className="text-start lh-sm">
      <p className="text-primary">
        🤖 This AI-powered Tech-Debt Eliminator scans your codebase, detects issues, and auto-fixes them.
      </p>

      <p className="text-info">
        📅 <strong>Project Timeline</strong>: Started on <strong>Dec 4, 2025</strong> — Expected Completion <strong>Dec 20, 2025</strong>.
      </p>

      <li>
        <strong style={{ color: "green" }}>🧠 Advanced AI Analysis</strong>:
        Detects tech debt, anti-patterns, poor architecture, and performance bottlenecks.
      </li>

      <li>
        <strong style={{ color: "purple" }}>⚡ Auto-Fix Generator</strong>:
        Creates optimized code patches with explanations and best-practice refactoring.
      </li>

      <li>
        <strong style={{ color: "orange" }}>📦 Codebase Upload System</strong>:
        Upload ZIP or GitHub repo link for full project scanning.
      </li>

      <li>
        <strong style={{ color: "red" }}>🔐 Secure Authentication</strong>:
        JWT-based security with admin/user roles and protected routes.
      </li>

      <li>
        <strong style={{ color: "blue" }}>📊 AI Tech-Debt Dashboard</strong>:
        Visualizes risk levels, duplicate code, vulnerabilities & performance issues.
      </li>

      <li>
        <strong style={{ color: "teal" }}>💬 AI Chat Assistant</strong>:
        Ask AI to explain files, optimize functions, or auto-refactor code live.
      </li>

      <li>
        <strong style={{ color: "brown" }}>⚙️ MERN + AI Architecture</strong>:
        Node + Express backend, React + Tailwind UI, MongoDB for storage, OpenAI engine integration.
      </li>

      <li>
        <strong style={{ color: "pink" }}>📱 Responsive UI</strong>:
        Fully optimized dashboard and chat interface for all devices.
      </li>
    </ul>
  ),
  image:
    "https://www.shutterstock.com/image-vector/artificial-intelligence-circuit-line-style-600nw-2326615941.jpg",
  githubLink: "not available now",
  demoLink: "not available now",
}


 
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
