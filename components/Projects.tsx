
import React from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Some of the featured projects I have worked on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div 
                key={project.id} 
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.githubUrl && (
                        <a href={project.githubUrl} className="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a href={project.liveUrl} className="p-2 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors">
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                            <Code size={10} /> {tech}
                        </span>
                    ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
