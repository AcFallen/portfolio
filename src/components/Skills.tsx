import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { name: "React", icon: "mdi:react", color: "#61DAFB" },
    { name: "TypeScript", icon: "mdi:language-typescript", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "mdi:tailwind", color: "#06B6D4" },
    { name: "Next.js", icon: "ri:nextjs-fill", color: "#FFFFFF" },
    { name: "Node.js", icon: "mdi:nodejs", color: "#339933" },
    { name: "NestJS", icon: "simple-icons:nestjs", color: "#E0234E" },
    { name: "Python", icon: "mdi:language-python", color: "#3776AB" },
    { name: "PostgreSQL", icon: "akar-icons:postgresql-fill", color: "#4169E1" },
    { name: "Docker", icon: "mdi:docker", color: "#2496ED" },
    { name: "Git", icon: "mdi:git", color: "#F05032" },
    { name: "Figma", icon: "solar:figma-bold", color: "#F24E1E" },
    { name: "GitLab", icon: "ri:gitlab-fill", color: "#FC6D26" },
  ];

  // Duplicar el array para crear un loop infinito suave
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-16 text-center"
        >
          {t('skills_section')}
        </motion.h2>

        {/* Carrusel infinito */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Gradiente izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />

          {/* Gradiente derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

          <div className="flex overflow-x-hidden py-8">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -(160 * skills.length)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex-shrink-0 w-32 h-32 bg-gray-800 rounded-2xl flex flex-col items-center justify-center gap-3 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-shadow group"
                >
                  <Icon
                    icon={skill.icon}
                    style={{ color: skill.color }}
                    className="text-6xl group-hover:scale-110 transition-transform"
                  />
                  <span className="text-white text-sm font-medium text-center px-2">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Grid estático adicional con categorías */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-2xl border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="material-symbols:code" className="text-teal-400 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Frontend</h3>
            </div>
            <p className="text-gray-400 text-sm">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-2xl border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="iconoir:db" className="text-teal-400 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Backend</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Node.js, NestJS, Python, PostgreSQL
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-6 rounded-2xl border border-gray-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Icon icon="mdi:tools" className="text-teal-400 text-3xl" />
              <h3 className="text-xl font-semibold text-white">Tools & DevOps</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Docker, Git, GitLab CI/CD, Figma
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
