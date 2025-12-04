import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div 
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
            >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email Me</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    {CONTACT_INFO.email}
                </a>
            </motion.div>

            <motion.div 
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Call Me</h3>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                    {CONTACT_INFO.phone}
                </a>
            </motion.div>

            <motion.div 
                className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Location</h3>
                <p className="text-slate-600 dark:text-slate-400">
                    {CONTACT_INFO.address}
                </p>
            </motion.div>
        </div>

        <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
        >
             {SOCIAL_LINKS.map((link) => {
                 // Simple mapping for footer icons
                 const Icon = link.iconName === 'Github' ? Github : 
                              link.iconName === 'Linkedin' ? Linkedin : 
                              link.iconName === 'Twitter' ? Twitter : Mail;
                 
                 return (
                    <a 
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-primary transition-colors"
                    >
                        <Icon size={24} />
                    </a>
                 );
             })}
        </motion.div>
      
        <footer className="mt-12 text-center text-slate-500 dark:text-slate-600 text-sm border-t border-slate-200 dark:border-slate-800 pt-8">
            <p>© {new Date().getFullYear()} Abhinav Choudhary. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;