import React from 'react';
import { SOCIAL_LINKS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="font-display font-bold text-xl text-white">
                Shripal<span className="text-primary">Gandhi</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Empowering founders to break growth ceilings and build scalable ecosystems. 
              Turning 8-figure businesses into industry leaders through systematic scaling.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                  aria-label={link.platform}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'HyperScale Tribe', 'Reviews', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Shripal Gandhi. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Designed for Excellence <ArrowUpRight size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
