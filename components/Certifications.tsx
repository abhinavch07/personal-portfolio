
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Achievements & Certifications</h2>
            <Star className="w-5 h-5 text-amber-500" fill="currentColor" />
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Industry-recognized certifications and professional credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col cursor-pointer hover:scale-105 transform"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              {/* Badge Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 dark:from-blue-900/30 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className="p-3 bg-white/95 dark:bg-slate-900/95 rounded-full text-blue-600 dark:text-blue-400 shadow-lg"
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Award size={24} />
                    </motion.div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col relative z-10">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">{cert.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2 flex items-center gap-1">
                        <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        {cert.issuer}
                    </p>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                    {cert.description}
                </p>

                <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <div className="flex items-center justify-between">
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-medium flex items-center gap-2">
                            <Calendar size={14} />
                            {cert.date}
                        </span>
                        <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">View on Credly</span>
                            <ExternalLink size={14} className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Credly Profile Link Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              View all my verified credentials on Credly
            </p>
            <a
              href="https://www.credly.com/users/abhinav-choudhary/badges"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Visit Credly Profile
              <ExternalLink size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
