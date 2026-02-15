
import React from 'react';
import { TESTIMONIALS } from '../constants.ts';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold">Endorsements</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Voices of Trust</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="relative p-12 bg-[#111] border border-white/5">
              <Quote className="absolute top-10 right-10 text-[#c5a059]/10" size={120} />
              <div className="relative z-10">
                <p className="text-xl font-serif text-gray-300 italic mb-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 mr-6 overflow-hidden rounded-full grayscale">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-lg">{t.name}</h4>
                    <p className="text-[#c5a059] uppercase tracking-widest text-[10px]">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
