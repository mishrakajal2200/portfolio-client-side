// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const About = () => {
//   return (
//     <div className="container-fluid min-vh-100 d-flex flex-column bg-dark">
//       {/* Heading Section */}
//       <h1 className="text-center text-primary my-3">About Me</h1>

//       {/* Introduction Section */}
//       <div className="d-flex justify-content-center">
//         <p className="lead text-white text-start col-12 col-md-8">
//           Hi! I'm <span className="fw-bold text-primary">Kajal Mishra</span>, a passionate Full Stack Developer specializing in the <span className="text-danger">MERN stack</span> (MongoDB, Express.js, React, Node.js). With a strong foundation in both front-end and back-end development, I enjoy creating dynamic, user-friendly web applications that solve real-world problems.
//         </p>
//       </div>

//       {/* Skills Section */}
//       <div className="d-flex justify-content-center">
//         <p className="text-start col-12 col-md-8">
//           I have hands-on experience working with a wide range of technologies, including <span className="fw-bold text-info">JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, and Material-UI</span>. I focus on writing clean, scalable, and efficient code while ensuring seamless user experiences. Additionally, I have worked on <span className="fw-bold text-success">API integrations</span>, where I integrated third-party APIs to enhance the functionality of applications.
//         </p>
//       </div>

//       {/* Freelance Work Section */}
//       <div className="d-flex justify-content-center">
//         <p className="text-start col-12 col-md-8">
//           In addition to my development skills, I'm also actively working on <span className="fw-bold text-warning">freelance projects</span> where I apply my expertise to deliver high-quality solutions for clients. Whether it's building a full-stack web application, integrating APIs, or enhancing existing systems, I am always up for a challenge.
//         </p>
//       </div>

//       {/* Key Skills Section */}
//       <div className="d-flex justify-content-center mt-3">
//   <div className="col-12 col-md-8">
//     <h3 className="text-center text-primary">Key Skills</h3>
//     <div className='justify-content-center d-flex'>
//     <ul className='text-center list-unstyled'>
//       <li><strong className='text-danger'>Frontend:</strong> React, Redux, Tailwind CSS, Material-UI</li>
//       <li><strong className='text-danger'>Backend:</strong> Node.js, Express.js, REST APIs</li>
//       <li><strong className='text-danger'>Database:</strong> MongoDB</li>
//       <li><strong className='text-danger'>API Integrations:</strong> Worked with third-party APIs to enhance functionality</li>
//       <li><strong className='text-danger'>Version Control:</strong> Git, GitHub</li>
//       <li><strong className='text-danger'>Deployment:</strong> Vercel, Netlify, Heroku, Cyclic.sh</li>
//     </ul>
//     </div>
   
//   </div>
// </div>


//       {/* Projects Section */}
//       <div className="d-flex justify-content-center mt-3">
//         <div className="col-12 col-md-8">
//           <h3 className="text-center text-primary">Projects</h3>
//           <p className="text-start">
//             I’ve worked on several projects ranging from e-commerce platforms to chat applications, where I have implemented complex features like user authentication, state management, API integrations, and real-time communication. You can check out my work in the "Projects" section.
//           </p>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="d-flex justify-content-center mt-3">
//         <div className="col-12 col-md-8">
//           <h3 className="text-center text-primary">Let's Connect</h3>
//           <p className="text-start">
//             If you're looking for a developer to collaborate with, or if you have a project in mind, feel free to reach out. I'm always open to new opportunities and challenges.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container-fluid min-vh-100 bg-dark py-5 px-3 px-md-5">
      
      {/* PAGE TITLE */}
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold mt-5">About Me</h1>
        <p className="text-secondary">
          Get to know me, my skills, and what I love building
        </p>
      </div>

      {/* INTRO CARD */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="p-4 rounded"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white fs-5 mb-0">
              Hi! I'm{" "}
              <span className="fw-bold text-primary">Kajal Mishra</span>, a
              passionate Full Stack Developer specializing in the{" "}
              <span className="text-info">MERN stack</span> (MongoDB,
              Express.js, React, Node.js). I enjoy building scalable,
              user-friendly web applications that solve real-world problems
              with clean code and thoughtful UI.
            </p>
          </div>
        </div>
      </div>

      {/* EXPERIENCE CARD */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="p-4 rounded"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h4 className="text-primary mb-3">What I Work With</h4>
            <p className="text-light mb-0">
              I have hands-on experience with{" "}
              <span className="fw-semibold text-info">
                JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, and Material UI
              </span>
              . I focus on writing maintainable, scalable code and delivering
              smooth user experiences. I’ve also worked extensively on{" "}
              <span className="fw-semibold text-success">
                REST APIs and third-party API integrations
              </span>{" "}
              to enhance application functionality.
            </p>
          </div>
        </div>
      </div>

      {/* FREELANCE CARD */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10 col-lg-8">
          <div
            className="p-4 rounded"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h4 className="text-primary mb-3">Freelance & Practical Work</h4>
            <p className="text-light mb-0">
              I actively work on{" "}
              <span className="fw-semibold text-warning">
                freelance and real-world projects
              </span>
              , where I deliver complete solutions—from frontend UI to backend
              APIs and deployment. I enjoy collaborating with clients and
              turning ideas into reliable, production-ready applications.
            </p>
          </div>
        </div>
      </div>

      {/* SKILLS GRID */}
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="text-primary mb-4 text-center">Key Skills</h3>

          <div className="row g-3">
            {[
              ["Frontend", "React, Redux, Tailwind CSS, Material UI"],
              ["Backend", "Node.js, Express.js, REST APIs"],
              ["Database", "MongoDB"],
              ["API Integration", "Third-party APIs"],
              ["Version Control", "Git, GitHub"],
              ["Deployment", "Vercel, Netlify, Heroku, Cyclic.sh"],
            ].map(([title, desc], index) => (
              <div key={index} className="col-12 col-md-6">
                <div
                  className="p-3 rounded h-100"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <h6 className="text-info mb-1">{title}</h6>
                  <p className="text-light mb-0 small">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10 col-lg-8">
          <h3 className="text-primary mb-3 text-center">Projects</h3>
          <p className="text-light text-center">
            I’ve built projects including e-commerce platforms, chat
            applications, and full-stack dashboards—implementing features like
            authentication, state management, API integrations, and real-time
            updates. You can explore them in my Projects section.
          </p>
        </div>
      </div>

      {/* CONTACT */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">
          <h3 className="text-primary mb-3">Let’s Connect</h3>
          <p className="text-light">
            I’m open to new opportunities, collaborations, and challenging
            projects. If you’re looking for a dedicated developer, let’s talk.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
