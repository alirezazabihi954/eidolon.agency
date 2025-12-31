import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const RiskReversal: React.FC = () => {
  return (
    <section className="py-12 px-6 md:px-20">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-white/10 bg-charcoal/80 p-6 backdrop-blur-md md:p-10">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Risk Protocol: 0%</h3>
                <p className="text-sm text-slate">We assume the risk, you get the credit.</p>
              </div>
            </div>

            <div className="h-px w-full bg-white/10 md:h-12 md:w-px"></div>

            <div className="flex flex-1 justify-around w-full gap-4 md:gap-8">
               <div className="flex flex-col items-center">
                 <span className="mb-2 text-green-400">✓</span>
                 <span className="text-xs font-mono uppercase text-slate">Go-Live Guarantee</span>
               </div>
               <div className="flex flex-col items-center">
                 <span className="mb-2 text-green-400">✓</span>
                 <span className="text-xs font-mono uppercase text-slate">Sprint Credit</span>
               </div>
               <div className="flex flex-col items-center">
                 <span className="mb-2 text-green-400">✓</span>
                 <span className="text-xs font-mono uppercase text-slate">Execution SLA</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};