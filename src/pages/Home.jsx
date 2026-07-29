import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Yo from "../components/Yo";
import Experiencia from "../components/Experiencia";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";
import Educacion from "../components/Educacion";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Yo />
        <Experiencia />
        <Habilidades />
        <Proyectos />
        <Educacion />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
