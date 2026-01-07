import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Fingerprint, Network, TrendingUp } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

const steps = [
  {
    id: 1,
    title: "Extract",
    desc: "We analyze your calls, content, and emails to capture your tone, style, and expertise.",
    icon: Fingerprint
  },
  {
    id: 2,
    title: "Encode",
    desc: "We build your Twin's conversational brain, training it on your specific offers and objection handling.",
    icon: Brain
  },
  {
    id: 3,
    title: "Embed",
    desc: "Seamless integration with your calendar, CRM, and SMS platforms. It lives where your leads are.",
    icon: Network
  },
  {
    id: 4,
    title: "Elevate",
    desc: "Continuous learning loop. Your Twin gets smarter with every conversation it holds.",
    icon: TrendingUp
  }
];

export const Blueprint: React.FC = () => {
  return (
    <section id="blueprint" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-display text-white mb-4">The Eidolon Blueprint™</h2>
        <p className="text-gray-400">From human bottleneck to digital scale in 4 steps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-eidolon-teal/30 to-transparent" />

        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <GlassCard className="p-6 relative h-full hover:bg-white/5 transition-colors group" glowOnHover>
              <div className="w-10 h-10 rounded-full bg-eidolon-void border border-eidolon-teal/50 flex items-center justify-center text-eidolon-teal mb-6 relative z-10 mx-auto lg:mx-0 shadow-[0_0_15px_rgba(24,214,198,0.3)]">
                <step.icon className="w-5 h-5" />
              </div>
              
              <h3 className="text-xl font-display text-white mb-3 text-center lg:text-left">{step.title}</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed text-center lg:text-left">
                {step.desc}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="px-8 py-4 bg-eidolon-teal text-black font-bold uppercase tracking-widest rounded hover:bg-white transition-colors shadow-neon-glow">
          Book Your Build Session
        </button>
      </div>
    </section>
  );
};