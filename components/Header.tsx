import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-tight text-slate-900">
          AriBhakti<span className="text-blue-600">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        <a 
          href="#contact"
          className="px-5 py-2 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
        >
          Get in Touch
        </a>
      </div>
    </motion.header>
  );
};

export default Header;