import React from 'react';
import { MEDIA_LOGOS } from '../../constants';

const FeaturedMedia = () => {
  return (
    <div className="py-12 border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 text-sm font-medium tracking-widest uppercase mb-8">Featured In</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* In a real app, use actual SVG logos. Using text for this demo but styled to look like logos */}
           {MEDIA_LOGOS.map(logo => (
               <div key={logo} className="text-xl md:text-2xl font-serif font-bold text-white hover:text-primary cursor-default transition-colors">
                   {logo}
               </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
