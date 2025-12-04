
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';
import Loader from './components/Loader';
import GeminiSearch from './components/GeminiSearch';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    // Simulate loading delay for splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Keyboard shortcut for Search (Cmd+K / Ctrl+K)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary selection:text-white bg-white dark:bg-slate-900">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <motion.div 
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar 
              isDark={isDark} 
              toggleTheme={toggleTheme} 
              onOpenSearch={() => setIsSearchOpen(true)} 
            />
            <main>
              <Hero />
              {/* Skills & Experience Group */}
              <div id="skills-experience">
                  <Skills />
                  <Experience />
              </div>
              <Certifications /> {/* Acts as Achievements */}
              <Extracurricular />
              <Education />
              <Contact />
            </main>
            <ChatWidget />
            <GeminiSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;