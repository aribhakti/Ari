import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, ArrowRight, Github } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[100px] opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[100px] opacity-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
          >
            Looking for a seasoned Product Manager to drive your business forward?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            Connect with Ari today to explore how his contributions can help you achieve outstanding outcomes.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center"
          >
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 hover:bg-green-500 text-white rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-green-900/20"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            
            <a 
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#24292F] hover:bg-[#24292F]/90 text-white border border-slate-700/50 rounded-lg font-bold transition-all hover:-translate-y-1 shadow-lg shadow-slate-900/50"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;