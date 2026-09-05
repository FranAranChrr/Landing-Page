/**
 * Datos centralizados del CV de Francisca Arancibia Chaparro.
 * Todas las secciones de la landing page consumen este objeto.
 */

const cvData = {
  /* ───────────── INFORMACIÓN PERSONAL ───────────── */
  personal: {
    name: "Francisca Arancibia Chaparro",
    title: "Desarrolladora Full-Stack",
  
    description:
      "Comprometida con crear soluciones web modernas, eficientes y listas para escalar. " ,
    photo: "/perfil.png",
    email: "fran.arancibiach@gmail.com",
    linkedin: "https://linkedin.com/in/francisca-arancibia",
    github: "https://github.com/FranAranChrr",
    location: "Valparaíso, Chile",
  },

  /* ───────────── EXPERIENCIA LABORAL ───────────── */
  experience: [
    {
      company: "CITT - Duoc UC",
      role: "Desarrolladora Full-Stack – Proyecto de Tesis",
      period: "Marzo 2025 – Junio 2025",
      description:
        "Se desarrolló el sistema de gestión de reservas e inventario para el Centro de Innovación y " +
        "Transferencia Tecnológica (CITT). Implementación de interfaces de usuario " +
        "con React y Tailwind CSS, diseño de API REST con Node.js, y gestión de " +
        "bases de datos con PostgreSQL. Despliegue del entorno de desarrollo y " +
        "producción utilizando Docker.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Docker",
        "Git",
      ],
    }
  ],

  /* ───────────── HABILIDADES ───────────── */
  skills: {
    technical: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Java", level: 70 },
      { name: "PostgreSQL", level: 70 },
      { name: "Docker", level: 60 },
    ],
    tools: [
      "VS Code",
      "GitHub",
      "Jira",
      "Swagger",

      "IntelliJ",
      "Vite",
    ],
    soft: [
      "Trabajo en equipo",
      "Resolución de problemas",
      "Adaptabilidad",
      "Gestión del tiempo",
      "Pensamiento crítico",
    ],
  },

  /* ───────────── PROYECTOS ───────────── */
  projects: [
    {
      title: "Sistema de Reservas CITT",
      description:
        "Desarrollamos en equipo el sistema de reservas e inventario para el CITT de Duoc UC. " +
        "Implementamos una arquitectura cliente-servidor, donde aporté en la construcción de una " +
        "API REST en Node.js encargada de la lógica. Manejamos los datos de forma segura " +
        "con PostgreSQL y levantamos el entorno completo usando contenedores en Docker para " +
        "asegurar que todo fuera fácil de escalar y mantener.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Docker",
      ],
      image: "/citt-reservas.png",
      github: "",
      live: "https://sistema-de-reservas-citt.vercel.app/",
    },
    {
      title: "Portfolio Personal",
      description:
        "Landing page moderna desarrollada con React y Tailwind CSS para " +
        "presentar mi perfil profesional, proyectos y habilidades. Incluye " +
        "modo oscuro, animaciones suaves y diseño completamente responsivo.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      image: "/perfil.png",
      github: "https://github.com/FranAranChrr/Landing-Page.git",
      live: "",
    }
  ],

  /* ───────────── EDUCACIÓN ───────────── */
  education: [
    {
      institution: "Duoc UC",
      degree: "Analista Programador",
      period: "2023 – 2026",
      description:
        "Formación integral en desarrollo de software, bases de datos, redes " +
        "y gestión de proyectos TI. Participación activa en proyectos prácticos " +
        "y colaboración con el CITT en iniciativas de innovación tecnológica.",
    },
    {
      institution: "Duoc UC",
      degree: "Bootcamp: IA Aplicada a la Gestión Logística",
      period: "2026",
      description:
        "Formación complementaria de 18 horas certificadas enfocada en la " +
        "aplicación práctica de la Inteligencia Artificial para la resolución " +
        "de problemas en la gestión logística.",
    }
  ],
};

export default cvData;
