import { Code2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('alimentor_title'),
      description: t('alimentor_description'),
      image: "/alimentor_landing.png",
      tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "Tailwind CSS", "CI/CD"],
      link: "https://alimentor.me",
      imagePosition: "left"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12"
        >
          <Code2 className="text-teal-400" size={24} />
          <h2 className="text-3xl font-bold text-white">{t('proyects')}</h2>
        </motion.div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col lg:flex-row gap-8 items-stretch bg-gray-900 rounded-3xl shadow-xl border border-gray-700/50"
            >
              {/* Image Section */}
              <div className={`w-full lg:w-1/2 ${project.imagePosition === 'right' ? 'lg:order-2' : ''}`}>
                <div className="h-full p-6 lg:p-8 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-xl shadow-lg border border-gray-700/30"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center ${project.imagePosition === 'right' ? 'lg:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-teal-400/10 text-teal-400 rounded-full text-sm font-medium border border-teal-400/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400/10 text-teal-400 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all shadow-lg border border-teal-400/30"
                  >
                    <ExternalLink size={20} />
                    <span>{t('view_project')}</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}