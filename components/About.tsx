
import React from 'react';
import { COMPANY_INFO } from '../constants';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" 
                alt="Mumbai Luxury Real Estate" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Abstract Overlay Elements */}
            <div className="absolute -bottom-10 -right-10 w-72 h-80 bg-[#111] p-12 hidden md:flex flex-col justify-end border-l-[6px] border-[#c5a059] shadow-2xl">
              <span className="text-[#c5a059] text-6xl font-serif mb-3">25+</span>
              <p className="text-gray-400 uppercase tracking-[0.3em] text-[10px] leading-relaxed">Years of Proven Market Leadership</p>
            </div>
          </div>

          <div className="lg:pl-10">
            <SectionTitle 
              subtitle="Our Legacy" 
              title="A Quarter Century of Expertise in Mumbai's Property Landscape" 
            />
            <div className="space-y-8 text-gray-400 font-light leading-relaxed tracking-wide text-lg">
              <p className="text-white font-serif italic text-2xl border-l-2 border-[#c5a059] pl-6 mb-8">
                "We don't just find spaces; we secure your future in India's most dynamic city."
              </p>
              <p>
                {COMPANY_INFO.aboutShort}
              </p>
              <p>
                Whether you are looking for high-value <span className="text-white">Rentals</span>, strategic <span className="text-white">Leasing</span> for your business, or a seamless <span className="text-white">Relocation</span> to Mumbai, Lovely Estates provides the localized knowledge necessary to navigate this complex market.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-white/5 pt-10">
              <div>
                <h4 className="text-white font-serif text-2xl mb-2">Residential</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-loose">Pali Hill to Worli</p>
              </div>
              <div>
                <h4 className="text-white font-serif text-2xl mb-2">Commercial</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-loose">BKC & South Mumbai</p>
              </div>
              <div>
                <h4 className="text-white font-serif text-2xl mb-2">Relocation</h4>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest leading-loose">Corporate Experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
