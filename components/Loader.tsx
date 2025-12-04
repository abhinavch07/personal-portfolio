
import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
    >
      <div className="relative">
        {/* Hexagon Path Animation */}
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="stroke-primary"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.5
            }}
          />
        </motion.svg>
        
        {/* Inner Initial */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-3xl font-bold text-slate-900 dark:text-white tracking-widest">AC</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;