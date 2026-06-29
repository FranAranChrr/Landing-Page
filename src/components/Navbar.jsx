import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

/* ───────── Secciones de navegación ───────── */
const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Educación", href: "#educacion" },
  { label: "Contacto", href: "#contacto" },
];

/* ═══════════════════════════════════════════════
   Íconos SVG inline (sol / luna / hamburguesa / X)
   ═══════════════════════════════════════════════ */
const SunIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-5", className)}
  >
    <circle cx={12} cy={12} r={5} />
    <line x1={12} y1={1} x2={12} y2={3} />
    <line x1={12} y1={21} x2={12} y2={23} />
    <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
    <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
    <line x1={1} y1={12} x2={3} y2={12} />
    <line x1={21} y1={12} x2={23} y2={12} />
    <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
    <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-5", className)}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
  >
    <line x1={3} y1={6} x2={21} y2={6} />
    <line x1={3} y1={12} x2={21} y2={12} />
    <line x1={3} y1={18} x2={21} y2={18} />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
  >
    <line x1={18} y1={6} x2={6} y2={18} />
    <line x1={6} y1={6} x2={18} y2={18} />
  </svg>
);

/* ═══════════════════════════════════════════════
   Componente Navbar
   ═══════════════════════════════════════════════ */
export default function Navbar() {
  /* ── Estado ── */
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  /* ── Aplicar clase dark al <html> ── */
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* ── Sombra al hacer scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Detección de sección activa con IntersectionObserver ── */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ── Cerrar menú móvil al redimensionar ── */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Bloquear scroll del body cuando el menú mobile está abierto ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* ── Handlers ── */
  const toggleDark = useCallback(() => setDarkMode((prev) => !prev), []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navbarHeight = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });
    }
  }, []);

  /* ══════════════ RENDER ══════════════ */
  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          "backdrop-blur-md bg-background/80 border-b",
          scrolled
            ? "border-border shadow-lg shadow-radical-950/5"
            : "border-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* ── Espaciador para mantener centrado ── */}
          <div className="w-8"></div>

          {/* ── Links desktop ── */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                    activeSection === href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                  {/* Indicador activo */}
                  <span
                    className={cn(
                      "absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 origin-left",
                      activeSection === href ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Acciones (toggle dark + hamburguesa) ── */}
          <div className="flex items-center gap-2">
            {/* Botón dark / light */}
            <button
              type="button"
              onClick={toggleDark}
              aria-label={
                darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
              }
              className={cn(
                "relative flex size-9 items-center justify-center rounded-lg",
                "border border-border bg-card text-foreground",
                "transition-all duration-300 hover:bg-secondary hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              {/* Contenedor con rotación */}
              <span className="relative flex items-center justify-center">
                <SunIcon
                  className={cn(
                    "absolute transition-all duration-500",
                    darkMode
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  )}
                />
                <MoonIcon
                  className={cn(
                    "transition-all duration-500",
                    darkMode
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
              </span>
            </button>

            {/* Botón hamburguesa (sólo mobile) */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              className={cn(
                "flex size-9 items-center justify-center rounded-lg md:hidden",
                "border border-border bg-card text-foreground",
                "transition-all duration-300 hover:bg-secondary hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <span className="relative flex items-center justify-center">
                <MenuIcon
                  className={cn(
                    "absolute transition-all duration-300",
                    mobileOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <CloseIcon
                  className={cn(
                    "transition-all duration-300",
                    mobileOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Overlay mobile ── */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Menú mobile slide-in ── */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-72 border-l border-border",
          "bg-background/95 backdrop-blur-xl",
          "flex flex-col gap-2 p-6 pt-20 md:hidden",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Botón cerrar dentro del panel */}
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          aria-label="Cerrar menú"
          className="absolute right-4 top-5 flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary hover:text-primary"
        >
          <CloseIcon />
        </button>

        <nav className="flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={cn(
                "rounded-lg px-4 py-3 text-base font-medium transition-all duration-300",
                mobileOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0",
                activeSection === href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Separador + info */}
        <div className="mt-auto border-t border-border pt-4">
          <p className="text-xs text-muted-foreground text-center">
            Francisca Arancibia Chaparro
          </p>
        </div>
      </aside>
    </>
  );
}
