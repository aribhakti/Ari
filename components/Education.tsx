import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-blue-600 mb-3"
          >
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-bold tracking-widest uppercase">Academic Background</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Education & Qualifications
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION.map((edu, index) => (
            <EducationCard key={edu.id} data={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<{ data: typeof EDUCATION[0]; index: number }> = ({ data, index }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden"
    >
       {/* Spotlight Gradient */}
       <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.05), transparent 40%)`,
        }}
      />

      <div className="flex items-start gap-6 relative z-10">
        <div className="w-20 h-20 shrink-0 bg-slate-50 rounded-2xl p-2 border border-slate-100 group-hover:scale-105 group-hover:border-blue-100 transition-all duration-500">
          <img src={data.logo} alt={data.institution} className="w-full h-full object-contain" />
        </div>
        
        <div className="pt-1">
          <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
            {data.institution}
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed">
            {data.degree}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default Education;