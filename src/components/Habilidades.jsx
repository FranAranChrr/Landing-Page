import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function Skills() {
  const { technical, tools, soft } = cvData.skills;

  return (
    <section id="habilidades" className="py-24 sm:py-32 bg-secondary/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Columna Izquierda: Habilidades Técnicas (Barras de progreso) */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              Desarrollo Técnico
            </h3>
            
            <div className="space-y-6">
              {technical.map((skill, index) => (
                <div key={index} className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-semibold text-foreground">{skill.name}</span>
                    <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                  </div>
                  {/* Barra de fondo */}
                  <div className="h-3 w-full rounded-full bg-muted overflow-hidden border border-border/50">
                    {/* Barra de progreso animada */}
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out relative overflow-hidden"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* Brillo animado interno */}
                      <div className="absolute top-0 left-0 h-full w-full bg-white/20 animate-[shimmer_2s_infinite] -skew-x-12" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Herramientas y Habilidades Blandas */}
          <div className="flex flex-col gap-12">
            
            {/* Herramientas */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                Herramientas
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-4 rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:bg-primary/5 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Habilidades Blandas */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                Habilidades Blandas
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {soft.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center rounded-full bg-background border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary hover:shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}} />
    </section>
  );
}
