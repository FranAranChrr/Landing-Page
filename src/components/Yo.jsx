import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function About() {
  const { name, description, photo } = cvData.personal;

  return (
    <section id="sobre-mi" className="py-24 sm:py-32 bg-secondary/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
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
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-accent to-radical-300 opacity-70 blur-md transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl" />
              
              {/* Contenedor de la foto */}
              <div className="relative aspect-square w-64 sm:w-80 overflow-hidden rounded-2xl border-2 border-background bg-card flex items-center justify-center">
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
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-full border-4 border-dashed border-primary/30" />
              <div className="absolute -top-6 -left-6 -z-10 h-24 w-24 rounded-full border-4 border-accent/20" />
            </div>
          </div>

          {/* Columna Derecha: Contenido */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Desarrolladora Full-Stack basada en Chile
            </h3>
            
            <div className="prose prose-lg dark:prose-invert text-muted-foreground">
              <p className="leading-relaxed">
                ¡Hola! Soy Francisca, una estudiante de analista programador en Duoc UC y 
                desarrolladora de software. Me apasiona transformar ideas complejas en soluciones 
                tecnológicas simples, bonitas e intuitivas.
              </p>
              <p className="leading-relaxed mt-4">
                {description}
              </p>
              <p className="leading-relaxed mt-4">
                Cuando no estoy programando, me gusta explorar nuevas tecnologías y mantenerme al día con las últimas tendencias 
                del desarrollo web.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1">
                <p className="text-3xl font-black text-primary">3+</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">Años de Estudio</p>
              </div>
              
              <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1">
                <p className="text-3xl font-black text-accent">10+</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">Proyectos</p>
              </div>
              
              <div className="col-span-2 sm:col-span-1 rounded-xl border border-border bg-card p-4 shadow-sm transition-transform hover:-translate-y-1">
                <p className="text-3xl font-black text-radical-400">100%</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">Compromiso</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
