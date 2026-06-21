import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Services from "./components/Services";
import ProjectsBlock from "./components/Projects";
import Skills from "./components/Skills";
import Process from "./components/Process";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
      {/* Sticky Top Glassmorphic Navbar */}
      <Navbar />

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

        {/* Consulting and Contracting Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Services />
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

        {/* Career Experience Timeline & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Experience />
        </motion.div>

        {/* Client Endorsement Quotes Carousel Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Testimonials />
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
