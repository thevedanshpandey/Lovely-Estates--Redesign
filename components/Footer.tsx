
import React from 'react';
import { COMPANY_INFO } from '../constants.ts';
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 lg:col-span-1">
             <a href="#" className="flex flex-col mb-10">
              <span className="font-serif text-3xl tracking-widest uppercase text-white">
                Lovely <span className="text-[#c5a059]">Estates</span>
              </span>
              <span className="text-[8px] tracking-[0.5em] uppercase text-gray-600 mt-2">Established 1998</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-light tracking-wide">
              Mumbai's most trusted real estate brokers, specializing in premium residential and commercial assets for 25+ years.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.5em] mb-10 font-bold opacity-80">Quick Links</h4>
            <ul className="space-y-5 text-gray-500 text-[10px] tracking-[0.3em] uppercase font-medium">
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#c5a059] transition-colors">Philosophy</a></li>
              <li><a href="#properties" className="hover:text-[#c5a059] transition-colors">Properties</a></li>
              <li><a href="#services" className="hover:text-[#c5a059] transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-[#c5a059] transition-colors">Connect</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.5em] mb-10 font-bold opacity-80">Contact Details</h4>
            <ul className="space-y-5 text-gray-500 text-xs tracking-wide font-light">
              <li className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-gray-700 mb-1">Phone</span>
                <span className="text-gray-400">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-gray-700 mb-1">Email</span>
                <span className="text-gray-400">{COMPANY_INFO.email}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[9px] uppercase tracking-widest text-gray-700 mb-1">Location</span>
                <span className="text-gray-400 leading-relaxed">{COMPANY_INFO.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] uppercase tracking-[0.5em] mb-10 font-bold opacity-80">Social Studio</h4>
            <div className="flex space-x-8 mb-10">
              <a href="#" className="text-gray-600 hover:text-[#c5a059] transition-colors"><Instagram size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-[#c5a059] transition-colors"><Linkedin size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-[#c5a059] transition-colors"><Facebook size={22} /></a>
              <a href="#" className="text-gray-600 hover:text-[#c5a059] transition-colors"><Twitter size={22} /></a>
            </div>
            <p className="text-[9px] text-gray-600 uppercase tracking-widest border-t border-white/5 pt-8">
              Expertise in Mumbai prime real estate since 1998.
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-700 uppercase tracking-[0.4em] font-medium">
          <p>&copy; {new Date().getFullYear()} Lovely Estates. Bespoke Real Estate Brokers.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
