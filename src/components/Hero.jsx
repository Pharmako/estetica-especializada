import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // GSAP context ensures proper cleanup on unmount
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Staggered fade-up for text elements
      tl.fromTo(
        '.animate-text',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.6, stagger: 0.3 }
      );

      // Subtle scale-up for background image container to create an organic opening feel
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 1.05 },
        { scale: 1, duration: 2.5, ease: 'power1.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex items-center justify-start overflow-hidden px-6 md:px-20 py-24"
    >
      {/* Background Image Container */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 w-full h-full z-0 transition-transform"
      >
        {/* Professional Portrait of Dra. Francyne Ferraz with Espresso Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#150A05]/95 via-[#150A05]/75 to-[#150A05]/30 md:from-[#150A05]/95 md:via-[#150A05]/65 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#150A05] via-[#150A05]/20 to-[#150A05]/40 z-10" />
        <img
          src="/danubia_hero.png"
          alt="Dra. Francyne Ferraz"
          className="w-full h-full object-cover object-center md:object-[right_25%]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-3xl flex flex-col items-start text-left mt-8 md:mt-0">
        {/* Eyebrow */}
        <div className="animate-text overflow-hidden mb-4">
          <span className="inline-block text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#C6A052] font-semibold">
            Dra. Francyne Ferraz · Clínica de Estética Premium
          </span>
        </div>

        {/* H1 Title */}
        <h1
          ref={titleRef}
          className="animate-text font-serif text-4xl md:text-6xl lg:text-7xl text-[#F8F5F0] leading-[1.1] mb-6 tracking-tight"
        >
          Rejuvenescimento facial <br />
          <span className="italic text-[#C6A052]">elegante e natural.</span>
        </h1>

        {/* Subtext */}
        <p
          ref={subtextRef}
          className="animate-text text-base md:text-lg text-[#F8F5F0]/85 leading-relaxed max-w-[50ch] mb-8 font-sans"
        >
          Sua beleza lapidada com a precisão, a segurança e a exclusividade que você merece.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="animate-text flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C6A052] text-[#150A05] font-semibold text-sm uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(198,160,82,0.4)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Falar com a Concierge
          </a>
          <a
            href="#protocolos"
            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#F8F5F0]/30 hover:border-[#C6A052] text-[#F8F5F0] hover:text-[#C6A052] font-semibold text-sm uppercase tracking-wider transition-all duration-300 active:scale-[0.98]"
          >
            Conhecer Protocolos
          </a>
        </div>
      </div>


    </section>
  );
}
