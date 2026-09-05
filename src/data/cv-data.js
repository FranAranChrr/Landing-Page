/**
 * Datos centralizados del CV de Francisca Arancibia Chaparro.
 * Todas las secciones de la landing page consumen este objeto.
 */

const cvData = {
  /* ───────────── INFORMACIÓN PERSONAL ───────────── */
  personal: {
    name: "Francisca Arancibia Chaparro",
    title: "Analista Programadora - Full Stack Developer",
  
    description:
      "Analista Programadora egresada de Duoc UC orientada al desarrollo web. Cuento con sólida experiencia práctica en la creación de aplicaciones web utilizando Java y TypeScript, con especial interés en el área de Machine Learning.",
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
    },
    {
      title: "Clasificador de Dígitos MNIST — CRISP-DM",
      description:
        "Análisis con metodología CRISP-DM para clasificar dígitos " +
        "utilizando la base de datos MNIST. Se implementó el modelo de Gradient Boosting " +
        "con normalización, evaluación de sobreajuste, matriz de confusión " +
        "y despliegue en tiempo real mediante captura de cámara web en Google Colab.",
      technologies: ["Python", "Scikit-Learn", "OpenCV", "NumPy", "Matplotlib"],
      image: "/mnist-crisp-dm.png",
      github: "",
      live: "https://colab.research.google.com/drive/1MDqShFAeuVpfUkYiVq_BxJt2Po8Zi8FJ?usp=sharing",
    }
  ],

  /* ───────────── EDUCACIÓN ───────────── */
  education: [
    {
      institution: "Duoc UC",
      degree: "Analista Programador",
      period: "2024 – 2026",
      description:
        "Formación integral en desarrollo de software, bases de datos, redes " +
        "y gestión de proyectos TI. Participación activa en proyectos prácticos " +
        "y colaboración con el CITT en iniciativas de innovación tecnológica.",
    },
    {
      institution: "Pontificia Universidad Católica de Chile",
      degree: "Diplomado en Inteligencia Artificial",
      period: "2026 – En curso",
      description:
        "Diplomado enfocado en fundamentos y aplicaciones de la Inteligencia Artificial, " +
        "abarcando aprendizaje automático, redes neuronales y análisis de datos " +
        "para la resolución de problemas reales.",
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
