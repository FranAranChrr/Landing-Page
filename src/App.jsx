import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/Yo";
import Experience from "./components/Experiencia";
import Skills from "./components/Habilidades";
import Projects from "./components/Proyectos";
import Education from "./components/Educacion";
import Contact from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;