import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../../constants';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50 relative group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Shripal<span className="text-primary">Gandhi</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/shripal-gandhi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all duration-300 hover:border-primary/50 text-white flex items-center gap-2"
          >
            Let's Connect <ChevronRight size={14} />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8"
            >
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex gap-6 mt-8">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
