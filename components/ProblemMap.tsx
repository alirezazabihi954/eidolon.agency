import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, PhoneMissed, UserMinus } from 'lucide-react';
import { cn } from '../utils';

export const ProblemMap: React.FC = () => {
  const steps = [
    { icon: AlertCircle, label: "Form Submitted", color: "text-white" },
    { icon: Clock, label: "No Response (5m)", color: "text-red-500", glow: true },
    { icon: UserMinus, label: "Lead Cools Off", color: "text-slate" },
    { icon: PhoneMissed, label: "Opportunity Lost", color: "text-red-500" },
  ];

  return (
    <section className="py-24 px-6 md:px-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-5xl">The Leakage Map</h2>
        
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 -z-10"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center bg-obsidian px-4 py-2"
            >
              <div className={cn(
                "flex h-16 w-16 items-center justify-center rounded-2xl border bg-charcoal mb-4 transition-all duration-300",
                step.glow ? "border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]" : "border-white/10"
              )}>
                <step.icon size={24} className={step.color} />
              </div>
              <span className={cn("font-medium", step.color)}>{step.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-8 md:hidden relative pl-8 border-l border-white/10 ml-4">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex items-center gap-4"
            >
              <div className={cn(
                "absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border bg-obsidian",
                step.glow ? "border-red-500 bg-red-500/10" : "border-white/10"
              )}>
                <div className={cn("h-2 w-2 rounded-full", step.glow ? "bg-red-500" : "bg-white/20")} />
              </div>
              <div className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl border bg-charcoal",
                step.glow ? "border-red-500/30" : "border-white/10"
              )}>
                <step.icon size={20} className={step.color} />
              </div>
              <span className={cn("font-medium", step.color)}>{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};