import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import ProjectsBlock from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to light if no saved theme, but if they had dark saved, use it.
    if (savedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white dark:bg-slate-900 dark:text-slate-400 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-white transition-colors duration-300">
      {/* Sticky Top Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Single Page Sections Container with beautiful spacing and dark layout */}
      <main className="flex-grow">
        {/* Hero Section of systems architect blueprint */}
        <Hero />

        {/* Stats Bar */}
        <StatsBar />

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        {/* Own & Client Projects Case-Study Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <ProjectsBlock />
        </motion.div>

        {/* Categorized Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Skills />
        </motion.div>

        {/* Architectural Delivery Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Process />
        </motion.div>

        {/* High-Converting Advisory Request Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </main>

      {/* Footer System Branding */}
      <Footer />
    </div>
  );
}
