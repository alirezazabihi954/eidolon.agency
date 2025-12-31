import React from 'react';
import { MessageSquare, PhoneCall, RefreshCw, BarChart } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const SolutionBento: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-20 bg-black/20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white md:text-5xl">The Eidolon Protocol</h2>
          <p className="mt-4 text-slate">What we deploy into your ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 h-auto md:h-[600px]">
          
          {/* Item 1: Large */}
          <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between group">
            <div className="h-12 w-12 rounded-lg bg-cyan/10 flex items-center justify-center border border-cyan/20 text-cyan mb-4">
              <MessageSquare size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Instant SMS Response</h3>
              <p className="text-slate mb-4">Under 30-second latency. Our AI parses intent and initiates the conversation immediately, filtering out tire-kickers before they reach your calendar.</p>
            </div>
            <div className="h-40 w-full rounded-lg bg-gradient-to-b from-white/5 to-transparent border border-white/5 relative overflow-hidden">
               {/* Decorative simulated chat bubbles */}
               <div className="absolute top-4 left-4 right-12 p-3 rounded-lg bg-white/10 text-xs text-white/60">Hi, I'm interested in the property...</div>
               <div className="absolute top-20 right-4 left-12 p-3 rounded-lg bg-cyan/10 text-xs text-cyan border border-cyan/20">I can help with that. Are you free now?</div>
            </div>
          </SpotlightCard>

          {/* Item 2: Medium */}
          <SpotlightCard className="md:col-span-2 md:row-span-1 p-8 flex items-center gap-6">
            <div className="h-12 w-12 flex-shrink-0 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
              <PhoneCall size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Rapid Call Attempts</h3>
              <p className="text-sm text-slate mt-1">Double-dial strategy to break through 'Do Not Disturb'. We call while the lead is still on your site.</p>
            </div>
          </SpotlightCard>

          {/* Item 3: Small */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 p-8">
            <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400 mb-4">
              <RefreshCw size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">CRM Sync</h3>
            <p className="text-xs text-slate mt-2">Native GoHighLevel integration. 2-way sync.</p>
          </SpotlightCard>

          {/* Item 4: Wide */}
          <SpotlightCard className="md:col-span-1 md:row-span-1 p-8">
            <div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-400 mb-4">
              <BarChart size={20} />
            </div>
            <h3 className="text-lg font-bold text-white">Live ROI</h3>
            <p className="text-xs text-slate mt-2">Real-time reporting dashboard.</p>
          </SpotlightCard>

        </div>
      </div>
    </section>
  );
};