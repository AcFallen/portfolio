import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { useEffect } from 'react';
import i18n from './i18n';


function App() {

  useEffect(() => {
    const htmlLang = document.documentElement.lang || 'en';
    const validLangs = ['en', 'es']; // Idiomas válidos
    const langToSet = validLangs.includes(htmlLang) ? htmlLang : 'en';
  
    i18n.changeLanguage(langToSet);
  }, []);

  
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>© 2024 Roberto Carlos Apaza Cornejo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;