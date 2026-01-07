import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GlassCard } from './UI/GlassCard';
import { CheckCircle2 } from 'lucide-react';

// 3D Tilt Card Wrapper Component
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const PartnerOffer: React.FC = () => {
  return (
    <section id="partner-offer" className="py-24 px-6 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eidolon-void via-eidolon-slate/10 to-eidolon-void pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display text-white mb-6">Proof first. Then scale.</h2>
          <p className="text-gray-400">Two-phase model designed for agency risk mitigation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Phase A */}
          <TiltCard className="h-full">
            <GlassCard className="p-10 border-eidolon-teal/30 bg-eidolon-teal/5 h-full" glowOnHover>
               <div className="mb-6 flex justify-between items-start">
                 <div>
                   <span className="text-eidolon-teal text-xs font-bold uppercase tracking-widest px-2 py-1 bg-eidolon-teal/10 rounded">Phase A</span>
                   <h3 className="text-2xl font-display text-white mt-4">7-Day Proof Sprint</h3>
                 </div>
                 <div className="text-right">
                    <div className="text-2xl font-bold text-white">$0</div>
                    <div className="text-xs text-gray-500">Service Fee</div>
                 </div>
               </div>
               <p className="text-gray-400 mb-8 font-light leading-relaxed">Run on one client to validate fit fast. We prove the execution before you commit to the partnership.</p>
               <ul className="space-y-4 mb-8">
                 {['24/7 After-hours & Overflow', 'No-answer SMS', 'Booking Prompt', 'CRM Outcomes', 'End-of-sprint KPI Snapshot'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                     <CheckCircle2 className="w-4 h-4 text-eidolon-teal shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
               <button className="w-full py-4 bg-eidolon-teal text-black font-bold uppercase tracking-widest rounded hover:bg-white transition-all shadow-[0_0_20px_-5px_#18D6C6]">
                 Request Proof Sprint
               </button>
               <p className="text-[10px] text-gray-500 text-center mt-4">* $500 refundable deposit to reserve capacity.</p>
            </GlassCard>
          </TiltCard>

          {/* Phase B */}
          <TiltCard className="h-full">
            <GlassCard className="p-10 border-white/10 h-full">
               <div className="mb-6">
                 <span className="text-gray-500 text-xs font-bold uppercase tracking-widest px-2 py-1 bg-white/5 rounded">Phase B</span>
                 <h3 className="text-2xl font-display text-white mt-4">Full Deployment</h3>
               </div>
               <p className="text-gray-400 mb-8 font-light leading-relaxed">Expand to the full conversion layer. Scripts, edge cases, full follow-up sequences, and ongoing monitoring.</p>
               <ul className="space-y-4 mb-8">
                 {['Full Follow-up Engine', 'Human Handoff Rules', 'Reporting Dashboard', 'Ongoing Optimization', 'White-label Support'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                     <CheckCircle2 className="w-4 h-4 text-gray-600 shrink-0" /> {item}
                   </li>
                 ))}
               </ul>
               <div className="w-full py-4 border border-white/10 text-center text-gray-500 text-sm uppercase tracking-widest rounded cursor-default select-none">
                 Unlocks after Sprint
               </div>
            </GlassCard>
          </TiltCard>

        </div>
        
        {/* Guarantees */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
           {[
             { title: "Go-Live Guarantee", desc: "If not live by Day 14, we work at no charge." },
             { title: "Sprint Credit", desc: "Activation deposit 100% credited to Month 1." },
             { title: "Execution SLA", desc: "Credits for missed reporting or tagging." }
           ].map((g, i) => (
             <motion.div 
              key={i} 
              className="p-6 rounded bg-white/5 border border-white/5 hover:border-white/20 transition-colors"
              whileHover={{ y: -5 }}
            >
               <h4 className="text-white font-display mb-2">{g.title}</h4>
               <p className="text-xs text-gray-500">{g.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};