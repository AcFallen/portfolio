import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const blobs = [
    { top: "-20%", left: "-20%", size: 300 },
    { top: "10%", left: "60%", size: 200 },
    { top: "60%", left: "30%", size: 250 },
  ];
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary">
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-primary/30"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              filter: "blur(100px)",
            }}
            animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
            transition={{ duration: 20 + index * 5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-12 z-10">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20 flex-shrink-0"
        >
          <img
            src="/perfil.jpg"
            alt="Roberto Carlos"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center md:text-left w-full max-w-xl">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2"
          >
            Roberto Carlos Apaza Cornejo
          </motion.h1>

          <div className="text-lg sm:text-xl md:text-2xl text-primary mb-3 sm:mb-4 h-8 sm:h-10">
            <p>{t("software_developer")}</p>
          </div>

          {/* <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0"
          >
            {t(
              "hero_description",
              "Desarrollando soluciones creativas con pasión por la tecnología y la innovación"
            )}
          </motion.p> */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-4 sm:mb-6"
          >
            <a
              href="https://github.com/AcFallen"
              className="text-secondary hover:text-primary transition-colors"
              target="_blank"
              aria-label="GitHub"
            >
              <Github size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/roberto-carlos-apaza-cornejo-a78543271/"
              className="text-secondary hover:text-primary transition-colors"
              target="_blank"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
            <a
              href="mailto:r.apaza.cornejo@gmail.com"
              className="text-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="/resume.pdf"
            download
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-medium rounded-full shadow-lg shadow-primary/50 hover:bg-secondary hover:shadow-secondary/50 hover:-translate-y-0.5 transition-all text-sm sm:text-base"
          >
            {t("download_cv", "Descargar CV")}
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator - Animación simplificada */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-primary text-sm mb-2">
          {t("scroll_down", "Desliza hacia abajo")}
        </span>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
