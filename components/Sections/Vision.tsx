import React from 'react';
import { motion } from 'framer-motion';
import { VISION_CARDS } from '../../constants';
import GlassCard from '../UI/GlassCard';

const Vision = () => {
  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="text-primary font-medium tracking-wider uppercase text-sm"
          >
            The Philosophy
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold mt-4"
          >
            What I Stand For
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VISION_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full flex flex-col items-start hover:bg-white/5 transition-colors">
                <div className={`p-3 rounded-lg bg-white/5 mb-6 ${card.color}`}>
                  <card.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
