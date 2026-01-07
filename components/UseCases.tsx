import React from 'react';
import { GlassCard } from './UI/GlassCard';
import { ArrowRight } from 'lucide-react';

const niches = [
  {
    title: "For Coaches",
    headline: "Stop Selling, Start Coaching",
    desc: "Your Twin qualifies applicants, answers program FAQs, and books discovery calls only for qualified prospects.",
    img: "https://picsum.photos/400/300?grayscale&random=1"
  },
  {
    title: "For Course Creators",
    headline: "24/7 Student Support",
    desc: "Recover abandoned carts and guide students through curriculum questions without lifting a finger.",
    img: "https://picsum.photos/400/300?grayscale&random=2"
  },
  {
    title: "For Consultants",
    headline: "Clone Your Expertise",
    desc: "Let your Twin handle initial consultations and triage based on budget and timeline before you meet.",
    img: "https://picsum.photos/400/300?grayscale&random=3"
  }
];

export const UseCases: React.FC = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {niches.map((niche, idx) => (
          <GlassCard key={idx} className="group cursor-pointer min-h-[400px] flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src={niche.img} alt={niche.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-eidolon-void to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur border border-white/10 rounded-full text-xs text-eidolon-teal uppercase tracking-widest">
                {niche.title}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-display text-white mb-2">{niche.headline}</h3>
              <p className="text-gray-400 font-light text-sm mb-6 flex-grow">{niche.desc}</p>
              
              <div className="flex items-center text-eidolon-teal text-xs font-bold uppercase tracking-widest gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                See Demo <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};