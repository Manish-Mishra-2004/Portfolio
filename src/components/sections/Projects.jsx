import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'InkMind',
    description: 'A full-stack AI eBook creation platform where users generate, edit, and export structured eBooks using the Claude API with real-time streaming responses.',
    tech: ['React 18', 'TypeScript', 'Supabase', 'Claude API', 'Vercel'],
    github: 'https://github.com/Manish-Mishra-2004',
    live: 'https://shorturl.at/cv491',
    image: '/inkmind.png'
  },
  {
    title: 'Full-Stack Task Manager',
    description: 'A MERN task management application covering backend essentials including database integration, user authentication (JWT), and secure REST API development.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/Manish-Mishra-2004',
    live: 'https://shorturl.at/gnv3z',
    image: '/taskmanager.png'
  },
  {
    title: 'Car Rental Platform',
    description: 'A full-stack MERN car rental platform featuring a searchable catalogue, user booking system, and owner dashboard for listing and reservation management. Built during internship at IIT Jammu.',
    tech: ['MongoDB', 'Express', 'React.js', 'Node.js', 'ImageKit', 'JWT'],
    github: 'https://github.com/Manish-Mishra-2004',
    live: 'https://github.com/Manish-Mishra-2004',
    image: '/carrental.png'
  },
  {
    title: 'AI Waste Management System',
    description: 'An AI-based waste management system built in 24 hours that secured a Top Performer placement at Inverthon 2024. Led a 3-member team.',
    tech: ['React.js', 'Tailwind CSS', 'OpenAI API', 'Node.js', 'Git'],
    github: 'https://github.com/Manish-Mishra-2004',
    live: 'https://github.com/Manish-Mishra-2004',
    image: '/wastemanagement.png'
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
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <span className="project-placeholder">[ Project Image ]</span>
              )}
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
