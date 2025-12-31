import React from 'react';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VoiceDemo } from './components/VoiceDemo';
import { ProblemMap } from './components/ProblemMap';
import { SolutionBento } from './components/SolutionBento';
import { Pricing } from './components/Pricing';
import { RiskReversal } from './components/RiskReversal';
import { ContactTerminal } from './components/ContactTerminal';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-obsidian text-silver selection:bg-cyan/30 selection:text-white">
      <NoiseOverlay />
      
      <Header />
      
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <VoiceDemo />
        <ProblemMap />
        <SolutionBento />
        <Pricing />
        <RiskReversal />
        <ContactTerminal />
      </main>

      <footer className="border-t border-white/5 py-12 text-center text-sm text-slate/40">
        <p>© 2024 Eidolon Systems. All systems operational.</p>
      </footer>
    </div>
  );
}

export default App;