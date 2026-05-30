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
          <div className="bio-scroll-container">
            <p className="bio-text">
              I am a final-year B.Tech Computer Science &amp; Engineering student at <span className="bio-highlight">Invertis University</span>, Bareilly (UP), graduating in May 2026 with a CGPA of 8.8/10.0. Originally from Ghazipur, Uttar Pradesh, I have built a strong foundation in full-stack web development with a primary focus on the <span className="bio-highlight">MERN stack</span> — MongoDB, Express.js, React.js, and Node.js.
            </p>
            <p className="bio-text">
              Over the course of my academic journey, I have had the privilege of working in two industry internships. At <span className="bio-highlight">IIT Jammu</span>, I contributed to an R&D project where I built a MERN-based car rental platform, gaining hands-on experience in real-world software development within a research environment. I also completed a web development internship at <span className="bio-highlight">AICTE</span>, further strengthening my practical skills in building scalable web applications.
            </p>
            <p className="bio-text">
              My technical expertise spans across React.js, Node.js, Express.js, MongoDB Atlas, TypeScript, Redux Toolkit, JWT authentication, and AI API integrations including Claude, Gemini, and OpenAI. I have applied these skills across several meaningful projects:
            </p>
            <ul className="bio-text" style={{ paddingLeft: '2rem', listStyleType: 'disc' }}>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">InkMind</span> — An AI-powered eBook creation platform built with React 18, TypeScript, Supabase, and the Claude API, enabling users to generate and publish structured digital content using AI.</li>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">Team Task Manager</span> — A full-stack project management web app with role-based access, JWT authentication, and deployment on Railway, built as part of a company placement assignment.</li>
              <li><span className="bio-highlight">Car Rental Platform (IIT Jammu)</span> — A full-featured MERN-based rental system developed during my R&D internship at one of India's premier technical institutions.</li>
            </ul>
            <p className="bio-text">
              Beyond development, I have also qualified <span className="bio-highlight">GATE CSE 2026</span>, reflecting my commitment to continuous learning and academic excellence.
            </p>
            <p className="bio-text">
              I am currently actively seeking full-time Software Engineering / Full-Stack Developer roles at product-based companies where I can contribute meaningfully from day one. I am passionate about building user-centric web applications, integrating AI capabilities into real-world products, and writing clean, scalable code.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>Fresher</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>Multiple</div>
              <div className="stat-label">Projects Built</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
