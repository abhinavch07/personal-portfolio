import React from 'react';
import { HERO_DATA } from '../constants';
import { motion } from 'framer-motion';

const ProjectManagementIllustration = () => {
  return (
    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Definitions for gradients */}
      <defs>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* Main Dashboard Background */}
      <motion.rect
        x="50" y="80" width="400" height="300" rx="15"
        className="fill-white dark:fill-slate-800 stroke-slate-200 dark:stroke-slate-700"
        strokeWidth="2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Dashboard Header */}
      <motion.rect
        x="50" y="80" width="400" height="50" rx="15"
        className="fill-slate-50 dark:fill-slate-700/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      {/* Window Controls */}
      <circle cx="80" cy="105" r="5" fill="#ef4444" opacity="0.8" />
      <circle cx="100" cy="105" r="5" fill="#f59e0b" opacity="0.8" />
      <circle cx="120" cy="105" r="5" fill="#10b981" opacity="0.8" />

      {/* Kanban Columns */}
      <g transform="translate(70, 150)">
        {/* Column 1: Todo */}
        <motion.rect
          x="0" y="0" width="100" height="200" rx="8"
          className="fill-slate-100 dark:fill-slate-700/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        {/* Cards in Col 1 */}
        <motion.rect
          x="10" y="10" width="80" height="60" rx="6"
          fill="url(#cardGradient)"
          opacity="0.8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 0.8 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        />
        <motion.rect
          x="10" y="80" width="80" height="40" rx="6"
          className="fill-white dark:fill-slate-600"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
      </g>

      <g transform="translate(200, 150)">
        {/* Column 2: In Progress */}
        <motion.rect
          x="0" y="0" width="100" height="200" rx="8"
          className="fill-slate-100 dark:fill-slate-700/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        {/* Floating Card Moving */}
        <motion.rect
          x="10" y="40" width="80" height="50" rx="6"
          className="fill-white dark:fill-slate-600"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="4 2"
          animate={{ 
            y: [0, -10, 0],
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </g>

      <g transform="translate(330, 150)">
        {/* Column 3: Done */}
        <motion.rect
          x="0" y="0" width="100" height="200" rx="8"
          className="fill-slate-100 dark:fill-slate-700/30"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
        {/* Completed Card with Checkmark */}
        <motion.rect
          x="10" y="10" width="80" height="80" rx="6"
          className="fill-emerald-500/20 stroke-emerald-500"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring" }}
        />
        <motion.path
          d="M35 50 L45 60 L65 40"
          transform="translate(330, 150)" // Adjust based on group transform
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        />
      </g>

      {/* Connection Lines / Flow */}
      <motion.path
        d="M160 180 C 180 180, 180 200, 200 200"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="2"
        strokeDasharray="4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      />

      {/* Pie Chart Floating Element */}
      <g transform="translate(380, 50)">
         <motion.circle
            cx="40" cy="40" r="30"
            className="fill-white dark:fill-slate-800"
            stroke="#e2e8f0"
            strokeWidth="8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
         />
         <motion.circle
            cx="40" cy="40" r="30"
            fill="none"
            stroke="#a855f7"
            strokeWidth="8"
            strokeDasharray="188"
            strokeDashoffset="188"
            transform="rotate(-90 40 40)"
            animate={{ strokeDashoffset: 40 }}
            transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
         />
      </g>

      {/* Success Badge */}
      <motion.g 
        transform="translate(420, 350)"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <circle r="25" fill="#6366f1" className="shadow-lg" />
        <path d="M-7 0 L0 7 L7 -7" stroke="white" strokeWidth="3" fill="none" />
      </motion.g>

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
                <h2 className="text-xl text-primary font-semibold mb-2">Hi there, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                {HERO_DATA.name}
                </h1>
                <h3 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-6">
                {HERO_DATA.role}
                </h3>
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