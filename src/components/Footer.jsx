import React from 'react';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#2C1A12]/80 border-t border-[#C6A052]/20 rounded-t-[3.5rem] px-6 md:px-20 py-20 relative overflow-hidden flex flex-col items-center justify-between">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-[#C6A052]/5 blur-[80px] pointer-events-none rounded-full" />

      {/* Main Conversion CTA Container */}
      <div className="max-w-2xl text-center flex flex-col items-center z-10 mb-16">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#C6A052] font-semibold mb-4 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" /> Agenda de Atendimentos
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] leading-tight mb-8">
          Inicie o seu protocolo <br />
          <span className="italic text-[#C6A052]">personalizado de exclusividade.</span>
        </h2>
        
        {/* Pulsing Whatsapp Button */}
        <div className="relative group">
          {/* Subtle outer glowing/pulsing boundary */}
          <div className="absolute -inset-1.5 rounded-full bg-[#C6A052]/35 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
          
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-3 px-10 py-5 rounded-full bg-[#C6A052] hover:bg-[#F8F5F0] text-[#150A05] hover:text-[#150A05] font-semibold text-sm uppercase tracking-widest shadow-2xl transition-all duration-300 transform group-hover:scale-105 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            Falar com a Concierge
          </a>
        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="w-full max-w-7xl border-t border-[#C6A052]/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 z-10 text-[#F8F5F0]/50 text-xs">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="font-serif tracking-wider font-medium text-[#F8F5F0]">
            LUMINIS <span className="text-[#C6A052]">FACE</span>
          </span>
          <span className="text-[10px] text-[#F8F5F0]/30">| © 2026. All rights reserved.</span>
        </div>

        {/* Operational Status (Clinical telemetry style) */}
        <div className="flex items-center gap-3 bg-[#150A05]/40 border border-[#C6A052]/10 px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-wider text-[#C6A052]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A052] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6A052]"></span>
          </span>
          <span>Atendimentos: Disponíveis</span>
        </div>

      </div>

    </footer>
  );
}
