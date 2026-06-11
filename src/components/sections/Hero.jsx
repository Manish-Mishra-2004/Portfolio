import { useCallback } from 'react';
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './Hero.css';

const Hero = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleColors = theme === 'dark' ? ["#00F5FF", "#7C3AED", "#ffffff"] : ["#0284C7", "#6D28D9", "#0F172A"];
  const linkColor = theme === 'dark' ? "#ffffff" : "#0F172A";

  return (
    <section id="home" className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColors,
            },
            links: {
              color: linkColor,
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glitch-wrapper">
            <h1 className="glitch-name" data-text="Manish Mishra">Manish Mishra</h1>
          </div>
          
          <div className="hero-subtitle">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Specialist', 'AI Integrations Developer', 'GATE CSE 2026 Qualified'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <p className="hero-description">
            Building scalable full-stack web applications with React, Node.js & TypeScript. Passionate about integrating AI capabilities and crafting visually stunning, production-grade experiences.
          </p>

          <div className="hero-ctas">
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className="btn btn-secondary">Download Resume</button>
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Manish-Mishra-2004" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manish-mishra-82a560251" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:manish.mishra.072004@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth={true} duration={500} className="scroll-arrow">
        <ChevronDown size={32} />
      </Link>
    </section>
  );
};

export default Hero;
