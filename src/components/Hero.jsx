import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { name, title, subtitle, description } = cvData.personal;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20"
    >
      {/* ── Fondo decorativo ── */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          
          {/* Badge animado */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            <span className="relative flex size-2 mr-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
            </span>
            Disponible para nuevas oportunidades
          </div>

          {/* Nombre con gradiente */}
          <h1 className="animate-fade-in-up animation-delay-100 mb-4 text-5xl font-black tracking-tight sm:text-7xl">
            Hola, soy{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-radical-300 bg-clip-text text-transparent">
              {name.split(" ")[0]}
            </span>
          </h1>

          {/* Títulos */}
          <h2 className="animate-fade-in-up animation-delay-200 mb-6 text-2xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          
          <p className="animate-fade-in-up animation-delay-300 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
            {subtitle}. {description}
          </p>

          {/* Botones de acción */}
          <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <a
              href="#contacto"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-1 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              )}
            >
              Contactar
            </a>
            
            <a
              href="/CV_Francisca_Arancibia_Chaparro.pdf"
              download
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full border-2 border-border bg-card px-8 text-base font-medium text-foreground transition-all hover:border-primary hover:text-primary hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
              )}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar CV
            </a>
          </div>
        </div>
      </div>
      
      {/* Decoración CSS (estilos globales que deberían ir en Tailwind, pero se incluyen aquí como clases personalizadas por simplicidad) */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    </section>
  );
}
