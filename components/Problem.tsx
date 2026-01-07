import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertCircle, CalendarX, PhoneMissed, Clock } from 'lucide-react';

export const Problem: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const steps = [
    { title: "Lead Arrives", icon: "⚡️", color: "text-white", border: "border-white/20", glow: "shadow-none" },
    { title: "Missed Call", icon: <PhoneMissed className="w-6 h-6" />, color: "text-red-400", border: "border-red-500/30", glow: "shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]" },
    { title: "Slow Response", icon: <Clock className="w-6 h-6" />, color: "text-red-400", border: "border-red-500/30", glow: "shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]" },
    { title: "No Booking", icon: <CalendarX className="w-6 h-6" />, color: "text-red-400", border: "border-red-500/30", glow: "shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]" },
    { title: "Client Blames Ads", icon: <AlertCircle className="w-6 h-6" />, color: "text-red-500", border: "border-red-500/50", glow: "shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)]" },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-24 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl lg:text-5xl font-display text-white mb-6"
        >
          Most "lead quality" complaints are <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">lead-handling problems.</span>
        </motion.h2>
        <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Your ads can work. But if the lead hits voicemail or gets a slow reply, leakage after the click becomes a retention killer.
        </p>
      </div>

      {/* Vertical Pipeline Visualization */}
      <div className="max-w-2xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
        
        {/* Animated Pulse moving down */}
        <motion.div 
           className="absolute left-1/2 top-0 w-1 h-20 bg-gradient-to-b from-transparent via-red-500 to-transparent -translate-x-1/2 z-0"
           style={{ top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />

        <div className="space-y-16 relative z-10">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-center gap-8 w-full`}
            >
              {/* Text Label Side */}
              <div className={`w-1/2 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <h3 className={`text-lg font-display ${step.color}`}>{step.title}</h3>
              </div>

              {/* Icon Node Center */}
              <div className={`relative w-16 h-16 rounded-full bg-black border ${step.border} ${step.glow} flex items-center justify-center z-10 ${step.color}`}>
                 {typeof step.icon === 'string' ? <span className="text-2xl">{step.icon}</span> : step.icon}
                 {idx > 0 && (
                   <div className="absolute inset-0 bg-red-500/10 rounded-full animate-pulse" />
                 )}
              </div>

              {/* Spacer Side */}
              <div className="w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};