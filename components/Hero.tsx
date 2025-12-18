import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-multiply" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-200/40 to-blue-200/40 rounded-full blur-[100px] opacity-60 translate-y-1/2 -translate-x-1/3 pointer-events-none mix-blend-multiply" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <span className="relative px-6 py-2 rounded-full bg-white/50 backdrop-blur-md border border-slate-200/60 text-slate-600 text-sm font-bold tracking-widest uppercase shadow-sm">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm -z-10"></span>
              14+ Years of FinTech Leadership
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Building Scalable <br className="hidden md:block" />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 animate-gradient-x bg-[length:200%_auto]">
                Digital Products That Ship
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-2 left-0 w-full h-3 bg-blue-200/50 -z-0 -skew-x-12 origin-left"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            <span className="font-semibold text-slate-900">Ari Bhakti Subagja</span> is a seasoned Product Executive helping founders and product teams move from idea to production—building clear, user-first products that grow with the business
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            {/* Shimmer Button */}
            <a 
              href="#contact"
              className="group relative px-10 py-5 bg-slate-900 text-white rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative flex items-center justify-center gap-2">
                Consult with Ari <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a 
              href="#experience"
              className="px-10 py-5 bg-white/80 backdrop-blur-sm text-slate-800 border border-slate-200 rounded-xl font-semibold text-lg hover:border-blue-400 hover:bg-white transition-all flex items-center justify-center hover:scale-105"
            >
              Explore Portfolio
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-move 3s ease infinite;
        }
        @keyframes gradient-move {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
};

export default Hero;