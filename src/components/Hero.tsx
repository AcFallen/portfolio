import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent mb-6"
        >
          Roberto Carlos Apaza Cornejo
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Junior Fronted Developer | Problem Solver | Tech Enthusiast
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/AcFallen" 
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/roberto-carlos-apaza-cornejo-a78543271/" 
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:r.apaza.cornejo@gmail.com"
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}