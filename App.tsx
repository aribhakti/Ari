import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ExperienceList from './components/ExperienceList';
import Education from './components/Education';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App: React.FC = () => {
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

      <footer className="bg-slate-900 border-t border-slate-800 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Ari Bhakti Subagja. 
          </p>
          <div className="flex justify-center gap-6 text-slate-400 text-sm">
             <span>Jakarta, Indonesia</span>
             <span>•</span>
             <span>Remote / Hybrid</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;