
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants.ts';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle zoom effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-[slowZoom_30s_infinite_alternate]" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block">
          <span className="text-[#c5a059] uppercase tracking-[0.5em] text-[10px] lg:text-xs border-y border-[#c5a059]/30 py-3 px-6">
            Leading Real Estate Brokers in Mumbai
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
          Masters of <br />
          <span className="italic text-[#c5a059]">Mumbai Living.</span>
        </h1>

        <p className="text-gray-300 text-sm md:text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          {COMPANY_INFO.tagline}. Unmatched expertise in premium <span className="text-white font-medium">Residential</span> and <span className="text-white font-medium">Commercial</span> real estate for over two decades.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#properties" 
            className="group relative px-12 py-5 bg-[#c5a059] text-black font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all duration-500 w-full sm:w-auto shadow-2xl"
          >
            View Properties
            <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" size={16} />
          </a>
          <a 
            href="#contact" 
            className="px-12 py-5 border border-white/20 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 w-full sm:w-auto backdrop-blur-sm"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center animate-bounce">
        <span className="text-[9px] uppercase tracking-[0.4em] mb-3">Discover</span>
        <ChevronDown size={18} />
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
