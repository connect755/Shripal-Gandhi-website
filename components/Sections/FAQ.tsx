import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface/50 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 mb-4 text-gray-400">
                <HelpCircle size={24} />
            </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold">Common Questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
                key={index} 
                className={`border rounded-xl transition-all duration-300 ${
                    activeIndex === index 
                    ? 'border-primary/30 bg-white/5' 
                    : 'border-white/5 hover:border-white/10'
                }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className={`font-medium text-lg ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                  {faq.question}
                </span>
                <span className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary' : 'text-gray-500'}`}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
