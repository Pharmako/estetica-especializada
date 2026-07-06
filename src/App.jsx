import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBento from './components/FeaturesBento';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-[#150A05] text-[#F8F5F0] overflow-x-hidden selection:bg-[#C6A052] selection:text-[#150A05]">
      {/* Global CSS Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* B. Hero Section */}
        <Hero />

        {/* C. Features Bento Grid Section */}
        <FeaturesBento />

        {/* D. Philosophy Section (Before/After Slider) */}
        <BeforeAfterSlider />

        {/* E. Protocol Section (Testimonial Monumental) */}
        <Testimonial />
      </main>

      {/* F. Conversion Footer Section */}
      <Footer />

      {/* Global Floating WhatsApp Conversion CTA (Botão de Pânico) */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#C6A052] text-[#150A05] hover:bg-[#F8F5F0] p-4 rounded-full shadow-[0_10px_30px_rgba(198,160,82,0.4)] group transition-all duration-300 hover:scale-110"
        aria-label="Falar com a Concierge"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#C6A052]/40 animate-ping opacity-75" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-6 h-6 fill-current relative z-10" />

        {/* Sliding label on hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs uppercase tracking-widest font-semibold font-sans transition-all duration-500 ease-out group-hover:max-w-[200px] group-hover:ml-3 relative z-10">
          Falar com a Concierge
        </span>
      </a>
    </div>
  );
}

export default App;
