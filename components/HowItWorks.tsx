import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GlassCard } from './UI/GlassCard';

const steps = [
  "Lead/call arrives",
  "Instant response (Call+SMS)",
  "Qualify (3-6 questions)",
  "Book or Human Handoff",
  "Multi-step Follow-up",
  "CRM Outcomes Logged",
  "Reporting Dashboard"
];

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-32 px-6 max-w-7xl mx-auto relative">
      <div className="text-center mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl lg:text-5xl font-display text-white mb-4"
        >
          Simple workflow. <span className="text-eidolon-teal">Measurable outcomes.</span>
        </motion.h2>
        <p className="text-gray-500 uppercase tracking-widest text-xs">Minimal Lift Integration</p>
      </div>

      <div className="relative">
        {/* Animated Connecting Line (Desktop) */}
        <div className="absolute top-[50%] left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-transparent via-eidolon-teal to-transparent w-full"
            style={{ x: useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]) }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <GlassCard className="relative p-6 h-full flex flex-col justify-between min-h-[160px] hover:-translate-y-2 transition-transform duration-300 border-white/5 hover:border-eidolon-teal/30 group" glowOnHover>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eidolon-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <span className="text-6xl font-display text-white/5 absolute top-2 right-4 group-hover:text-eidolon-teal/10 transition-colors duration-500">{idx + 1}</span>
                
                <div className="w-2 h-2 rounded-full bg-eidolon-teal/20 mb-4 border border-eidolon-teal/50 group-hover:bg-eidolon-teal group-hover:shadow-[0_0_10px_#18D6C6] transition-all" />
                
                <span className="text-lg text-white font-light relative z-10">{step}</span>
              </GlassCard>
            </motion.div>
          ))}
          
          {/* Final Status Card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.8 }}
             className="relative"
          >
            <div className="absolute inset-0 bg-eidolon-teal/20 blur-xl rounded-full" />
            <div className="relative p-6 border border-dashed border-eidolon-teal/30 rounded-2xl h-full flex items-center justify-center text-center bg-black/40 backdrop-blur-sm">
              <span className="text-eidolon-teal text-sm font-bold uppercase tracking-widest shadow-black drop-shadow-md">Outcomes Delivered</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};