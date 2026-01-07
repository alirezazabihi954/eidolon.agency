import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, FileText, ArrowRight } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

export const SolutionsTracks: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-6 relative">
       {/* Background accent */}
       <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-10 h-full group transition-all duration-500 hover:border-eidolon-teal/30">
            <div className="absolute inset-0 bg-gradient-to-br from-eidolon-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-eidolon-teal/10 flex items-center justify-center text-eidolon-teal border border-eidolon-teal/20 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(24,214,198,0.3)] transition-all duration-300">
                <PhoneCall className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-display text-white group-hover:text-eidolon-teal transition-colors">Call-Heavy Campaigns</h3>
              
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                For LSAs and call-only campaigns, missed calls burn budget. Eidolon handles after-hours + overflow, qualifies quickly, and books appointments.
              </p>
              
              <div className="pt-6 border-t border-white/5">
                <div className="text-sm text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-eidolon-teal animate-pulse" />
                  Best for: After-hours + Overflow coverage.
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <GlassCard className="p-10 h-full group transition-all duration-500 hover:border-indigo-400/30">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-300">
                <FileText className="w-8 h-8" />
              </div>
              
              <h3 className="text-3xl font-display text-white group-hover:text-indigo-300 transition-colors">Form-Heavy Leads</h3>
              
              <p className="text-gray-400 font-light leading-relaxed text-lg">
                Most form leads cool off fast. Eidolon triggers instant SMS, rapid call attempts, qualification, and structured follow-up sequences.
              </p>
              
              <div className="pt-6 border-t border-white/5">
                <div className="text-sm text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                  Best for: SMS-first + Rapid call attempts.
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};