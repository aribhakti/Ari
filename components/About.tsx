import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">About Ari</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              A blend of strategic vision and meticulous execution.
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                As an accomplished <strong>Product Manager with 14 years of experience</strong> in the payment and financial technology industry, Ari has demonstrated a remarkable ability to excel in both B2B and B2C environments.
              </p>
              <p>
                His expertise spans enterprise and startup settings, where he has been instrumental in driving growth and innovation. With a deep understanding of project management and quality assurance, Ari consistently delivers exceptional results, earning a reputation for meticulous attention to detail and strategic thinking.
              </p>
              <p>
                He is passionate about navigating complex challenges to help organizations stay ahead in dynamic industries. His unique blend of skills enables him to lead cross-functional teams towards outstanding outcomes, always prioritizing customer satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: "Years Experience", value: "14+" },
              { label: "Enterprises Scaled", value: "3" },
              { label: "Products Launched", value: "12+" },
              { label: "Users Impacted", value: "20k+" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;