import React from 'react';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VoicePreview } from './components/VoicePreview';
import { Problem } from './components/Problem';
import { SolutionLayer } from './components/SolutionLayer';
import { HowItWorks } from './components/HowItWorks';
import { PartnerOffer } from './components/PartnerOffer';
import { SolutionsTracks } from './components/SolutionsTracks';
import { Pricing } from './components/Pricing';
import { AboutCompliance } from './components/AboutCompliance';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white selection:bg-eidolon-teal selection:text-eidolon-void font-sans">
      <Background />
      <Navbar />

      <main className="relative z-10 flex flex-col">
        <Hero />
        <VoicePreview />
        <Problem />
        <SolutionLayer />
        <HowItWorks />
        <PartnerOffer />
        <SolutionsTracks />
        <Pricing />
        <AboutCompliance />
      </main>

      <Footer />
    </div>
  );
};

export default App;