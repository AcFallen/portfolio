import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  en: {
    translation: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      software_developer: "Software Developer",
      backend_development_assistant: "Backend Development Assistant",
      junior_fronted_developer: "Junior Fronted Developer",
      junior_full_stack_developer: "Junior Full Stack Developer",
      freelance_web_developer: "Freelance Web Developer",
      store_suplements: "Vitamin supplement store",
      august: "August",
      april: "April",
      present: "present",
      constant: "constant",
      construction_company: "Construction Company",
      independent_contractor: "Independent Contractor",
      description_1:
        "I am in charge of managing the migration of ERP, CRM and e-commerce frontends to modern technologies, improving performance, scalability and user experience.",
      description_2:
        "Responsible for maintaining the company’s ERP system, ensuring its optimal performance and stability. Implemented new features and improvements based on suggestions from key departments, including Sales and Administration, to streamline operations and enhance productivity.",
      description_3:
        "Collaborated on various web development projects using React and Node.js.",
      description_4:
        "I am responsible for the company's backend, ensuring its optimal performance and stability, implementing new features and improvements based on suggestions from key departments, including Sales and Administration, to streamline operations and enhance productivity.",
      proyects: "Projects",
      skills_section: "Skills & Technologies",
      get_in_touch: "Get in touch",
      email: "Email",
      location: "Location",
      your_name: "Your Name",
      your_email: "Your Email",
      your_message: "Your Message",
      send_message: "Send Message",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
      software_developer: "Desarrollador de Software",
      backend_development_assistant: "Auxiliar de Desarrollo Backend",
      junior_fronted_developer: "Desarrollador Frontend Junior",
      junior_full_stack_developer: "Desarrollador Full Stack Junior",
      freelance_web_developer: "Desarrollador Web Freelance",
      store_suplements: "Tienda de suplementos vitaminicos",
      august: "Agosto",
      april: "Abril",
      present: "presente",
      constant: "constante",
      construction_company: "Empresa de Construcción",
      independent_contractor: "Contratista Independiente",
      description_1:
        "Me encargo gestionar la migración de frontends de ERP, CRM y comercio electrónico a tecnologías modernas, mejorando el rendimiento, la escalabilidad y la experiencia del usuario.",
      description_2:
        "Responsable de mantener el sistema ERP de la empresa, asegurando su óptimo rendimiento y estabilidad. Implementé nuevas funciones y mejoras basadas en sugerencias de departamentos clave, incluidos Ventas y Administración, para optimizar las operaciones y mejorar la productividad.",
      description_3:
        "Colaboró en varios proyectos de desarrollo web usando React y Node.js.",
      description_4:
        "Me encargo de la parte de backend de la empresa, asegurando su óptimo rendimiento y estabilidad, implementando nuevas funciones y mejoras basadas en sugerencias de departamentos clave, incluidos Ventas y Administración, para optimizar las operaciones y mejorar la productividad.",
      proyects: "Proyectos",
      skills_section: "Habilidades & Tecnologías",
      get_in_touch: "Contáctame",
      email: "Correo Electrónico",
      location: "Ubicación",
      your_name: "Tu Nombre",
      your_email: "Tu Correo Electrónico",
      your_message: "Tu Mensaje",
      send_message: "Enviar Mensaje",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma
  .use(initReactI18next) // Integra con React
  .init({
    resources,
    fallbackLng: "en", // Idioma por defecto
    detection: {
      order: [
        "navigator",
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // Donde guardar el idioma detectado
    },
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;
