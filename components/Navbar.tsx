import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Partner Offer", href: "#partner-offer" },
    { name: "Solutions", href: "#solutions" },
    { name: "Test the Voice", href: "#voice-preview" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-eidolon-void/90 backdrop-blur-md border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="text-xl font-display tracking-[0.2em] font-semibold text-white relative group">
          EIDOLON
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-eidolon-teal transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-light text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-xs font-bold uppercase tracking-widest text-eidolon-teal hover:text-white transition-colors">
            Test the Voice
          </button>
          <button className="px-6 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded transition-all duration-300">
            Request Sprint
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-eidolon-void border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-white">
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <button className="w-full py-3 bg-eidolon-teal text-black font-bold uppercase tracking-widest rounded">
                Request Proof Sprint
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};