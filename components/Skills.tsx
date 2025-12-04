
import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {SKILLS.map((skill, index) => (
            <motion.div 
                key={skill.title}
                className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-lg border border-slate-100 dark:border-slate-700 shadow-sm hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white md:w-1/3 mb-2 md:mb-0">
                    {skill.title}
                </h3>
                <div className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-600 mx-4"></div>
                <p className="text-slate-600 dark:text-slate-300 font-medium md:flex-1">
                    {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
