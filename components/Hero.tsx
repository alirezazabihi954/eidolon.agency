import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-24 md:px-20">
      {/* Background Gradient Mesh */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/20 blur-[120px] opacity-20" />
      
      {/* 3D Abstract Orb Representation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-cyan/30 to-purple-500/10 blur-3xl"
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center rounded-full border border-cyan/20 bg-cyan/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan shadow-[0_0_10px_cyan] animate-pulse mr-3"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan">System Operational</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-7xl"
        >
          Your leads are fine. <br />
          <span className="bg-gradient-to-r from-slate to-white bg-clip-text text-transparent">
            Your speed is the bottleneck.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 max-w-2xl text-lg text-slate md:text-xl"
        >
          White-label Speed-to-Lead infrastructure. Instant SMS + Rapid Calls. 
          Done-for-you. 7 days to prove it. 14 days to deploy it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col w-full gap-4 md:flex-row md:w-auto"
        >
          <a
            href="#contact"
            className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-cyan px-8 py-4 font-bold text-obsidian transition-transform active:scale-95"
          >
            <span className="relative z-10">REQUEST PROOF SPRINT</span>
            <div className="absolute inset-0 -z-10 bg-white/50 opacity-0 transition-opacity group-hover:opacity-20"></div>
          </a>
          
          <a
            href="#voice"
            className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
          >
            <Play size={18} className="mr-2" />
            TEST THE VOICE
          </a>
        </motion.div>
      </div>
    </section>
  );
};