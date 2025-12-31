import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '../utils';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 50], [0, 12]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Voice', href: '#voice' },
    { name: 'Economics', href: '#offer' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 md:px-20",
        isScrolled ? "border-b border-white/5 bg-obsidian/80 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-widest text-white">
          EIDOLON
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate transition-colors hover:text-cyan"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-white transition-all hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan"
          >
            <span className="relative z-10">Get Access</span>
            <div className="absolute inset-0 -z-10 translate-y-full bg-cyan/10 transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute left-0 right-0 top-full border-b border-white/10 bg-obsidian/95 p-6 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-silver"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-bold text-obsidian shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            >
              GET STARTED
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};