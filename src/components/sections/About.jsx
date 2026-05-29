import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span style={{ color: 'var(--primary-accent)' }}>01.</span> About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Profile Image with Animated Border */}
          <div className="profile-image-container neon-glow">
            <div className="profile-image-inner">
              <img src="/img.png" alt="Manish Mishra" className="profile-img" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="bio-text">
            Hello! My name is <span className="bio-highlight">Manish Mishra</span> and I enjoy creating things that live on the internet. My interest in web development started back when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about programming!
          </p>
          <p className="bio-text">
            Fast-forward to today, and I've had the privilege of building a variety of web applications. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p className="bio-text">
            I specialize in the <span className="bio-highlight">MERN Stack</span> (MongoDB, Express, React, Node.js) and have a passion for creating <span className="bio-highlight">visually stunning, highly interactive interfaces</span> using modern design principles.
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
