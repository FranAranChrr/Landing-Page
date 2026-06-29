import { useState, useRef, useEffect } from "react";
import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const { technical, tools, soft } = cvData.skills;

  // Combinar desarrollo técnico y herramientas en una sola lista
  const allSkills = [
    ...technical.map((s) => s.name),
    ...tools,
  ];

  const middleIndex = Math.floor(allSkills.length / 2);
  const [activeIndex, setActiveIndex] = useState(middleIndex);
  const carouselRef = useRef(null);
  const itemRefs = useRef([]);

  // Centrar el item activo en el carrusel
  const scrollToCenter = (index) => {
    const container = carouselRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const scrollLeft =
      item.offsetLeft - container.offsetLeft - containerRect.width / 2 + itemRect.width / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  // Centrar al montar y cuando cambia el activo
  useEffect(() => {
    scrollToCenter(activeIndex);
  }, [activeIndex]);

  // Centrar al inicio sin animación
  useEffect(() => {
    const container = carouselRef.current;
    const item = itemRefs.current[middleIndex];
    if (!container || !item) return;

    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    container.scrollLeft =
      item.offsetLeft - container.offsetLeft - containerRect.width / 2 + itemRect.width / 2;
  }, []);

  const goLeft = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : allSkills.length - 1));
  };

  const goRight = () => {
    setActiveIndex((prev) => (prev < allSkills.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="habilidades" className="py-24 sm:py-32 bg-secondary/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Mi <span className="text-primary">Stack</span> Tecnológico
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-muted-foreground max-w-lg">
            Tecnologías y herramientas con las que trabajo día a día
          </p>
        </div>

        {/* ── Carrusel ── */}
        <div className="relative flex items-center">

          {/* Botón Izquierdo */}
          <button
            onClick={goLeft}
            className="flex-shrink-0 z-10 flex size-12 items-center justify-center rounded-full bg-card border-2 border-border shadow-lg text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 active:scale-95"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>

          {/* Contenedor del Carrusel */}
          <div className="relative flex-1 overflow-hidden mx-4">

            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-hidden py-10 px-[40%]"
            >
              {allSkills.map((skill, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "group relative flex-shrink-0 flex flex-col items-center justify-center transition-all duration-500 ease-out cursor-pointer",
                      isActive
                        ? "w-40 h-40 sm:w-48 sm:h-48 scale-110"
                        : "w-32 h-32 sm:w-40 sm:h-40 opacity-60 hover:opacity-90"
                    )}
                  >
                    {/* Espacio para ícono */}
                    <div
                      className={cn(
                        "flex items-center justify-center rounded-xl transition-all duration-500 overflow-hidden relative",
                        isActive
                          ? "size-24 sm:size-28 mb-4"
                          : "size-16 sm:size-20 mb-3"
                      )}
                    >
                      {/* Intentar cargar la imagen */}
                      <img
                        src={`/icons/${skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}.png`}
                        alt={skill}
                        className="absolute inset-0 w-full h-full object-contain p-1 z-10"
                        onError={(e) => {
                          e.target.style.opacity = "0"; // Ocultar imagen si falla
                          if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.style.opacity = "1"; // Mostrar SVG por defecto
                          }
                        }}
                        onLoad={(e) => {
                          e.target.style.opacity = "1";
                          if (e.target.nextElementSibling) {
                            e.target.nextElementSibling.style.opacity = "0"; // Ocultar SVG por defecto si la imagen carga bien
                          }
                        }}
                      />
                      {/* SVG por defecto */}
                      <svg xmlns="http://www.w3.org/2000/svg" width={isActive ? "48" : "32"} height={isActive ? "48" : "32"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground transition-all duration-500 z-0 absolute"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    </div>

                    {/* Nombre */}
                    <span
                      className={cn(
                        "font-bold text-center leading-tight transition-all duration-500 px-1",
                        isActive
                          ? "text-xl sm:text-2xl text-primary"
                          : "text-sm sm:text-base text-muted-foreground"
                      )}
                    >
                      {skill}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botón Derecho */}
          <button
            onClick={goRight}
            className="flex-shrink-0 z-10 flex size-12 items-center justify-center rounded-full bg-card border-2 border-border shadow-lg text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 active:scale-95"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>

        </div>

        {/* Indicadores de posición (dots) */}
        <div className="flex justify-center gap-1.5 mt-6">
          {allSkills.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full transition-all duration-300",
                activeIndex === index
                  ? "w-7 h-2.5 bg-primary shadow-md shadow-primary/30"
                  : "size-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              )}
              aria-label={`Ir a ${allSkills[index]}`}
            />
          ))}
        </div>

        {/* ── Habilidades Blandas ── */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            Habilidades Blandas
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {soft.map((skill, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-background border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
