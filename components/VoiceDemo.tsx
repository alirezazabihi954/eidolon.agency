import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const VoiceDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Simulated bars for visualization
  const bars = Array.from({ length: 40 });

  return (
    <section id="voice" className="relative py-24 px-6 md:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">Hear the difference.</h2>
          <p className="mt-4 text-slate">Booking-focused AI agents, not idle chit-chat.</p>
        </div>

        <SpotlightCard className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="group flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan/20 to-cyan/5 border border-cyan/30 text-cyan shadow-[0_0_30px_rgba(0,255,255,0.15)] transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>

            <div className="flex w-full flex-col justify-center">
              <div className="mb-2 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-slate">
                <span>Agent: Sarah</span>
                <span>Status: {isPlaying ? 'Active' : 'Standby'}</span>
              </div>
              
              <div className="flex h-16 w-full items-center justify-between gap-1">
                {bars.map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      height: isPlaying 
                        ? [10, Math.random() * 50 + 10, 10] 
                        : 4
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                    className={`w-1 rounded-full ${isPlaying ? 'bg-cyan' : 'bg-white/10'}`}
                    style={{
                      height: isPlaying ? '20px' : '4px',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};