import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactTerminal: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    volume: 500,
    crm: ''
  });

  return (
    <section id="contact" className="py-24 px-6 md:px-20">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0c] shadow-2xl">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-red-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/50"></div>
            <div className="ml-4 font-mono text-xs text-slate">usr/bin/eidolon-init</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-10 font-mono text-sm">
            <div className="mb-6 text-slate">
              <span className="text-cyan">➜</span> <span className="text-green-400">~</span> Initialize deployment sequence...
              <br />
              <span className="text-slate/50">Loading modules... Done.</span>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="group">
                <label className="mb-2 block text-xs uppercase tracking-widest text-slate/60">Agency Name</label>
                <div className="flex items-center border-b border-white/10 pb-2 transition-colors group-focus-within:border-cyan">
                  <span className="mr-2 text-cyan">❯</span>
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-silver outline-none placeholder:text-slate/20"
                    placeholder="Enter agency name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="group">
                <label className="mb-2 block text-xs uppercase tracking-widest text-slate/60">Website URL</label>
                <div className="flex items-center border-b border-white/10 pb-2 transition-colors group-focus-within:border-cyan">
                  <span className="mr-2 text-cyan">❯</span>
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-silver outline-none placeholder:text-slate/20"
                    placeholder="https://"
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                  />
                </div>
              </div>

              <div className="group">
                 <label className="mb-4 block text-xs uppercase tracking-widest text-slate/60">
                   Monthly Lead Volume: <span className="text-cyan">{formData.volume}</span>
                 </label>
                 <input 
                   type="range" 
                   min="0" 
                   max="5000" 
                   step="100"
                   value={formData.volume}
                   onChange={(e) => setFormData({...formData, volume: Number(e.target.value)})}
                   className="h-2 w-full appearance-none rounded-lg bg-white/10 accent-cyan"
                 />
              </div>

              <div className="group">
                <label className="mb-2 block text-xs uppercase tracking-widest text-slate/60">CRM Stack</label>
                <div className="flex items-center border-b border-white/10 pb-2 transition-colors group-focus-within:border-cyan">
                  <span className="mr-2 text-cyan">❯</span>
                  <input 
                    type="text" 
                    className="w-full bg-transparent text-silver outline-none placeholder:text-slate/20"
                    placeholder="e.g. GoHighLevel, Salesforce"
                    value={formData.crm}
                    onChange={(e) => setFormData({...formData, crm: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button 
                  className="relative w-full overflow-hidden rounded bg-cyan py-4 font-bold text-obsidian transition-all hover:bg-white hover:text-obsidian active:scale-[0.99]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    EXECUTE_REQUEST <span className="animate-pulse">_</span>
                  </span>
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};