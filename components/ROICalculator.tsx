import React, { useState, useEffect } from 'react';
import { GlassCard } from './UI/GlassCard';
import { motion } from 'framer-motion';

export const ROICalculator: React.FC = () => {
  const [leads, setLeads] = useState(50);
  const [closeRate, setCloseRate] = useState(10);
  const [dealValue, setDealValue] = useState(2000);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    // Logic: Assume AI improves conversion by 20% and captures 20% more leads
    const currentRevenue = leads * (closeRate / 100) * dealValue;
    const aiRevenue = (leads * 1.3) * ((closeRate * 1.2) / 100) * dealValue;
    setRevenue(aiRevenue - currentRevenue);
  }, [leads, closeRate, dealValue]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-eidolon-teal/5 z-0" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display text-white">Calculate Your Twin's Value</h2>
          <p className="text-gray-400 mt-2">See how much revenue you're currently leaving on the table.</p>
        </div>

        <GlassCard className="p-8 lg:p-12 bg-black/80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Monthly Leads</span>
                  <span className="text-white">{leads}</span>
                </label>
                <input 
                  type="range" min="10" max="1000" value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-eidolon-teal"
                />
              </div>
              
              <div>
                <label className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Close Rate (%)</span>
                  <span className="text-white">{closeRate}%</span>
                </label>
                <input 
                  type="range" min="1" max="50" value={closeRate} 
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-eidolon-teal"
                />
              </div>

              <div>
                <label className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>Avg Deal Value ($)</span>
                  <span className="text-white">${dealValue}</span>
                </label>
                <input 
                  type="range" min="100" max="10000" step="100" value={dealValue} 
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-eidolon-teal"
                />
              </div>
            </div>

            {/* Result */}
            <div className="flex flex-col items-center justify-center text-center border-l border-white/10 pl-0 lg:pl-12">
              <span className="text-sm text-gray-400 uppercase tracking-widest mb-2">Potential Monthly Revenue Lift</span>
              <motion.div 
                key={revenue}
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl lg:text-6xl font-display text-transparent bg-clip-text bg-gradient-to-br from-eidolon-teal to-white font-bold"
              >
                +${Math.floor(revenue).toLocaleString()}
              </motion.div>
              <p className="text-xs text-gray-500 mt-4 max-w-xs">
                *Based on conservative estimates of 30% lead capture increase and 20% conversion improvement via instant speed-to-lead.
              </p>
              
              <button className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded text-sm uppercase tracking-widest transition-colors w-full">
                Get Full ROI Report
              </button>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
};