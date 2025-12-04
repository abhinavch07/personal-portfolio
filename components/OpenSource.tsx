
import React from 'react';
import { OPEN_SOURCE } from '../constants';
import { GitPullRequest, Star, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const OpenSource: React.FC = () => {
  return (
    <section id="opensource" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Open Source</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Contributing to the community and building public tools.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {OPEN_SOURCE.map((item, index) => (
            <motion.div 
                key={item.id} 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <GitPullRequest size={20} className="text-primary" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.repo}</a>
                        </h3>
                        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                            {item.role}
                        </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {item.description}
                    </p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500" />
                        {item.stars.toLocaleString()}
                    </span>
                    <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                    >
                        View <ExternalLink size={14} />
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

export default OpenSource;
