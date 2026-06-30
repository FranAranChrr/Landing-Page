# Portafolio Personal - Francisca Arancibia Chaparro

Un portafolio web moderno, interactivo y responsivo.

## Características Principales

- **Diseño Moderno y Limpio:** Interfaz gráfica atractiva con paleta de colores personalizada.
- **Responsive Design:** Adaptable a todo tipo de pantallas (móviles, tablets y escritorio).
- **Animaciones Suaves:** Transiciones fluidas, animaciones de carga y un botón interactivo con confeti al descargar el currículum.
- **Formulario de Contacto Funcional:** Incluye validaciones dinámicas de campos vacíos en tiempo real e integración con Formspree para envío real de correos. Modal flotante y personalizado para el manejo de errores.
- **Componentización:** Arquitectura limpia usando componentes de React para cada sección (Hero, Sobre Mí, Experiencia, Habilidades, Proyectos, Educación, Contacto).

## Stack Tecnológico

Este proyecto fue construido utilizando las siguientes tecnologías modernas:

- **[React 18](https://react.dev/)**: Biblioteca de JavaScript para construir interfaces de usuario.
- **[Vite](https://vitejs.dev/)**: Servidor de desarrollo local.
- **[Tailwind CSS v3](https://tailwindcss.com/)**: Framework de CSS.
- **[canvas-confetti](https://www.npmjs.com/package/canvas-confetti)**: Librería para el efecto visual de confetti.

## Estructura del Proyecto

El código fuente está organizado de la siguiente manera:

```text
src/
├── components/       # Componentes reutilizables y secciones 
├── data/             # Archivos de datos estáticos 
├── lib/              # Funciones de utilidad 
├── pages/            # Páginas principales 
├── App.jsx           # Componente raíz
└── index.css         # Estilos globales y configuración de variables
```

## Instalación y Uso Local

Para correr este proyecto en tu entorno local, sigue estos pasos:

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/FranAranChrr/Landing-Page.git
   ```

2. **Ingresa al directorio del proyecto**
   ```bash
   cd Landing-Page
   ```

3. **Instala las dependencias**
   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre tu navegador** en la dirección indicada en la terminal (usualmente `http://localhost:5173`).
