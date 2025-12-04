
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Certifications, awards, and professional milestones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div 
                key={cert.id} 
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors z-10"></div>
                <img 
                    src={cert.imageUrl} 
                    alt={cert.name} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                    <div className="p-2 bg-white/90 dark:bg-slate-900/90 rounded-full text-primary">
                        <Award size={20} />
                    </div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">{cert.name}</h3>
                    <p className="text-primary font-medium mt-1">{cert.issuer}</p>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {cert.description}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-4">
                    <span className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                        <Calendar size={14} />
                        {cert.date}
                    </span>
                    <a 
                        href={cert.credentialUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-indigo-600 transition-colors"
                    >
                        View Credential <ExternalLink size={14} />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
