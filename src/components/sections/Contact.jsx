import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <motion.p 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: '1.2rem', color: 'var(--primary-accent)', marginBottom: '1rem' }}
        >
          05. What's Next?
        </motion.p>
        
        <motion.h2 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="contact-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="mailto:manish.mishra.072004@gmail.com">
            <button className="contact-btn">Say Hello</button>
          </a>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="footer-socials">
          <a href="https://github.com/Manish-Mishra-2004" target="_blank" rel="noreferrer" className="footer-social-link">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/manish-mishra-82a560251" target="_blank" rel="noreferrer" className="footer-social-link">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:manish.mishra.072004@gmail.com" className="footer-social-link">
            <Mail size={20} />
          </a>
        </div>
        <p className="footer-text">
          Designed & Built by Manish Mishra
        </p>
      </footer>
    </>
  );
};

export default Contact;
