import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-500 ease-out">
      <div
        className={`flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-500 ${
          scrolled
            ? 'bg-[#150A05]/65 backdrop-blur-lg border-[#C6A052]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-transparent'
        }`}
      >
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-[#2C1A12] border border-[#C6A052]/40 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#C6A052]" />
          </div>
          <span className="font-serif font-semibold tracking-wider text-sm md:text-base text-[#F8F5F0]">
            LUMINIS <span className="text-[#C6A052]">FACE</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-xs uppercase tracking-widest text-[#F8F5F0]/85 hover:text-[#C6A052] transition-colors duration-300"
          >
            Sobre
          </a>
          <a
            href="#protocolos"
            className="text-xs uppercase tracking-widest text-[#F8F5F0]/85 hover:text-[#C6A052] transition-colors duration-300"
          >
            Protocolos
          </a>
          <a
            href="#manifesto"
            className="text-xs uppercase tracking-widest text-[#F8F5F0]/85 hover:text-[#C6A052] transition-colors duration-300"
          >
            Filosofia
          </a>
          <a
            href="#transformacao"
            className="text-xs uppercase tracking-widest text-[#F8F5F0]/85 hover:text-[#C6A052] transition-colors duration-300"
          >
            Resultados
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden group px-5 py-2 rounded-full border border-[#C6A052]/60 bg-transparent text-[#F8F5F0] hover:text-[#150A05] text-xs font-semibold uppercase tracking-wider transition-colors duration-500"
        >
          <span className="absolute inset-0 w-full h-full bg-[#C6A052] origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></span>
          <span className="relative z-10 flex items-center gap-2">
            Agendar <Calendar className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </nav>
  );
}
