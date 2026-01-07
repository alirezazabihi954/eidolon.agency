import React from 'react';

export const AboutCompliance: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
        
        <div>
          <h3 className="text-xl font-display text-white mb-4">Calm systems beat loud promises.</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Eidolon Agency builds white-label conversion operations for PPC agencies. We focus on execution quality, reliability, and partner trust—not "10x revenue" hype.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            Principles: Execution &gt; Hype. Measurable KPIs &gt; Claims.
          </p>
        </div>

        <div>
           <h3 className="text-xl font-display text-white mb-4">Compliance Matters.</h3>
           <p className="text-sm text-gray-400 leading-relaxed mb-4">
             We support opt-in/opt-out patterns (including "STOP"), TCPA-aware workflows, and call recording disclosures where applicable.
           </p>
           <p className="text-xs text-gray-500">
             *Not legal advice. We align with your client policies and best practices.
           </p>
        </div>

      </div>
    </section>
  );
};