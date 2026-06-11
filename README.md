# Manish Mishra - Interactive Developer Portfolio

Welcome to my personal developer portfolio website. This is a highly interactive, modern, and performant portfolio showcasing my projects, experience, technical skills, and achievements.

Live Site: [portfolio-manish-mishra.netlify.app](https://portfolio-manish-mishra.netlify.app)

---

## 🚀 Features

- **Rich Visual Aesthetics**: Modern dark/light mode switching, sleek glassmorphism design, matrix grid overlays, and subtle noise textures.
- **Interactive Particle System**: Custom particle effects using `@tsparticles` that respond to hover/repulsion.
- **Dynamic Animations**: Smooth scroll transitions via `react-scroll`, card hover effects, custom custom-cursor tracking, and typewriter subtitles.
- **GATE 2026 Qualified & Academics**: Displays CGPA and GATE rank directly in the credentials section.
- **Production-Ready & Optimized**: Zero linter errors, built for scale, and optimized for speed.

---

## 🛠️ Tech Stack

- **Frontend Core**: [React.js](https://react.dev/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS, Flexbox/CSS Grid, HSL custom properties, CSS Variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [Typewriter Effect](https://github.com/tameemsafi/typewriter-effect)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment & Integration**: Vercel/Netlify config, CI/CD pipeline integrated

---

## 📁 Project Structure

```text
├── public/                 # Static assets (favicons, PDFs, generated project mockups)
├── src/
│   ├── assets/             # Brand logos & profile graphics
│   ├── components/
│   │   ├── layout/         # CustomCursor, Navbar
│   │   └── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │       ├── *.jsx       # JSX components
│   │       └── *.css       # Component-specific styles
│   ├── context/            # Global theme context (Dark/Light state)
│   ├── App.jsx             # App layout entry point
│   ├── main.jsx            # React render mount
│   └── index.css           # Global typography & CSS variables
├── index.html              # HTML shell
├── package.json            # Scripts & dependencies
└── vite.config.js          # Vite config settings
```

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Manish-Mishra-2004/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## 📜 License

This project is open-source. Feel free to fork and customize it for your own portfolio!
