import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experiencia" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Experiencia <span className="text-primary">Laboral</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        {/* Timeline */}
        <div className="relative wrap overflow-hidden h-full">
          {/* Línea central */}
          <div className="absolute border-opacity-20 border-primary h-full border-l-2 left-4 md:left-1/2 md:-ml-px top-0"></div>
          
          <div className="flex flex-col gap-8 md:gap-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "relative flex w-full md:items-center justify-between",
                    isEven ? "md:flex-row-reverse" : "md:flex-row",
                    "flex-row-reverse" // En mobile siempre el contenido a la derecha
                  )}
                >
                  {/* Espacio vacío para balancear en desktop */}
                  <div className="hidden md:block md:w-[45%]"></div>
                  
                  {/* Punto en la línea de tiempo */}
                  <div className="z-10 flex items-center justify-center absolute left-4 md:left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-primary ring-4 ring-background shadow-md">
                    <div className="h-2 w-2 rounded-full bg-background" />
                  </div>
                  
                  {/* Tarjeta de experiencia */}
                  <div className={cn(
                    "w-[calc(100%-2.5rem)] md:w-[45%]", // 2.5rem es para dar espacio al punto en mobile
                    "pl-4 md:pl-0" // Padding en mobile para no chocar con la línea
                  )}>
                    <div className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1">
                      {/* Glow effect on hover */}
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                      
                      <div className="relative">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.role}
                          </h3>
                          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground whitespace-nowrap w-fit">
                            {item.period}
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-medium text-muted-foreground mb-4">
                          {item.company}
                        </h4>
                        
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Tags de tecnologías */}
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20 transition-colors hover:bg-primary hover:text-primary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
