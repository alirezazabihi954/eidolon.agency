import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-white/5 bg-black/40 backdrop-blur-sm py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Trusted By Text */}
        <span className="text-xs uppercase tracking-widest text-gray-600 whitespace-nowrap">
          Integrated With
        </span>

        {/* Logos (Text Placeholders for specific styles) */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {['HubSpot', 'Salesforce', 'Zoom', 'Stripe', 'Kajabi', 'Zapier'].map((brand) => (
             <span key={brand} className="text-lg font-display text-gray-300 hover:text-eidolon-teal cursor-default">
               {brand}
             </span>
           ))}
        </div>

        {/* Security Badges */}
        <div className="flex items-center gap-6 border-l border-white/10 pl-8 hidden lg:flex">
           <div className="flex items-center gap-2 text-gray-500">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] tracking-widest">SOC2 TYPE II</span>
           </div>
           <div className="flex items-center gap-2 text-gray-500">
              <Lock className="w-4 h-4" />
              <span className="text-[10px] tracking-widest">GDPR READY</span>
           </div>
        </div>

      </div>
      
      {/* Metrics Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-around gap-4 text-center">
         {[
           { label: "Hours Saved / Week", value: "+20h" },
           { label: "Response Speed", value: "3x" },
           { label: "FAQ Automation", value: "98%" },
         ].map((metric, idx) => (
           <motion.div 
             key={idx}
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: idx * 0.1 }}
             className="flex flex-col"
           >
             <span className="text-2xl lg:text-3xl font-display text-white">{metric.value}</span>
             <span className="text-xs text-eidolon-teal uppercase tracking-wider mt-1">{metric.label}</span>
           </motion.div>
         ))}
      </div>
    </section>
  );
};