import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LiquidEther from "./LiquidEther";

export default function Hero() {
  const { t } = useTranslation();
  
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* LiquidEther como fondo */}
      <div className="absolute inset-0 w-full h-full">
        <LiquidEther
          colors={['#0ea5e9', '#14b8a6', '#ec4899']}
          mouseForce={15}
          cursorSize={120}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={1.8}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Overlay oscuro para mejor legibilidad del texto */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-[1px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-12 z-10 relative">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-secondary shadow-lg shadow-secondary/30 flex-shrink-0 relative"
        >
          {/* Anillo animado */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/50"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <img
            src="/perfil.jpg"
            alt="Roberto Carlos"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="text-center md:text-left w-full max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-2"
          >
            Roberto Carlos Apaza Cornejo
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-secondary mb-3 sm:mb-4"
          >
            <p className="font-semibold">Full Stack Developer</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-100 mb-2 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Ingeniero de Software con <span className="text-secondary font-semibold">+2.5 años</span> de experiencia creando sistemas empresariales y SaaS escalables.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm sm:text-base text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Especializado en <span className="text-primary font-medium">Node.js</span>, con <span className="text-primary font-medium">Next.js</span> en el frontend y <span className="text-primary font-medium">NestJS</span> en el backend.
            Mi enfoque: construir soluciones que escalan con tu negocio.
          </motion.p>

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
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center md:justify-start gap-4 sm:gap-6 mb-4 sm:mb-6"
          >
            <motion.a
              href="https://github.com/AcFallen"
              className="text-secondary hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-secondary/10"
              target="_blank"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/roberto-carlos-apaza-cornejo-a78543271/"
              className="text-secondary hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-secondary/10"
              target="_blank"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="mailto:r.apaza.cornejo@gmail.com"
              className="text-secondary hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-secondary/10"
              aria-label="Email"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </motion.a>
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            href="/resume.pdf"
            download
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-secondary to-primary text-white font-medium rounded-full shadow-lg shadow-secondary/50 hover:shadow-primary/50 hover:-translate-y-1 transition-all text-sm sm:text-base relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">{t("download_cv", "Descargar CV")}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </div>
      </div>

      {/* Scroll indicator - Animación simplificada */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-secondary text-sm mb-2 font-medium text-center">
          {t("scroll_down", "Explora mi trabajo")}
        </span>
        <motion.div
          className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center p-1 backdrop-blur-sm bg-gray-900/20"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-secondary rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
