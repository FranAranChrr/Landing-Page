import { useState } from "react";
import cvData from "@/data/cv-data";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { email, location, linkedin, github } = cvData.personal;
  
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const triggerModal = (msg) => {
    setModalMsg(msg);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Ingresa tu nombre";
    if (!formData.email.trim()) newErrors.email = "Ingresa tu correo";
    if (!formData.message.trim()) newErrors.message = "Ingresa un mensaje para enviar";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xzdlvopp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        triggerModal("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
      }
    } catch (error) {
      triggerModal("Hubo un error al enviar el mensaje. Verifica tu conexión a internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <>
      <section id="contacto" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
        
        {/* Título de sección */}
        <div className="mb-16 md:mb-24 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>
          <div className="mt-2 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-6 text-lg text-muted-foreground max-w-none">
            ¿Tienes una propuesta de trabajo o algún proyecto en mente? ¡Me encantaría escucharte!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Información de Contacto */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8">Información</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                    <a href={`mailto:${email}`} className="text-base font-medium text-foreground transition-colors hover:text-primary">
                      {email}
                    </a>
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ubicación</p>
                    <p className="text-base font-medium text-foreground">
                      {location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-4">Sígueme en redes sociales</p>
                <div className="flex gap-4">
                  <a 
                    href={github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-8">Envíame un mensaje</h3>
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center h-64 text-center animate-in fade-in zoom-in duration-500">
                <div className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4 dark:bg-green-900/30 dark:text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">¡Mensaje Enviado!</h4>
                <p className="text-muted-foreground">Gracias por contactarme. Te responderé lo antes posible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-all",
                      errors.name ? "border-primary focus:ring-primary" : "border-input focus:ring-primary"
                    )}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && <p className="mt-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-top-1">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-all",
                      errors.email ? "border-primary focus:ring-primary" : "border-input focus:ring-primary"
                    )}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="mt-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-top-1">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={cn(
                      "w-full resize-y rounded-lg border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-transparent transition-all",
                      errors.message ? "border-primary focus:ring-primary" : "border-input focus:ring-primary"
                    )}
                    placeholder="¿En qué te puedo ayudar?"
                  />
                  {errors.message && <p className="mt-2 text-sm font-medium text-primary animate-in fade-in slide-in-from-top-1">{errors.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-bold text-primary-foreground transition-all duration-300",
                    "hover:shadow-lg hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      Enviando...
                    </span>
                  ) : (
                    "Enviar Mensaje"
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>

      {/* Modal de Warning */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-card border-2 border-primary shadow-2xl shadow-primary/20 rounded-2xl p-6 md:p-8 max-w-sm w-full flex flex-col items-center text-center animate-in zoom-in-95 duration-300">
            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <p className="text-muted-foreground font-medium">{modalMsg}</p>
          </div>
        </div>
      )}
    </>
  );
}
