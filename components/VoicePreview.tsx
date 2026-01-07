import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Phone, BarChart2 } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

export const VoicePreview: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="voice-preview" className="py-24 px-6 border-y border-white/5 bg-black/60 backdrop-blur-md relative overflow-hidden">
      {/* Background Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-eidolon-teal/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-12">
          
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-display text-white">Test the Voice <span className="text-eidolon-teal">(2 mins)</span>.</h2>
            <p className="text-gray-400 font-light text-lg">
              Hear exactly how it sounds. Booking-focused. Guardrails included. No "AI rambling".
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4">
               <div className="flex items-center gap-3 text-sm text-eidolon-teal border border-eidolon-teal/30 px-5 py-3 rounded-lg bg-eidolon-teal/5 shadow-neon-glow">
                 <Phone className="w-4 h-4 animate-pulse" />
                 <span className="font-mono tracking-wider">+1 (555) 010-2026</span>
               </div>
               <span className="text-xs text-gray-500 self-center font-mono uppercase">or listen live here &rarr;</span>
            </div>
          </div>

          <div className="w-full">
            <GlassCard className="p-8 flex items-center gap-6 bg-white/5 hover:bg-white/10 transition-colors border-white/10 shadow-2xl" glowOnHover>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="relative w-16 h-16 rounded-full bg-eidolon-teal flex items-center justify-center shrink-0 hover:scale-105 transition-all text-black shadow-[0_0_20px_#18D6C6]"
              >
                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                {isPlaying && (
                  <span className="absolute inset-0 rounded-full border-2 border-eidolon-teal animate-ping opacity-75" />
                )}
              </button>
              
              <div className="flex-grow space-y-3">
                <div className="flex justify-between text-xs text-gray-400 uppercase tracking-widest font-bold">
                  <span>Dental New Patient</span>
                  <span className="font-mono">{isPlaying ? "0:12" : "0:00"} / 0:45</span>
                </div>
                
                {/* Advanced Audio Viz */}
                <div className="h-12 flex items-center gap-[2px] overflow-hidden mask-linear-fade">
                   {Array.from({ length: 40 }).map((_, i) => (
                     <motion.div 
                        key={i}
                        className="w-1.5 rounded-full"
                        animate={{ 
                          height: isPlaying ? [8, Math.random() * 40 + 8, 8] : 4,
                          backgroundColor: isPlaying ? '#18D6C6' : 'rgba(255,255,255,0.1)',
                          opacity: isPlaying ? 1 : 0.3
                        }}
                        transition={{
                          duration: 0.3,
                          repeat: Infinity,
                          delay: i * 0.02,
                          ease: "easeInOut"
                        }}
                     />
                   ))}
                </div>
                
                <div className="text-[10px] text-gray-500 flex items-center gap-1">
                   <BarChart2 className="w-3 h-3" /> Real-time sentiment analysis active
                </div>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
};