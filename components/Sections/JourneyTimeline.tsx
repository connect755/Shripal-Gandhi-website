import React from 'react';
import { JOURNEY } from '../../constants';
import { motion } from 'framer-motion';

const JourneyTimeline = () => {
  return (
    <section id="journey" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">A Legacy of Building</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            From scaling startups to 9-figure valuations to empowering humanity through bioscience. 
            My journey is defined by innovation, resilience, and impactful leadership.
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {JOURNEY.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] md:-left-[5px] top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-black" />
              
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12">
                <div className="flex flex-row md:flex-col items-center md:items-start gap-4">
                  <span className="text-primary font-mono text-sm">{item.period}</span>
                  <div className="hidden md:block w-full h-[1px] bg-white/10 my-2" />
                  <img src={item.logo} alt={item.company} className="w-12 h-12 rounded-lg object-cover bg-white/5" />
                </div>
                
                <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-1">{item.role}</h3>
                  <div className="text-lg text-gray-300 mb-4 font-display">{item.company}</div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {item.highlights && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-sm text-gray-400">
                          <span className="text-primary mt-1.5">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
