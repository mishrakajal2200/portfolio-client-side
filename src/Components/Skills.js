

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaServer, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

const skills = [
  { name: "HTML", percentage: 100, color: "bg-danger", icon: <FaHtml5 size={30} /> },
  { name: "CSS", percentage: 100, color: "bg-primary", icon: <FaCss3Alt size={30} /> },
  { name: "JavaScript", percentage: 85, color: "bg-warning", icon: <FaJs size={30} /> },
  { name: "React", percentage: 95, color: "bg-info", icon: <FaReact size={30} /> },
  { name: "Node.js", percentage: 90, color: "bg-success", icon: <FaNode size={30} /> },
  { name: "MongoDB", percentage: 100, color: "bg-teal", icon: <FaDatabase size={30} /> },
  { name: "Express.js", percentage: 95, color: "bg-secondary", icon: <FaServer size={30} /> },
  { name: "Git", percentage: 95, color: "bg-success", icon: <FaGitAlt size={30} /> }
];

const Skills = () => {
  return (
    <div className='align-items-center justify-content-center bg-dark py-3  d-flex min-vh-100'>
 <section id="skills" className="text-white mt-3 col-12">
     <h2 className='mb-5 mt-4 text-warning'>My Skills</h2>
      <div className="container d-flex justify-content-center text-center">
     
        <div className="row col-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4 skill-item d-flex justify-content-between align-items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="d-flex flex-column w-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <motion.div
                      className="icon-container me-2"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-warning">
                      {skill.name}
                    </h3>
                  </div>
                  <motion.span
                    className="text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
                <div className="progress mb-3" style={{ height: "15px" }}>
                  <motion.div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    style={{ width: `${skill.percentage}%` }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1 }}
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.percentage}%
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default Skills;
