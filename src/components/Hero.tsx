import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  
  // Elementos espaciales animados
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    animationDuration: Math.random() * 3 + 2,
  }));

  const planets = [
    { x: 85, y: 20, size: 60, color: "bg-secondary/20" },
    { x: 15, y: 70, size: 40, color: "bg-primary/20" },
    { x: 70, y: 80, size: 30, color: "bg-teal-300/20" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-900"
    >
      {/* Fondo espacial animado */}
      <div className="absolute inset-0">
        {/* Gradiente de fondo */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900" />
        
        {/* Estrellas */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full opacity-70"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Planetas */}
        {planets.map((planet, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${planet.color} backdrop-blur-sm`}
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
              width: `${planet.size}px`,
              height: `${planet.size}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + index * 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4 + index * 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
        
        {/* Partículas flotantes */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)",
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-8 lg:gap-12 z-10">
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

        <div className="text-center md:text-left w-full max-w-xl">
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
            className="text-lg sm:text-xl md:text-2xl text-secondary mb-3 sm:mb-4 h-8 sm:h-10"
          >
            <p className="font-semibold">Backend Developer</p>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 max-w-md mx-auto md:mx-0"
          >
            Especializado en arquitecturas backend escalables y APIs robustas
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-secondary text-sm mb-2 font-medium">
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
