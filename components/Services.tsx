
import React from 'react';
import { SERVICES } from '../constants';
import SectionTitle from './SectionTitle';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          subtitle="Expertise" 
          title="Bespoke Real Estate Services Tailored to Your Vision" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className="p-10 border border-white/5 bg-[#0a0a0a] hover:border-[#c5a059]/50 transition-all duration-500 group"
              >
                <div className="mb-8 inline-block p-4 bg-[#151515] group-hover:bg-[#c5a059] transition-colors duration-500">
                  <IconComponent className="text-[#c5a059] group-hover:text-black transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] cursor-pointer hover:text-white transition-colors">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
