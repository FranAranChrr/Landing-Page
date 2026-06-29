/**
 * Datos centralizados del CV de Francisca Arancibia Chaparro.
 * Todas las secciones de la landing page consumen este objeto.
 */

const cvData = {
  /* ───────────── INFORMACIÓN PERSONAL ───────────── */
  personal: {
    name: "Francisca Arancibia Chaparro",
    title: "Desarrolladora Full-Stack",
    subtitle: "Apasionada por crear soluciones web modernas y eficientes",
    description:
      "Desarrolladora de software con experiencia en tecnologías web modernas. " +
      "Me especializo en construir aplicaciones escalables con React, Node.js y " +
      "bases de datos relacionales. Disfruto resolver problemas complejos y " +
      "trabajar en equipo para entregar productos de alta calidad.",
    photo: "",
    email: "francisca.arancibia@email.com",
    phone: "+56 9 75588869",
    linkedin: "https://linkedin.com/in/francisca-arancibia",
    github: "https://github.com/francisca-arancibia",
    location: "Valparaiso, Chile",
  },

  /* ───────────── EXPERIENCIA LABORAL ───────────── */
  experience: [
    {
      company: "CITT - Duoc UC (Proyecto de Tesis)",
      role: "Desarrolladora Full-Stack",
      period: "Marzo 2025 – Junio 2025",
      description:
        "Desarrollo del sistema de reservas para el Centro de Innovación y " +
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
      { name: "Node.js", level: 75 },
      { name: "Python", level: 65 },
      { name: "PostgreSQL", level: 70 },
      { name: "Docker", level: 60 },
      { name: "Git", level: 80 },
    ],
    tools: [
      "VS Code",
      "Figma",
      "Postman",
      "Docker Desktop",
      "pgAdmin",
      "GitHub",
      "Jira",
      "Notion",
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
        "Aplicación web completa para gestionar las reservas de espacios y " +
        "equipos del Centro de Innovación y Transferencia Tecnológica de Duoc UC. " +
        "Incluye autenticación de usuarios, calendario interactivo, notificaciones " +
        "por correo y panel de administración.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Docker",
      ],
      image: "",
      github: "https://github.com/francisca-arancibia/citt-reservas",
      live: "",
    },
    {
      title: "Portfolio Personal",
      description:
        "Landing page moderna desarrollada con React y Tailwind CSS para " +
        "presentar mi perfil profesional, proyectos y habilidades. Incluye " +
        "modo oscuro, animaciones suaves y diseño completamente responsivo.",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      image: "",
      github: "https://github.com/francisca-arancibia/portfolio",
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
    }
  ],
};

export default cvData;
