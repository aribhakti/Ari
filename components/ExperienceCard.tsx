import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface Props {
  data: Experience;
  index: number;
}

const ExperienceCard: React.FC<Props> = ({ data, index }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div className="mb-12 md:mb-20 relative pl-8 md:pl-0">
      {/* Connector Line for Mobile */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:hidden" />
      
      <div className={`md:flex items-start justify-between gap-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Date / Timeline Marker for Desktop */}
        <div className={`hidden md:flex w-5/12 justify-end ${index % 2 === 1 ? 'justify-start' : ''} pt-2`}>
          <div className="flex items-center gap-4">
             <span className={`text-lg font-bold ${index % 2 === 1 ? 'order-2' : ''} text-slate-400 font-mono tracking-tight`}>
              {data.period}
            </span>
             <motion.div 
               whileInView={{ scale: [0, 1.5, 1] }}
               transition={{ duration: 0.5 }}
               className={`w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100 shadow-sm ${index % 2 === 1 ? 'order-1' : ''}`} 
             />
          </div>
        </div>

        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-slate-200 to-slate-200 -translate-x-1/2 z-0" />
        
        {/* Animated Connector Dot */}
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ margin: "-100px" }}
          className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
        />

        {/* Content Card with Spotlight Effect */}
        <motion.div 
          ref={divRef}
          onMouseMove={handleMouseMove}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 30, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="w-full md:w-5/12 relative bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden group"
        >
          {/* Spotlight Gradient */}
          <div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
            }}
          />
          
          {/* Mobile Date */}
          <div className="md:hidden flex items-center gap-2 text-sm font-bold text-slate-400 mb-6 border-b border-slate-100 pb-4 font-mono">
            <Calendar className="w-4 h-4" /> {data.period}
          </div>

          <div className="flex items-start gap-5 mb-6 relative z-10">
            <div className="w-16 h-16 shrink-0 bg-white rounded-2xl border border-slate-100 p-2 flex items-center justify-center shadow-sm overflow-hidden group-hover:scale-110 transition-transform duration-500">
              <img 
                src={data.logo} 
                alt={`${data.company} Logo`} 
                loading="lazy"
                decoding="async"
                width="64"
                height="64"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${data.company}&background=0F172A&color=fff&size=128&bold=true`;
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{data.role}</h3>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-lg mt-1">{data.company}</div>
              <div className="text-sm text-slate-500 font-medium">{data.location}</div>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed mb-6 italic relative z-10">
            "{data.description}"
          </p>

          <ul className="space-y-3 relative z-10">
            {data.achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700 group/item">
                <div className="mt-1 p-1 rounded-full bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="group-hover/item:text-slate-900 transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ExperienceCard;