import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Linkedin, Github, MessageCircle, Mail } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceList from './components/ExperienceList';
import Education from './components/Education';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen relative selection:bg-blue-500/30">
      {/* Global Animated Background */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-50">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] animate-pulse"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500 opacity-10 blur-[120px]"></div>
      </div>

      <Header />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceList />
        <Education />
        <Journey />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          
          <div className="flex gap-6 mb-8">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-blue-600 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-green-600 transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
             <a href={SOCIAL_LINKS.email} className="p-3 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Ari Bhakti Subagja. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-slate-500 text-sm">
             <span>Jakarta, Indonesia</span>
             <span>•</span>
             <span>Remote / Hybrid</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-slate-900 text-white shadow-xl hover:bg-blue-600 transition-colors border border-slate-800"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;