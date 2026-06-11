import { motion } from 'framer-motion';
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
            <ul className="bio-text" style={{ paddingLeft: '2rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">InkMind</span> — An AI-powered eBook creation platform built with React 18, TypeScript, Supabase, and the Claude API, enabling users to generate and publish structured digital content using AI.</li>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">Full-Stack Task Manager</span> — A MERN-based task management application covering backend essentials including database integration, user authentication (JWT), and secure REST API development.</li>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">Car Rental Platform</span> — A full-featured MERN-based rental system developed during my R&D internship at <span className="bio-highlight">IIT Jammu</span>, featuring role-based access control and ImageKit.</li>
              <li><span className="bio-highlight">AI-Based Waste Management System</span> — A hackathon project built in 24 hours that secured top performer placement at Inverthon 2024.</li>
            </ul>
            <p className="bio-text">
              Beyond development, I have also qualified <span className="bio-highlight">GATE CSE 2026</span>, reflecting my commitment to continuous learning and strong computer science fundamentals.
            </p>

            <h4 style={{ color: 'var(--secondary-accent)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>Certifications</h4>
            <ul className="bio-text" style={{ paddingLeft: '2rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">The Complete Full Stack Web Development Bootcamp</span> | Udemy – Angela Yu</li>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">Complete AI &amp; LLM Engineering Bootcamp</span> | Udemy – Hitesh Choudhary</li>
              <li><span className="bio-highlight">Data Structures &amp; Algorithms</span> | Codehelp – Love Babbar</li>
            </ul>

            <h4 style={{ color: 'var(--secondary-accent)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.8rem' }}>Achievements</h4>
            <ul className="bio-text" style={{ paddingLeft: '2rem', listStyleType: 'disc', marginBottom: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><span className="bio-highlight">GATE CSE 2026 Qualified</span> (Score: 429 | AIR ~13,429 | EWS Category)</li>
              <li><span className="bio-highlight">Hackathon – Top Performer</span> | Invertis University / Inverthon 2024</li>
            </ul>

            <p className="bio-text">
              I am currently actively seeking full-time Software Engineering / Full-Stack Developer roles at product-based companies where I can contribute meaningfully from day one.
            </p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>8.8 / 10.0</div>
              <div className="stat-label">B.Tech CGPA</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>AIR 13,429</div>
              <div className="stat-label">GATE CSE 2026</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>2 Internships</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ fontSize: '1.8rem' }}>MERN + AI</div>
              <div className="stat-label">Core Focus</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
