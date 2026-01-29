import React from 'react';
import { HERO_DATA } from '../constants';
import { motion } from 'framer-motion';

const ProjectManagementIllustration = () => {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* SVG content remains unchanged */}
    </svg>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-20 dark:bg-purple-900"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-20 dark:bg-indigo-900"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 dark:opacity-20 dark:bg-pink-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              {/* New Image Added Here */}
              <img
                src="/ablink.jpg"
                alt="Profile"
                className="w-20 h-20 rounded-full mr-4 border-4 border-primary"
              />
              <div>
                <h2 className="text-xl text-primary font-semibold mb-2">Hi there, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                  {HERO_DATA.name}
                </h1>
                <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6">
                  {HERO_DATA.role}
                </h3>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {HERO_DATA.bio}
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a href="#contact" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-indigo-600 transition-colors font-medium">
                Let's Connect
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Dynamic Illustration Container */}
          <div className="w-full max-w-lg aspect-square relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <ProjectManagementIllustration />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
