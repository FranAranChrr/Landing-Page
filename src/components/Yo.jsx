import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function About() {
  const { name, description, photo } = cvData.personal;

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-secondary/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Sobre <span className="text-primary">Mí</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Foto */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative group">
              {/* Borde animado / Gradiente decorativo */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-radical-300 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
              
              {/* Contenedor de la foto (Círculo blanco) */}
              <div className="relative aspect-square w-64 sm:w-80 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl flex items-center justify-center">
                {photo ? (
                  <img 
                    src={photo} 
                    alt={name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Placeholder si no hay foto */
                  <div className="flex h-full w-full items-center justify-center bg-muted/50 text-6xl font-black text-primary/30">
                    FA
                  </div>
                )}
              </div>
              
              {/* Decoración geométrica */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full border-4 border-dashed border-primary/50" />
              <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-full border-4 border-accent/40" />
            </div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Desarrolladora Full-Stack
            </h3>
            
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p className="leading-relaxed">
                ¡Hola! Soy Francisca, Desarrolladora Full-Stack.
                 transformo desafíos técnicos en soluciones web limpias, eficientes e intuitivas.
              </p>
              
              <p className="leading-relaxed mt-4">
                Mi objetivo es cubrir las necesidades del proyecto desde desde la estructuración de la lógica del servidor hasta la optimización de los componentes. 
                Mi meta es asegurar que cada plataforma sea rápida, segura y responda de manera óptima bajo cualquier escenario. 
                priorizo siempre la calidad del producto final y la eficiencia del sistema sobre las soluciones rápidas.
              </p>

              <p className="leading-relaxed mt-4">
                Me interesa el área de Machine Learning, tengo conocimientos básicos en modelos predictivos
                y análisis de datos. Me gusta trabajar de forma responsable y organizada, aportando al equipo y
                cumpliendo con los objetivos
              </p>
            </div>

            {/* Pilares del Perfil */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                </div>
                <p className="text-sm font-bold text-foreground">Desarrollo Full-Stack</p>
                <p className="mt-1 text-xs text-muted-foreground">Frontend & Backend</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <p className="text-sm font-bold text-foreground">Diseño UI/UX</p>
                <p className="mt-1 text-xs text-muted-foreground">Interfaces Modernas</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 flex flex-col items-center text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-radical-400/10 text-radical-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <p className="text-sm font-bold text-foreground">Adaptabilidad</p>
                <p className="mt-1 text-xs text-muted-foreground">Aprendizaje Continuo</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
