import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export default function FeaturesBento() {
  // --- CARD 1: Galeria de Protocolos (Vertical Cycle) ---
  const protocols = [
    { title: 'Proporção Áurea', desc: 'Simetria e equilíbrio natural guiados pela ciência do senso estético.' },
    { title: 'Mapeamento Facial', desc: 'Estudo detalhado da dinâmica muscular e arquitetura óssea.' },
    { title: 'Arquitetura Labial', desc: 'Escultura labial focada em contornos refinados e volume elegante.' }
  ];
  
  const [activeProtocolIndex, setActiveProtocolIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProtocolIndex((prev) => (prev + 1) % protocols.length);
    }, 4500); // Slow, elegant cycling
    return () => clearInterval(interval);
  }, []);

  // --- CARD 2: Soft Hover Reveal (Radial Glow Track) ---
  const hoverCardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!hoverCardRef.current) return;
    const rect = hoverCardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="protocolos" className="w-full bg-[#150A05] px-6 md:px-20 py-28 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C6A052] font-semibold mb-3">
            O Método Luminis
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] leading-tight">
            A união perfeita de ciência, <br />
            <span className="italic text-[#C6A052]">arte e refinamento.</span>
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Harmonização Orofacial (Galeria de Protocolos) */}
          <div className="lg:col-span-2 relative min-h-[350px] md:min-h-[420px] rounded-[2.5rem] bg-[#2C1A12]/50 backdrop-blur-md border border-[#C6A052]/20 p-8 md:p-12 overflow-hidden flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A052] font-semibold flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" /> Protocolos Integrados
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#F8F5F0]">
                  Harmonização Orofacial
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#F8F5F0]/40">Protocol / H.O.F</span>
            </div>

            {/* Overlapping Cards Container */}
            <div className="relative w-full h-[180px] mt-8 overflow-hidden">
              {protocols.map((protocol, index) => {
                // Determine placement classes based on cycling index
                let positionClass = 'translate-y-12 opacity-0 pointer-events-none scale-95';
                let zIndex = 'z-0';
                
                if (index === activeProtocolIndex) {
                  // Active card is in focus, slightly scaled up
                  positionClass = 'translate-y-0 opacity-100 scale-100';
                  zIndex = 'z-20';
                } else if (index === (activeProtocolIndex - 1 + protocols.length) % protocols.length) {
                  // Previous card moves up/out
                  positionClass = '-translate-y-8 opacity-0 scale-95 pointer-events-none';
                  zIndex = 'z-10';
                } else {
                  // Next card is queued below
                  positionClass = 'translate-y-8 opacity-0 scale-95 pointer-events-none';
                  zIndex = 'z-10';
                }

                return (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full flex flex-col justify-center transition-all duration-[1500ms] cubic-bezier(0.25, 1, 0.5, 1) ${positionClass} ${zIndex}`}
                  >
                    <div className="bg-[#150A05]/80 border border-[#C6A052]/10 rounded-[1.5rem] p-6 flex flex-col justify-center">
                      <span className="text-xs text-[#C6A052] font-semibold mb-1">
                        0{index + 1} / {protocol.title}
                      </span>
                      <h4 className="font-serif text-lg md:text-xl text-[#F8F5F0] mb-2">
                        {protocol.title}
                      </h4>
                      <p className="text-sm text-[#F8F5F0]/70 max-w-xl">
                        {protocol.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 mt-4">
              {protocols.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 rounded-full transition-all duration-1000 ${
                    idx === activeProtocolIndex ? 'w-6 bg-[#C6A052]' : 'w-2 bg-[#C6A052]/20'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Card 2: Rejuvenescimento Natural (Soft Hover Reveal) */}
          <div
            ref={hoverCardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative min-h-[350px] md:min-h-[420px] rounded-[2.5rem] bg-[#2C1A12]/50 backdrop-blur-md border border-[#C6A052]/20 p-8 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-500 hover:border-[#C6A052]/40"
          >
            {/* Radial glow background reveal */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(circle 220px at ${coords.x}px ${coords.y}px, rgba(198, 160, 82, 0.08), transparent 80%), radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, rgba(44, 26, 18, 0.95), transparent)`
              }}
            />

            {/* Subtle Skin Texture Background revealed on hover */}
            <div
              className="absolute inset-0 opacity-5 mix-blend-overlay transition-opacity duration-700 pointer-events-none"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: isHovered ? 0.08 : 0.02
              }}
            />

            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C6A052] font-semibold flex items-center gap-2 mb-2">
                  <Compass className="w-3.5 h-3.5" /> Longevidade Facial
                </span>
                <h3 className="font-serif text-2xl text-[#F8F5F0]">
                  Rejuvenescimento Natural
                </h3>
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-sm text-[#F8F5F0]/80 leading-relaxed">
                Protocolos e tecnologias focados em prevenção e resultados elegantes, estimulando a vitalidade própria das suas células sem alterar sua fisionomia.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A052] font-semibold">
                <span>Passar o cursor para revelar</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#C6A052] animate-ping" />
              </div>
            </div>
          </div>

          {/* Card 3: A Experiência Luminis (Concierge Pulse) */}
          <div className="lg:col-span-3 relative rounded-[2.5rem] bg-[#2C1A12]/50 backdrop-blur-md border border-[#C6A052]/20 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between gap-6 transition-all duration-500 hover:border-[#C6A052]/40">
            <div className="flex items-center gap-6">
              {/* Calm pulsing gold dot */}
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-[#150A05] border border-[#C6A052]/30 flex items-center justify-center">
                <span className="absolute w-3 h-3 rounded-full bg-[#C6A052] animate-pulse" />
                <span className="absolute w-6 h-6 rounded-full border border-[#C6A052]/40 animate-ping opacity-35" />
              </div>
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-[#C6A052] font-semibold mb-1 block">
                  Experiência Exclusiva
                </span>
                <h3 className="font-serif text-2xl text-[#F8F5F0] mb-2">
                  A Experiência Luminis
                </h3>
                <p className="text-sm text-[#F8F5F0]/70 max-w-2xl">
                  Um momento de cuidado absoluto, desde os detalhes do menu da nossa recepção até o acompanhamento final personalizado. Concierge disponível para curadoria do seu protocolo.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 self-start md:self-center mt-2 md:mt-0">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C6A052]/10 border border-[#C6A052]/40 text-[#C6A052] hover:bg-[#C6A052] hover:text-[#150A05] text-xs font-semibold uppercase tracking-wider transition-all duration-300 active:scale-95"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
