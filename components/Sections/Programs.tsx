import React from 'react';
import { motion } from 'framer-motion';
import { PROGRAMS } from '../../constants';
import { Check, ArrowRight, Zap } from 'lucide-react';
import GlassCard from '../UI/GlassCard';

const Programs = () => {
  return (
    <section id="programs" className="py-24 relative">
       {/* Ambient Glow */}
       <div className="absolute top-1/2 right-0 w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            Work With Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold mt-4"
          >
            Pathways to Growth
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Choose the level of intervention that fits your current business stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className={`h-full flex flex-col ${program.popular ? 'border-primary/50 bg-primary/5' : ''}`}>
                {program.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 z-20">
                    <Zap size={12} fill="currentColor" /> MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <div className="text-primary font-medium text-sm tracking-wide mb-4">{program.subtitle}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[16px]">
                         <Check size={16} className="text-secondary" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    program.popular 
                    ? 'bg-primary text-black hover:bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
                    : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}>
                  {program.cta} <ArrowRight size={16} />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
