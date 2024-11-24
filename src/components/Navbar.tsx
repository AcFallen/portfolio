import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambia el idioma dinámicamente
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng; // Actualiza el atributo `lang` de la etiqueta `<html>`
  };

  const menuItems = [
    t('home'),
    t('experience'),
    t('projects'),
    t('skills'),
    t('contact'),
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-teal-400"
          >
            RC
          </motion.span>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-teal-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
            {/* Language Selector */}
            <LanguageSelector currentLanguage={i18n.language} changeLanguage={changeLanguage} />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-teal-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="block px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                {/* Mobile Language Selector */}
                <LanguageSelector currentLanguage={i18n.language} changeLanguage={changeLanguage} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}


const LanguageSelector = ({
  currentLanguage,
  changeLanguage,
}: {
  currentLanguage: string;
  changeLanguage: (lng: string) => void;
}) => {
  const languages = [
    { code: 'en', name: 'English', flag: 'openmoji:flag-united-states' },
    { code: 'es', name: 'Español', flag: 'openmoji:flag-spain' },
  ];

  return (
    <div className="flex items-center space-x-4">
      {languages.map(({ code, name, flag }) => (
        <motion.button
          key={code}
          onClick={() => changeLanguage(code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg ${
            currentLanguage === code ? 'bg-teal-400 text-white' : 'text-gray-300 hover:text-teal-400'
          }`}
        >
          <Icon icon={flag} className="w-5 h-5 mr-2" />
          {name}
        </motion.button>
      ))}
    </div>
  );
};
