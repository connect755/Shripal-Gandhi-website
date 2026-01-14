import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Accepting New Coaching Clients
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Scale Your Business <br />
            <span className="text-gradient">Beyond Limits.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
            I help MSME business owners and founders break growth ceilings, 2X profits, and build systems that run independently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.linkedin.com/in/shripal-gandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-black font-bold rounded-xl hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Start Your Transformation <ArrowRight size={20} />
            </a>
            <a
              href="https://www.youtube.com/@ShripalGandhicoach"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 text-white font-medium rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              <Play size={18} fill="currentColor" /> Watch Success Stories
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                  <img src={`https://picsum.photos/100/100?random=${i + 10}`} alt="Member" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-bold">6,200+</p>
              <p className="text-sm text-gray-500">Founders Coached Globally</p>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] hidden lg:block"
        >
            {/* 
               In a real scenario, this would be a cut-out transparent PNG of the user.
               Using a placeholder that looks professional.
            */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 bottom-0 h-40" />
          <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-white/5">
             <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop" 
                alt="Shripal Gandhi"
                className="w-full h-full object-cover object-top opacity-90 hover:scale-105 transition-transform duration-700"
             />
             
             {/* Float Cards */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute top-20 right-10 glass p-4 rounded-xl z-20 max-w-[180px]"
             >
                <div className="text-xs text-gray-400 mb-1">Revenue Scaled</div>
                <div className="text-2xl font-bold text-primary">₹1200 Cr</div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-20 left-10 glass p-4 rounded-xl z-20 flex gap-3 items-center"
             >
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    <ArrowRight className="-rotate-45" />
                </div>
                <div>
                    <div className="text-white font-bold">10X Valuation</div>
                    <div className="text-xs text-gray-400">Growth Strategy</div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
