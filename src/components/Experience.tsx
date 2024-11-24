import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Experience() {
  const experiences = [
    {
      title: "Junior Frontend Developer",
      company: "Vitamin supplement store",
      period: "august 2024 - present",
      description: "Managing the migration of ERP, CRM, and eCommerce frontends to modern technologies, improving performance, scalability, and user experience.",
      icon: [
        { component: <Icon icon="devicon:nextjs" className="w-6 h-6" />, name: "Next.js" },
        { component: <Icon icon="devicon:tailwindcss" className="w-6 h-6" />, name: "TailwindCSS" },
        { component: <Icon icon="logos:react-query-icon" className="w-6 h-6" />, name: "React Query" },
        { component: <Icon icon="devicon:framermotion" className="w-6 h-6" />, name: "Framer Motion" }
      ]
    },
    {
      title: "Junior Full Stack Developer",
      company: "Vitamin supplement store",
      period: "april 2024 - july 2024",
      description: "Responsible for maintaining the company’s ERP system, ensuring its optimal performance and stability. Implemented new features and improvements based on suggestions from key departments, including Sales and Administration, to streamline operations and enhance productivity.",
      icon: [
        { component: <Icon icon="devicon:php" className="w-6 h-6" />, name: "PHP" },
        { component: <Icon icon="logos:mysql" className="w-6 h-6" />, name: "MySQL" },
        { component: <Icon icon="devicon:bootstrap" className="w-6 h-6" />, name: "Bootstrap" },
        { component: <Icon icon="devicon:jquery-wordmark" className="w-6 h-6" />, name: "jQuery" }
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Independent Contractor",
      period: "constant",
      description: "Collaborated on various web development projects using React and Node.js.",
      icon: [
        { component: <Icon icon="devicon:nextjs" className="w-6 h-6" />, name: "Next.js" },
        { component: <Icon icon="devicon:nestjs" className="w-6 h-6" />, name: "NestJS" },
        { component: <Icon icon="devicon:docker-wordmark" className="w-6 h-6" />, name: "Docker" }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-12"
        >
          <Briefcase className="text-teal-400" size={24} />
          <h2 className="text-3xl font-bold text-white">Experience</h2>
        </motion.div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative pl-8 border-l-2 border-teal-400"
            >
              <div className="absolute w-4 h-4 bg-teal-400 rounded-full -left-[9px] top-0"></div>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-teal-400 mb-2">{exp.company} | {exp.period}</p>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.icon.map((icon, iconIndex) => (
                  <div 
                    key={iconIndex}
                    className="relative group"
                  >
                    {icon.component}
                    {/* Tooltip */}
                    <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md transition">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
