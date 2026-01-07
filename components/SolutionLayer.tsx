import React from 'react';
import { GlassCard } from './UI/GlassCard';

export const SolutionLayer: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-display text-white mb-8">
          Eidolon is the <span className="text-eidolon-teal">conversion layer</span> that sits after the click.
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
          <div className="prose prose-invert">
            <p className="text-xl text-white font-light leading-relaxed">
              We don’t replace your agency. We install a white-label system that responds instantly, qualifies quickly, books appointments, follows up consistently, and updates the CRM.
            </p>
          </div>
          <div className="prose prose-invert">
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Infrastructure—not another shiny tool. We focus on execution quality, reliability, and partner trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};