import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with MERN stack. Includes user authentication, product management, shopping cart, and Stripe payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: '#',
    live: '#'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A responsive chat application supporting real-time messaging, group creation, and media sharing using Socket.io.',
    tech: ['Next.js', 'Socket.io', 'Tailwind CSS', 'PostgreSQL'],
    github: '#',
    live: '#'
  },
  {
    title: 'AI Image Generator',
    description: 'An application that leverages OpenAI APIs to generate and manipulate images based on text prompts. Features a credits system and image gallery.',
    tech: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management System',
    description: 'A Kanban-style task management tool with drag-and-drop functionality, team collaboration features, and progress tracking.',
    tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
    github: '#',
    live: '#'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--primary-accent)' }}>03.</span> Featured Projects
      </motion.h2>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div key={index} className="project-card neon-glow" variants={itemVariants}>
            <div className="project-image-container">
              <span className="project-placeholder">[ Project Image ]</span>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                  <FaGithub size={20} /> Code
                </a>
                <a href={project.live} className="project-link" target="_blank" rel="noreferrer">
                  <ExternalLink size={20} /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
