
import React from 'react';
import SectionTitle from './SectionTitle';
import PropertyCard from './PropertyCard';
import { PROPERTIES } from '../constants';

const PropertyGrid: React.FC = () => {
  return (
    <section id="properties" className="py-32 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionTitle 
            subtitle="Curation" 
            title="Exceptional Properties for a Distinctive Life" 
          />
          <div className="flex space-x-4 mb-8">
            <button className="px-6 py-3 border border-[#c5a059] text-[#c5a059] text-[10px] uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all">
              All Properties
            </button>
            <button className="px-6 py-3 border border-white/10 text-white/50 text-[10px] uppercase tracking-widest hover:border-white transition-all">
              Private Inventory
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;
