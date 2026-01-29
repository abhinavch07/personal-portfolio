import React from 'react';
import { HERO_DATA } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden bg-white dark:bg-slate-900">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-200 dark:bg-cyan-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider"
                >
                  Welcome to my portfolio
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mt-2 leading-tight"
                >
                  {HERO_DATA.name.split(' ')[0]}
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                    {HERO_DATA.name.split(' ')[1]}
                  </span>
                </motion.h1>
              </div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300"
              >
                {HERO_DATA.role}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg"
              >
                {HERO_DATA.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#skills"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
                >
                  Learn More
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative w-full max-w-md">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-teal-600/20 rounded-2xl blur-2xl"></div>

              {/* Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white dark:border-slate-700">
                <img
                  src={HERO_DATA.profileImage}
                  alt={HERO_DATA.name}
                  className="w-full h-full object-cover aspect-square"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Accent Card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 z-20 border border-slate-200 dark:border-slate-700 max-w-xs"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Program Manager
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Transforming ideas into impact
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
