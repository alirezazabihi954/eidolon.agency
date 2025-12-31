import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { cn } from '../utils';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprint' | 'full'>('sprint');

  const Card = ({ type, price, title, features, highlight }: any) => (
    <SpotlightCard className={cn(
      "flex flex-col p-8 h-full transition-all duration-300",
      highlight ? "border-cyan/30 bg-cyan/5" : "border-white/10"
    )} spotlightColor={highlight ? "rgba(0, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-slate uppercase tracking-widest">{type}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-4xl font-bold text-white">{price}</span>
        </div>
        <h4 className="mt-2 text-xl font-bold text-white">{title}</h4>
      </div>
      
      <ul className="mb-8 space-y-4 flex-1">
        {features.map((feat: string, i: number) => (
          <li key={i} className="flex items-start">
            <Check size={18} className="mr-3 mt-1 text-cyan" />
            <span className="text-sm text-slate">{feat}</span>
          </li>
        ))}
      </ul>

      <button className={cn(
        "w-full rounded-lg py-3 font-bold transition-all active:scale-95",
        highlight ? "bg-cyan text-obsidian hover:bg-cyan/90" : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      )}>
        {highlight ? "START PROOF SPRINT" : "INQUIRE WHOLESALE"}
      </button>
    </SpotlightCard>
  );

  const sprintFeatures = [
    "7-Day Proof of Concept",
    "Full SMS & Voice Infrastructure",
    "CRM Integration (GHL)",
    "Custom KPI Dashboard",
    "$500 Credited back on Full Rollout"
  ];

  const fullFeatures = [
    "Unlimited Sub-accounts",
    "White-label Dashboard",
    "Priority Support SLA",
    "Custom Voice Training",
    "Volume Discounts"
  ];

  return (
    <section id="offer" className="py-24 px-6 md:px-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-5xl">Engagement Models</h2>

        {/* Mobile Tabs */}
        <div className="mb-8 flex justify-center md:hidden">
          <div className="flex rounded-full border border-white/10 bg-charcoal p-1">
            <button
              onClick={() => setActiveTab('sprint')}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === 'sprint' ? "bg-cyan text-obsidian" : "text-slate"
              )}
            >
              Phase A
            </button>
            <button
              onClick={() => setActiveTab('full')}
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                activeTab === 'full' ? "bg-white/10 text-white" : "text-slate"
              )}
            >
              Phase B
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="hidden grid-cols-2 gap-8 md:grid">
          <Card 
            type="Phase A" 
            price="$500 Deposit" 
            title="Proof Sprint" 
            features={sprintFeatures} 
            highlight={true} 
          />
          <Card 
            type="Phase B" 
            price="Custom" 
            title="Agency Wholesale" 
            features={fullFeatures} 
            highlight={false} 
          />
        </div>

        {/* Mobile Swipe View */}
        <div className="md:hidden">
          {activeTab === 'sprint' ? (
             <Card 
             type="Phase A" 
             price="$500 Deposit" 
             title="Proof Sprint" 
             features={sprintFeatures} 
             highlight={true} 
           />
          ) : (
            <Card 
            type="Phase B" 
            price="Custom" 
            title="Agency Wholesale" 
            features={fullFeatures} 
            highlight={false} 
          />
          )}
        </div>

      </div>
    </section>
  );
};