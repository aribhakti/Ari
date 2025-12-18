import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialCard: React.FC<{ data: typeof TESTIMONIALS[0]; index: number }> = ({ data, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white p-8 rounded-3xl border border-slate-200/60 relative group overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
        }}
      />

      <Quote className="w-12 h-12 text-slate-100 absolute top-6 right-6 group-hover:text-blue-50 group-hover:rotate-12 transition-all duration-500" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 border-2 border-white ring-2 ring-slate-100 group-hover:ring-blue-200 transition-all">
          <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-sm leading-tight group-hover:text-blue-600 transition-colors">{data.name}</h4>
          <p className="text-xs text-slate-500 line-clamp-1">{data.role}</p>
        </div>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 italic relative z-10">
        "{data.content}"
      </p>

      <div className="pt-4 border-t border-slate-100 relative z-10">
        <p className="text-xs font-bold text-blue-600 uppercase tracking-wide flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          {data.relation}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-slate-50 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3"
          >
            Endorsements
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Trusted by Leaders & Peers
          </motion.h2>
          <p className="text-slate-500 text-lg">
            A selection of recommendations from colleagues, managers, and partners throughout his career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} data={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;