import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-white relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Core Competencies
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-2xl mx-auto"
          >
            Strategic capabilities and technical expertise cultivated over a decade of high-stakes product management.
          </motion.p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "#EFF6FF", 
                borderColor: "#60A5FA",
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 bg-slate-50/80 backdrop-blur-sm rounded-2xl text-slate-700 font-medium text-sm border border-slate-200 cursor-default transition-colors duration-200"
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;