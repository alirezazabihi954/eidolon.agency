import React from 'react';
import { GlassCard } from './UI/GlassCard';
import { Mic2, Zap, Globe2, ShieldCheck, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Human-like Voice AI",
    description: "Indistinguishable from reality. Handles interruptions, pauses, and context switching.",
    icon: Mic2,
  },
  {
    title: "No-code Builder",
    description: "Adjust your Twin's script and logic visually. No engineering degree required.",
    icon: Layers,
  },
  {
    title: "Multilingual",
    description: "Speak to your global audience in 30+ languages with native accents.",
    icon: Globe2,
  },
  {
    title: "Instant Sync",
    description: "Push data to HubSpot, Salesforce, or Google Sheets in real-time.",
    icon: Database,
  },
  {
    title: "24/7 Availability",
    description: "Your Twin never takes a sick day, sleeps, or asks for a raise.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "GDPR, HIPAA, and SOC2 compliant infrastructure for peace of mind.",
    icon: ShieldCheck,
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="px-6 lg:px-20 py-20 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <GlassCard className="h-full p-8 group transition-colors hover:bg-white/10 border-white/5" glowOnHover>
              <div className="mb-6 w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center group-hover:border-eidolon-teal/50 transition-colors">
                <feature.icon className="w-6 h-6 text-gray-300 group-hover:text-eidolon-teal transition-colors" />
              </div>
              <h3 className="text-lg font-display text-white mb-3 group-hover:text-eidolon-teal transition-colors">{feature.title}</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};