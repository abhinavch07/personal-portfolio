
import React from 'react';
import { EDUCATION } from '../constants';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationAnimation = () => (
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[400px]">
    <defs>
      <linearGradient id="gradCap" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    
    {/* Floating Elements Group */}
    <motion.g 
      initial={{ y: 20 }}
      animate={{ y: -20 }}
      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
    >
        {/* Graduation Cap */}
        <motion.path 
            d="M50 150 L200 100 L350 150 L200 200 Z" 
            fill="url(#gradCap)" 
            stroke="#475569" 
            strokeWidth="2"
            className="drop-shadow-lg"
        />
        <motion.path 
            d="M350 150 L350 200 C350 220 200 240 200 240 L200 200" 
            fill="#4f46e5" 
            opacity="0.8"
        />
        {/* Tassel */}
        <motion.circle cx="200" cy="150" r="8" fill="#fbbf24" />
        <motion.path 
            d="M200 150 Q280 150 280 220" 
            fill="none" 
            stroke="#fbbf24" 
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.circle 
            cx="280" 
            cy="220" 
            r="6" 
            fill="#fbbf24"
            animate={{ rotate: 15 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }} 
        />
    </motion.g>

    {/* Certificate Scroll */}
    <motion.g 
        transform="translate(80, 250) rotate(-10)"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
    >
        <rect width="200" height="60" rx="30" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="4" rx="2" fill="#cbd5e1" />
        <rect x="20" y="36" width="100" height="4" rx="2" fill="#cbd5e1" />
        
        {/* Ribbon */}
        <circle cx="180" cy="30" r="15" fill="#ef4444" />
        <path d="M180 30 L170 60 L180 50 L190 60 Z" fill="#ef4444" />
    </motion.g>

    {/* Background Decorative Circles */}
    <motion.circle 
        cx="50" cy="50" r="20" 
        className="fill-primary/20 dark:fill-primary/10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
    />
    <motion.circle 
        cx="350" cy="300" r="30" 
        className="fill-secondary/20 dark:fill-secondary/10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
    />
  </svg>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Column: Interactive Animation */}
            <motion.div 
                className="w-full lg:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <EducationAnimation />
            </motion.div>

            {/* Right Column: Education Cards */}
            <div className="w-full lg:w-1/2 space-y-6">
                {EDUCATION.map((edu, index) => (
                    <motion.div 
                        key={edu.id} 
                        className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <div className="flex items-start gap-4">
                            {/* Institution Logo */}
                            <div className="flex-shrink-0">
                                {edu.logoUrl ? (
                                    <img 
                                        src={edu.logoUrl} 
                                        alt={edu.institution} 
                                        className="w-16 h-16 rounded-lg object-contain bg-slate-50 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700 group-hover:scale-105 transition-transform"
                                    />
                                ) : (
                                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                                        {edu.institution.charAt(0)}
                                    </div>
                                )}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                    {edu.institution}
                                </h3>
                                <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-1">{edu.degree}</h4>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                                        <Calendar size={14} />
                                        {edu.date}
                                    </span>
                                    {edu.grade && (
                                        <span className="font-semibold text-secondary">
                                            Grade: {edu.grade}
                                        </span>
                                    )}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
