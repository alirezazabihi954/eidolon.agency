import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './UI/GlassCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-5xl font-display text-white mb-4">Agency-Friendly Pricing</h2>
        <p className="text-gray-400 text-lg font-light">Designed for margin and low risk.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* Proof Sprint - Hero Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative"
        >
           {/* Animated Border Gradient */}
           <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-eidolon-teal via-transparent to-eidolon-teal opacity-50 blur-sm animate-pulse" />
           
          <GlassCard className="p-10 border-eidolon-teal/50 bg-eidolon-teal/5 h-full relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <Sparkles className="w-6 h-6 text-eidolon-teal" />
            </div>

            <h3 className="text-2xl font-display text-white mb-2">Proof Sprint</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-eidolon-teal">$500</span>
              <span className="text-sm font-normal text-gray-500">deposit</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Credited to Month 1 if you proceed. Non-refundable if you cancel (capacity held).
            </p>
            
            <div className="w-full py-4 bg-eidolon-teal/10 border border-eidolon-teal/20 text-center text-eidolon-teal text-sm rounded-lg mb-8 font-bold tracking-wide">
              $0 Service Fee for 7 Days
            </div>

            <button className="w-full py-4 bg-eidolon-teal text-black font-bold uppercase tracking-widest rounded hover:bg-white transition-colors flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_#18D6C6]">
              Start Sprint <ArrowRight className="w-4 h-4" />
            </button>
          </GlassCard>
        </motion.div>

        {/* Wholesale Card */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GlassCard className="p-10 h-full flex flex-col">
            <h3 className="text-2xl font-display text-white mb-2">Ongoing Wholesale</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white">$450 - $750</span>
              <span className="text-sm font-normal text-gray-500">/ loc / mo</span>
            </div>
            
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Plus usage pass-through. Typical retail markup: $1,500 setup, $1,000/mo.
            </p>
            
            <div className="mt-auto">
              <div className="w-full py-4 bg-white/5 border border-white/10 text-center text-gray-300 text-sm rounded-lg">
                Volume Discounts Available
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};