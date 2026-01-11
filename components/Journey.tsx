import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

const Journey: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-20 md:py-32 bg-[#0B1120] text-white relative overflow-hidden perspective-1000">
      {/* Background Ambience with more movement */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-[128px] opacity-20" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-10" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* Left Side: The Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-6 text-blue-400 font-bold tracking-widest uppercase text-sm">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>The Origin Story</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              From Managing Products to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Building a Vision.</span>
            </h2>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
              <p>
                After 14+ years navigating the complexities of Product Management—from agile startups to massive enterprises, across B2B and B2C landscapes—Ari carried a singular ambition: <strong className="text-white font-medium">to build something of his own.</strong>
              </p>
              <p>
                But ambition often waits for opportunity. The turning point wasn't just a decision; it was a partnership. When a close friend reached out, he didn't offer a job. He offered a shared vision.
              </p>
              <p className="italic text-slate-400 border-l-2 border-slate-700 pl-4">
                That was the genesis of <strong className="text-white">Etalas</strong>.
              </p>
            </div>
          </motion.div>

          {/* Right Side: The Value Proposition (3D Tilt Card) */}
          <div className="lg:w-1/2 w-full perspective-1000">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
              className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] relative shadow-2xl group"
            >
              <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                
                {/* Decoration */}
                <div className="absolute -top-6 -right-6 text-white/5">
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M30 60 H10 V30 H40 V60 M80 60 H60 V30 H90 V60" stroke="currentColor" strokeWidth="20" />
                  </svg>
                </div>

                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Not Just a Software House. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">A Strategic Product Partner.</span>
                </h3>

                <p className="text-slate-300 mb-8 text-lg">
                  Most agencies build what you ask for. <br/>
                  <span className="text-white font-semibold">We build what works.</span>
                </p>

                <p className="text-slate-400 mb-10 text-sm leading-relaxed border-t border-white/10 pt-6">
                  Leveraging deep Product Management expertise, we don't just write code; we engineer value. We bridge the dangerous gap between abstract vision and market-ready execution. 
                </p>

                <a 
                  href="https://etalas.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-blue-50 transition-all group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                >
                  Build your vision with us 
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;