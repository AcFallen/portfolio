import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Icon icon="material-symbols:code" className="text-teal-400" fontSize="24px" />,
      skills: [
        { name: "React", icon: "mdi:react" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "Tailwind CSS", icon: "mdi:tailwind" },
        { name: "Next.js", icon: "ri:nextjs-fill" },
      ]
    },
    {
      title: "Backend",
      icon: <Icon icon="iconoir:db" className="text-teal-400" fontSize="24px" />,
      skills: [
        { name: "Node.js", icon: "mdi:nodejs" },
        { name: "Python", icon: "mdi:language-python" },
        { name: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
        { name: "Express", icon: "simple-icons:express" }
      ]
    },
    {
      title: "Tools & Design",
      icon: <Icon icon="mdi:tools" className="text-teal-400" fontSize="24px" />,
      skills: [
        { name: "Git", icon: "mdi:git" },
        { name: "Docker", icon: "mdi:docker" },
        { name: "Figma", icon: "solar:figma-bold" },
        { name: "Gitlab", icon: "ri:gitlab-fill" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center gap-2 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gray-700 text-teal-400 p-2 rounded-lg hover:bg-teal-400 hover:text-gray-900 transition-colors"
                  >
                    <Icon icon={skill.icon} className="w-6 h-6" />
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
