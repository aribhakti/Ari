import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Duplicate skills to ensure seamless looping
  const marqueeSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <section className="py-20 md:py-32 bg-white relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-slate-900 mb-4"
          >
            Core Competencies
          </motion.h2>
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
      </div>
        
      {/* Marquee Container */}
      <div className="relative w-full max-w-[100vw] overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 md:gap-8 pb-4">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop" 
            }}
            className="flex flex-nowrap gap-4 md:gap-8 min-w-full"
          >
            {/* Render Twice for the Loop */}
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0 px-6 py-3 rounded-xl border font-medium text-sm md:text-base whitespace-nowrap transition-colors duration-300
                  ${skill.category === 'Leadership' ? 'bg-blue-50 border-blue-100 text-blue-700' : 
                    skill.category === 'Tech' ? 'bg-indigo-50 border-indigo-100 text-indigo-700' : 
                    'bg-slate-50 border-slate-200 text-slate-700'}
                  hover:bg-white hover:border-slate-300 hover:shadow-md cursor-default
                `}
              >
                {skill.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;