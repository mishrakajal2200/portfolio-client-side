import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Icons for GitHub and External Link



const projects = [
  {
    title: "MERN Stack Quiz App",
    description: (
    <>
  <ul className="text-start lh-sm">
  A MERN stack quiz application where users can take quizzes, submit answers, and view results. Key features:
    <li>
      <strong style={{ color: "blue" }}>User Authentication</strong>: Secure with <span style={{ color: "green" }}>JWT</span> and <span style={{ color: "purple" }}>bcryptjs</span>.
    </li>
    <li>
      <strong style={{ color: "orange" }}>Twilio Integration</strong>: Sends quiz results to teachers via <span style={{ color: "red" }}>WhatsApp API</span>.
    </li>
    <li>
      <strong style={{ color: "teal" }}>Responsive Design</strong>: Optimized for desktop and mobile.
    </li>
  </ul>
    </>
  ),
    image: "https://t3.ftcdn.net/jpg/00/96/97/90/240_F_96979048_Y3YBHNDut6fhtsf9TT97sU87aQDa10oQ.jpg",// Replace with actual project image
    githubLink: "https://github.com/mishrakajal2200?tab=repositories", // Replace with your GitHub link
    demoLink: "https://jazzy-zabaione-b29249.netlify.app", // Replace with your live demo link
  },
  {
    title: "AI Chat Application",
    description: (
      <>
        <ul className="text-start lh-sm">
        <p className="project-status text-danger text-center">🚧 Currently under development. Stay tuned for updates!</p>
          A real-time Chat Application built with MongoDB, Express, React, TailwindCSS, and Node.js. Key features:
          <li>
            <strong style={{ color: "orange" }}>Real-time Messaging</strong>: Instantly send and receive messages with WebSockets.
          </li>
        </ul>
      </>
    ),
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/chat-app.jpg", // Replace with an actual project image URL
    githubLink: "https://github.com/mishrakajal2200/AI_chat_app.git", // Replace with your GitHub repo link
    demoLink: "https://lively-bienenstitch-7ddb35.netlify.app/", // Replace with your live demo link
  },
  {
    title: "E-Commerce Website",
    description: (
      <>
        <ul className="text-start lh-sm">
          <p className="project-status text-success text-center">
            ✅ Fully Functional and Ready to Use!
          </p>
          A fully functional E-Commerce Website template built with HTML, CSS, JavaScript and Bootstrap. Key features:
          <li>
            <strong style={{ color: "blue" }}>🏷️ Product Listings</strong>: Display products dynamically with categories and filters.
          </li>
          <li>
            <strong style={{ color: "green" }}>🛍️ Cart & Checkout</strong>: Add items to cart and proceed to checkout seamlessly.
          </li>
          <li>
            <strong style={{ color: "purple" }}>💳 Payment Integration</strong>: Supports multiple payment gateways.
          </li>
          <li>
            <strong style={{ color: "red" }}>📱 Responsive Design</strong>: Works perfectly on all screen sizes.
          </li>
        </ul>
      </>
    ),
    image: "https://www.wedowebapps.ca/wp-content/uploads/2021/04/Advantages-of-e-commerce-100.jpg", // Replace with an actual project image URL
    githubLink: "https://github.com/mishrakajal2200/web-order.git", // Replace with your GitHub repo link
    demoLink: "https://web-ordering.netlify.app/", // Replace with your live demo link
  },
  {
    title: "Website Templates Collection",
    description: (
      <>
        <ul className="text-start lh-sm">
          <p className="project-status text-primary text-center">
            🎨 Collection of Responsive Web Templates!
          </p>
          A set of professionally designed website templates built using **HTML, CSS, JavaScript, and EJS**. These templates can be easily customized and integrated into various projects. Key features:
          <li>
            <strong style={{ color: "green" }}>🖌️ Modern UI/UX</strong>: Designed with a clean and intuitive user experience.
          </li>
          <li>
            <strong style={{ color: "purple" }}>💡 Dynamic EJS Templating</strong>: Server-side rendering with EJS for reusable components.
          </li>
         
         
        </ul>
      </>
    ),
    image: "https://www.shutterstock.com/image-vector/abstract-curve-shape-on-blue-600nw-2288072613.jpg", // Replace with an actual project image URL
    githubLink: "https://github.com/mishrakajal2200/visiting-cards.git", // Replace with your GitHub repo link
    demoLink: "https://visiting-cards.onrender.com", // Replace with your live demo link
  }
  

];

const Project = () => {
  return (
    <section id="projects" className="bg-light py-5 min-vh-100">
      <div className="container text-center mt-5">
        <h2 className="text-primary mb-5">Recent Work</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="project-card shadow-lg rounded min-vh-40">
                <img src={project.image} alt={project.title} className="img-fluid col-lg-12 rounded-top text-dark" style={{ height: "240px", objectFit: "cover" }} />
                <div className="p-3">
                  <h4 className="text-dark">{project.title}</h4>
                  <p className='text-dark'>{project.description}</p>
                  <div className="d-flex justify-content-between mt-3">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaGithub size={20} className="me-2" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                      whileHover={{ scale: 1.1 }}
                    >
                      <FaExternalLinkAlt size={20} className="me-2" />
                      Live Demo
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
