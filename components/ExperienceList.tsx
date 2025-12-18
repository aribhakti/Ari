import React from 'react';
import { EXPERIENCES } from '../constants';
import ExperienceCard from './ExperienceCard';

const ExperienceList: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Career Trajectory</h2>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            A Proven Track Record
          </h2>
          <p className="text-slate-500 text-lg">
            From early-stage execution to executive strategy, his journey is defined by measurable impact and consistent delivery.
          </p>
        </div>

        <div className="relative">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={exp.id} data={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;