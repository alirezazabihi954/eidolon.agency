import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './UI/GlassCard';
import { UserX, Clock, BatteryWarning } from 'lucide-react';

export const Bottleneck: React.FC = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-display text-white mb-6"
          >
            You Are The <br />
            <span className="text-red-500/80 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">Bottleneck.</span>
          </motion.h2>
          
          <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed">
            Every question, every lead, every booking waits for you. Leads go cold while you sleep. Repeating the same answers drains your creative energy.
          </p>

          <div className="space-y-4">
            {[
              { icon: UserX, text: "Leads vanish when response time > 5 mins" },
              { icon: BatteryWarning, text: "Founder burnout stops growth instantly" },
              { icon: Clock, text: "Manual follow-ups eat 15+ hours/week" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-gray-300">
                <div className="p-2 rounded bg-white/5 border border-white/10">
                  <item.icon className="w-5 h-5 text-gray-400" />
                </div>
                <span className="font-light">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Metaphor */}
        <div className="order-1 lg:order-2 relative h-[500px]">
           <GlassCard className="h-full w-full bg-gradient-to-br from-red-900/10 to-black border-red-500/20 flex flex-col items-center justify-center text-center p-8">
              <div className="relative mb-8">
                 <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center bg-black relative z-10">
                   <span className="text-4xl">🤯</span>
                 </div>
                 {/* Inbound Arrows */}
                 {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                   <motion.div 
                     key={deg}
                     className="absolute top-1/2 left-1/2 w-32 h-[1px] bg-red-500 origin-left"
                     style={{ rotate: deg, x: 60 }}
                     initial={{ scaleX: 0, opacity: 0 }}
                     animate={{ scaleX: 1, opacity: 1 }}
                     transition={{ duration: 1, delay: Math.random(), repeat: Infinity, repeatType: 'reverse' }}
                   />
                 ))}
              </div>
              <h3 className="text-xl font-display text-white">System Overload</h3>
              <p className="text-sm text-gray-500 mt-2">1 Human vs. Infinite Demand</p>
           </GlassCard>
        </div>

      </div>
    </section>
  );
};