import React from 'react';
import { STATS } from '../../constants';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <div className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-around gap-8 md:gap-0">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center w-full sm:w-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl md:text-6xl font-bold text-white mb-2 font-display"
              >
                {stat.value}<span className="text-primary text-3xl md:text-5xl">{stat.suffix}</span>
              </motion.div>
              <div className="text-gray-500 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
