import cvData from "@/data/cv-data";

export default function Education() {
  const { education } = cvData;

  return (
    <section id="educacion" className="py-24 sm:py-32 bg-secondary/30 dark:bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Formación <span className="text-primary">Académica</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="relative rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40 group overflow-hidden"
            >
              {/* Borde decorativo lateral animado */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-accent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Ícono de institución */}
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground whitespace-nowrap w-fit">
                    {item.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-muted-foreground">
                  {item.institution}
                </h4>
                
                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
