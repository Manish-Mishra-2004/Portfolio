import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    role: 'Research & Development Intern',
    company: 'IIT Jammu',
    duration: 'Jun 2025 - Aug 2025',
    details: [
      'Built a full-stack MERN car rental platform (React.js, Node.js, Express, MongoDB) with searchable catalogue, user booking system, and owner dashboard for listing and reservation management.',
      'Integrated ImageKit for cloud-based image storage; implemented JWT authentication and role-based access control for 50+ user and owner accounts. Deployed on Vercel with production CI/CD pipeline.',
      'Collaborated in an Agile 4-member team using Git branching workflows, delivering all project milestones on schedule.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'AICTE',
    duration: 'Apr 2025 - Jun 2025',
    details: [
      'Built a functional e-commerce frontend with product listing, cart, checkout, filtering, and search using Redux Toolkit for state management and FakeStoreAPI for real-time product data via Redux Thunk.',
      'Designed a responsive UI with React.js and Tailwind CSS; wrote clean, modular component architecture following best practices for scalability and code reuse.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--primary-accent)' }}>04.</span> Experience
      </motion.h2>

      <div className="timeline">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content neon-glow">
              <div className="timeline-header">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-name">@ {exp.company}</div>
                </div>
                <div className="duration">{exp.duration}</div>
              </div>
              <ul className="experience-details">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
