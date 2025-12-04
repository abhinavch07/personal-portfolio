
import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="pb-20 pt-10 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
          
          {EXPERIENCE.map((exp, index) => (
            <motion.div
                key={exp.id}
                className="relative z-10 mb-16 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                    <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                        
                        {/* Header with Logo */}
                        <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:justify-start'}`}>
                            {exp.logo && (
                                <img 
                                    src={exp.logo} 
                                    alt={`${exp.company} logo`} 
                                    className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 bg-white p-0.5"
                                />
                            )}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                                <h4 className="text-lg text-primary font-medium">{exp.company}</h4>
                            </div>
                        </div>

                        <div className={`text-slate-500 dark:text-slate-400 text-sm mb-4 font-mono md:hidden`}>
                             {exp.date}
                        </div>
                        
                        <ul className={`list-none space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                            {exp.description.map((desc, i) => (
                                <li key={i} className="relative pl-5 before:content-['•'] before:absolute before:left-0 before:text-primary">
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                            {exp.skills.map(skill => (
                                <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded font-medium border border-slate-200 dark:border-slate-700">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2.5 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-slate-400 dark:bg-slate-500 z-10"></div>

                {/* Date Side (Desktop) */}
                <div className="hidden md:block w-1/2 px-8">
                   <div className={`text-slate-500 dark:text-slate-400 font-mono text-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                       {exp.date}
                   </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;