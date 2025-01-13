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

  // {
  // title: "Chat Application",
  // description: (
  //   <>
     
  //    <ul className="text-start lh-sm">
  //   A responsive Chat Application built with MongoDB,Express,React,tailwindCss and Node.js Key features:
  //   <li>
  //     <strong style={{ color: "orange" }}>Product Browsing</strong>: Interactive catalog with search and filters.
  //   </li>
  //   <li>
  //     <strong style={{ color: "red" }}>Responsive</strong>: Work In Progress.
  //   </li>
  //   <li>
  //     <strong style={{ color: "blue" }}>Order Management</strong>: Track orders in real time.
  //   </li>
   
  // </ul>
  //   </>
  // ),
  // image: "https://dataoptin.com/wp-content/uploads/2021/05/AdobeStock_223290240-1-scaled.jpeg", // Replace with actual project image
  // githubLink: "https://github.com/mishrakajal2200/web-order.git", // Replace with your GitHub link
  // demoLink: "https://web-ordering.netlify.app", // Replace with your live demo link
  // }
  {
    title: "Chat Application",
    description: (
      <>
        <ul className="text-start lh-sm">
          A real-time Chat Application built with MongoDB, Express, React, TailwindCSS, and Node.js. Key features:
          <li>
            <strong style={{ color: "orange" }}>Real-time Messaging</strong>: Instantly send and receive messages with WebSockets.
          </li>
          <li>
            <strong style={{ color: "red" }}>User Authentication</strong>: Secure login and signup with JWT authentication.
          </li>
          <li>
            <strong style={{ color: "blue" }}>Responsive Design</strong>: Optimized for both mobile and desktop users.
          </li>
          <li>
            <strong style={{ color: "green" }}>Group Chats</strong>: Create and manage group conversations effortlessly.
          </li>
          <li>
            <strong style={{ color: "purple" }}>Media Sharing</strong>: Share images, videos, and files seamlessly.
          </li>
        </ul>
      </>
    ),
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/chat-app.jpg", // Replace with an actual project image URL
    githubLink: "https://github.com/mishrakajal2200/chat-application.git", // Replace with your GitHub repo link
    demoLink: "https://chat-application-demo.netlify.app", // Replace with your live demo link
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
