import { motion } from 'framer-motion';
import './Experience.css';

const experienceData = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2023 - Present',
    details: [
      'Developed and maintained scalable web applications using the MERN stack.',
      'Improved database query performance by 40% through indexing and aggregation optimization.',
      'Collaborated with cross-functional teams to design and implement new features.',
      'Mentored junior developers and conducted code reviews.'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Creative Agency',
    duration: 'Jun 2021 - Dec 2022',
    details: [
      'Built interactive and responsive user interfaces using React.js and Framer Motion.',
      'Translated UI/UX design wireframes to actual code that produced visual elements of the application.',
      'Optimized application for maximum speed and scalability.',
      'Integrated third-party APIs and payment gateways.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'Startup Hub',
    duration: 'Jan 2021 - May 2021',
    details: [
      'Assisted in the development of a company internal dashboard using HTML, CSS, and JavaScript.',
      'Participated in daily stand-ups and agile development processes.',
      'Wrote unit tests and improved overall code coverage.'
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
