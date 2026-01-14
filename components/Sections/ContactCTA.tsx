import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
          Ready to HyperScale?
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Break the 8-figure revenue barrier. DM me 'HyperScale' to start your journey towards operational freedom and exponential growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/shripal-gandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-3"
          >
            DM me on LinkedIn <ArrowRight size={20} />
          </a>
          <a
            href="mailto:contact@hyperscale.com" // Placeholder email
            className="px-10 py-5 bg-black border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors flex items-center gap-3"
          >
            <Mail size={20} /> Email My Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
