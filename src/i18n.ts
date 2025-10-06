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
      backend_developer: "Backend Developer",
      junior_fronted_developer: "Junior Frontend Developer",
      junior_full_stack_developer: "Junior Full Stack Developer",
      freelance_web_developer: "Freelance Web Developer",
      store_suplements: "Vitamin supplement store",
      alferza_company: "Alferza",
      august: "August",
      april: "April",
      july: "July",
      present: "present",
      constant: "constant",
      construction_company: "Construction Company",
      independent_contractor: "Independent Contractor",
      description_1:
        "I am in charge of managing the migration of ERP, CRM and e-commerce frontends to modern technologies, improving performance, scalability and user experience.",
      description_2:
        "Responsible for maintaining the company's ERP system, ensuring its optimal performance and stability. Implemented new features and improvements based on suggestions from key departments, including Sales and Administration, to streamline operations and enhance productivity.",
      description_3:
        "Collaborated on various web development projects using React and Node.js.",
      description_4:
        "Develop scalable and robust endpoints based on Product Owner requirements. Manage continuous deployment, database backups, and backend development for both web and mobile applications.",
      proyects: "Projects",
      // Projects
      alimentor_title: "Alimentor - Diet Planning Platform",
      alimentor_description: "A SaaS web application for nutrition professionals to create personalized meal plans, analyze recipes, and manage patient nutrition with international food databases.",
      view_project: "View Project",
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
      backend_developer: "Desarrollador Backend",
      junior_fronted_developer: "Desarrollador Frontend Junior",
      junior_full_stack_developer: "Desarrollador Full Stack Junior",
      freelance_web_developer: "Desarrollador Web Freelance",
      store_suplements: "Tienda de suplementos vitamínicos",
      alferza_company: "Alferza",
      august: "Agosto",
      april: "Abril",
      july: "Julio",
      present: "presente",
      constant: "constante",
      construction_company: "Empresa de Construcción",
      independent_contractor: "Contratista Independiente",
      description_1:
        "Me encargo de gestionar la migración de frontends de ERP, CRM y comercio electrónico a tecnologías modernas, mejorando el rendimiento, la escalabilidad y la experiencia del usuario.",
      description_2:
        "Responsable de mantener el sistema ERP de la empresa, asegurando su óptimo rendimiento y estabilidad. Implementé nuevas funciones y mejoras basadas en sugerencias de departamentos clave, incluidos Ventas y Administración, para optimizar las operaciones y mejorar la productividad.",
      description_3:
        "Colaboró en varios proyectos de desarrollo web usando React y Node.js.",
      description_4:
        "Desarrollo de endpoints escalables y robustos basados en requerimientos del Product Owner. Gestión de despliegue continuo, backups de base de datos y desarrollo backend para aplicaciones web y móviles.",
      proyects: "Proyectos",
      // Projects
      alimentor_title: "Alimentor - Plataforma de Planificación de Dietas",
      alimentor_description: "Aplicación web SaaS para profesionales de la nutrición que permite crear planes alimenticios personalizados, analizar recetas y gestionar la nutrición de pacientes con bases de datos internacionales de alimentos.",
      view_project: "Ver Proyecto",
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
