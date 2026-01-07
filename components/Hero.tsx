import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { TextReveal } from './UI/TextReveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-20 pt-20 overflow-hidden">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 0.4 }}
           transition={{ duration: 2 }}
           className="absolute inset-0 bg-[linear-gradient(rgba(24,214,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(24,214,198,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
           style={{ transform: 'perspective(500px) rotateX(20deg)' }}
         />
         {/* Scanning Light Bar */}
         <motion.div 
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-eidolon-teal/5 to-transparent"
            animate={{ top: ['-10%', '110%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
         />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 space-y-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center space-x-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(24,214,198,0.2)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eidolon-teal opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-eidolon-teal"></span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-eidolon-teal font-semibold">White-Label Conversion Ops</span>
        </motion.div>

        <div className="space-y-6 max-w-4xl">
          <TextReveal 
            as="h1" 
            text="You generate the leads. We stop the leakage after the click." 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-white leading-[1.15] drop-shadow-2xl" 
          />
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            24/7 call & SMS handling, booking-focused qualification, and clean CRM reporting. Done-for-you and completely white-label.
          </motion.p>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 1 }}
           className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="group relative px-8 py-4 bg-eidolon-teal text-black font-bold uppercase tracking-widest rounded overflow-hidden shadow-[0_0_20px_-5px_#18D6C6] transition-all hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center justify-center gap-2">
              Request a Proof Sprint <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button className="group relative px-8 py-4 border border-white/20 text-white uppercase tracking-widest text-sm rounded overflow-hidden transition-all hover:border-eidolon-teal/50 hover:text-eidolon-teal">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="relative flex items-center justify-center gap-2">
               <Activity className="w-4 h-4" /> Test the Voice
             </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex items-center gap-4 text-xs text-gray-500 font-mono mt-8"
        >
          <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
          7 days to prove it.
          <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" />
          14 days to deploy it.
        </motion.div>
      </div>
    </section>
  );
};