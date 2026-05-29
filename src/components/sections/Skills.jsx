import { motion } from 'framer-motion';
import { Database, Layout, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layout size={24} className="category-icon" />,
    skills: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'HTML5/CSS3']
  },
  {
    title: 'Backend',
    icon: <Server size={24} className="category-icon" />,
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Python', 'WebSockets', 'JWT Auth']
  },
  {
    title: 'Database',
    icon: <Database size={24} className="category-icon" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose', 'Prisma']
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={24} className="category-icon" />,
    skills: ['Git & GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'Linux', 'Jest']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--primary-accent)' }}>02.</span> Technical Skills
      </motion.h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div key={index} className="skill-category" variants={itemVariants}>
            <h3 className="category-title">
              {category.icon}
              {category.title}
            </h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
