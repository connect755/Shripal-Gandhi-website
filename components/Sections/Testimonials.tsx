import React from 'react';
import { TESTIMONIALS } from '../../constants';
import GlassCard from '../UI/GlassCard';
import { Star, CheckCircle } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-secondary mb-4">
             <CheckCircle size={16} /> <span className="text-sm font-bold tracking-wide">TRUSTPILOT VERIFIED</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">Trusted by Founders</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, index) => (
            <GlassCard key={index} className="flex flex-col h-full">
              <div className="flex gap-1 text-primary mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 flex-grow leading-relaxed italic">"{review.content}"</p>
              
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-bold text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <a href="https://www.trustpilot.com/review/hyperscaleleaderstribe.com" target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors border-b border-primary/30 hover:border-white pb-1">Read all reviews on Trustpilot</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
