import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-display tracking-widest text-white font-bold">EIDOLON AGENCY</h2>
          <p className="text-xs text-gray-500 mt-2 font-light max-w-xs">
            White-label. Done-for-you. Booking-focused. Execution guarantees—never revenue guarantees.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs text-gray-500 font-light">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
          <a href="#" className="hover:text-white transition-colors">Status</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 text-center text-[10px] text-gray-700 uppercase tracking-widest">
        © 2024 Eidolon Agency
      </div>
    </footer>
  );
};