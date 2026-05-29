import { useEffect } from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  // Prevent hydration errors with scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="app-container">
      <div className="noise-overlay"></div>
      <div className="grid-bg"></div>
      <CustomCursor />
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
