import React, { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="transformacao" className="w-full bg-[#2C1A12]/35 border-y border-[#C6A052]/10 px-6 md:px-20 py-28 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Editorial Content */}
        <div className="w-full lg:w-1/2 text-left flex flex-col items-start justify-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#C6A052] font-semibold mb-3">
            O Estudo do Contraste
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#F8F5F0] leading-tight mb-6">
            A sua melhor versão, <br />
            <span className="italic text-[#C6A052]">sem perder a sua essência.</span>
          </h2>
          <p className="text-base text-[#F8F5F0]/80 leading-relaxed font-sans max-w-[50ch]">
            O medo de resultados artificiais fica para trás quando a ciência encontra o senso estético apurado. Cada traço é respeitado, cada linha é sutilmente lapidada para realçar a sua beleza intrínseca com sofisticação.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C6A052]/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#C6A052]" />
            </div>
            <div className="text-xs uppercase tracking-widest text-[#F8F5F0]/65">
              Resultados Reais · Protocolos Personalizados
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Image Slider */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[550px] flex flex-col items-center">
            
            {/* Slider Container */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-[#C6A052]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] cursor-ew-resize select-none bg-[#150A05]"
            >
              {/* "Before" Image (Background) */}
              <img
                src="/before_face.png"
                alt="Resultado - Antes"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 left-6 z-30 bg-[#150A05]/80 backdrop-blur-sm border border-[#C6A052]/30 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-[#F8F5F0]/80">
                Antes
              </div>

              {/* "After" Image (Foreground, clipped) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{
                  clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
                }}
              >
                <img
                  src="/after_face.png"
                  alt="Resultado - Depois"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%', height: '100%' }}
                />
              </div>
              <div className="absolute top-4 right-6 z-30 bg-[#C6A052] rounded-full px-4 py-1.5 text-[10px] uppercase tracking-widest text-[#150A05] font-semibold shadow-md">
                Depois
              </div>

              {/* Vertical Dragger Divider line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[#C6A052] cursor-ew-resize z-40 shadow-[0_0_10px_rgba(198,160,82,0.6)]"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onTouchStart={() => setIsDragging(true)}
              >
                {/* Drag Handle Button overlay */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#150A05] border-2 border-[#C6A052] flex items-center justify-center shadow-lg cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
                  <div className="flex items-center gap-0.5">
                    <span className="w-1 h-3 bg-[#C6A052] rounded-full"></span>
                    <span className="w-1 h-3 bg-[#C6A052] rounded-full"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction Text below slider */}
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#F8F5F0]/40 mt-4">
              Arraste a linha central para visualizar a transformação
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}
