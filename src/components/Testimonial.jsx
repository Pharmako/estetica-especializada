import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
  const containerRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Majestic scroll-triggered fade-in with vertical slide
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%', // starts when top of container is 80% down the viewport
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#150A05] px-6 md:px-20 py-36 flex flex-col items-center justify-center overflow-hidden"
    >
      <div ref={testimonialRef} className="max-w-4xl text-center flex flex-col items-center">
        {/* Discretely glowing Gold Stars (5.0 rating) */}
        <div className="flex items-center gap-1.5 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-[#C6A052] text-[#C6A052] drop-shadow-[0_0_8px_rgba(198,160,82,0.4)]"
            />
          ))}
        </div>

        {/* Majestic Monumental Quote */}
        <blockquote className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#F8F5F0] italic leading-tight mb-8 max-w-3xl">
          “Sou outra mulher depois de passar por suas mãos divinas.”
        </blockquote>

        {/* Author info */}
        <cite className="not-italic text-xs md:text-sm uppercase tracking-[0.25em] text-[#C6A052] font-semibold">
          — Paciente da Clínica Luminis Face
        </cite>
      </div>
    </section>
  );
}
