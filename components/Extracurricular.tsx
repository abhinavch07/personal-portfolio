
import React from 'react';
import { EXTRACURRICULARS } from '../constants';
import { Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Extracurricular: React.FC = () => {
  return (
    <section id="extracurricular" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Extracurricular</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXTRACURRICULARS.map((item, index) => (
            <motion.div 
                key={item.id} 
                className="bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <Users size={24} className="text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    </div>
                    <h4 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3 ml-1">{item.organization}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                    </p>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 min-w-[140px]">
                     <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 shadow-sm">
                        <Calendar size={14} />
                        {item.date}
                    </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
