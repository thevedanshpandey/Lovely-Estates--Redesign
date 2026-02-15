
import React from 'react';
import { Property } from '../types';
import { Maximize, BedSingle, Bath, MapPin } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden aspect-[16/10] mb-6">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1">
          <span className="text-[10px] uppercase tracking-widest text-white font-bold">{property.type}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <button className="bg-white text-black px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#c5a059] transition-colors">
            Explore Property
          </button>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-serif text-white group-hover:text-[#c5a059] transition-colors">{property.title}</h3>
          <span className="text-[#c5a059] font-serif text-lg">{property.price}</span>
        </div>
        
        <div className="flex items-center text-gray-500 text-xs">
          <MapPin size={12} className="mr-1" />
          <span className="uppercase tracking-widest">{property.location}</span>
        </div>

        <div className="flex items-center space-x-6 pt-4 border-t border-white/5">
          <div className="flex items-center space-x-2">
            <BedSingle size={14} className="text-gray-400" />
            <span className="text-xs text-gray-300">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath size={14} className="text-gray-400" />
            <span className="text-xs text-gray-300">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize size={14} className="text-gray-400" />
            <span className="text-xs text-gray-300">{property.sqft} SqFt</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
