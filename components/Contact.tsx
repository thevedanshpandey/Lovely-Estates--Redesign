
import React from 'react';
import { COMPANY_INFO } from '../constants';
import SectionTitle from './SectionTitle';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <SectionTitle 
              subtitle="Get In Touch" 
              title="Speak with a Mumbai Property Specialist" 
            />
            
            <p className="text-gray-400 font-light leading-relaxed mb-16 max-w-lg text-lg">
              Our team is ready to assist with your residential, commercial, or relocation requirements in Mumbai. Reach out today for a confidential discussion.
            </p>

            <div className="space-y-12">
              <div className="flex items-start group">
                <div className="w-14 h-14 bg-[#111] flex items-center justify-center mr-8 border border-white/10 group-hover:border-[#c5a059] transition-colors shadow-xl">
                  <Phone size={22} className="text-[#c5a059]" />
                </div>
                <div>
                  <h5 className="text-white text-[10px] uppercase tracking-[0.3em] mb-2 font-bold opacity-60">Call Us</h5>
                  <p className="text-2xl font-serif text-gray-100">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-[#111] flex items-center justify-center mr-8 border border-white/10 group-hover:border-[#c5a059] transition-colors shadow-xl">
                  <Mail size={22} className="text-[#c5a059]" />
                </div>
                <div>
                  <h5 className="text-white text-[10px] uppercase tracking-[0.3em] mb-2 font-bold opacity-60">Email</h5>
                  <p className="text-2xl font-serif text-gray-100">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-14 h-14 bg-[#111] flex items-center justify-center mr-8 border border-white/10 group-hover:border-[#c5a059] transition-colors shadow-xl">
                  <MapPin size={22} className="text-[#c5a059]" />
                </div>
                <div>
                  <h5 className="text-white text-[10px] uppercase tracking-[0.3em] mb-2 font-bold opacity-60">Bandra Studio</h5>
                  <p className="text-gray-400 max-w-xs text-sm leading-relaxed tracking-wide">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-12 border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a059]/5 blur-[100px]"></div>
            <h3 className="text-4xl font-serif text-white mb-10">Direct Enquiry</h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 block group-focus-within:text-[#c5a059] transition-colors">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="group">
                  <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 block group-focus-within:text-[#c5a059] transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 block group-focus-within:text-[#c5a059] transition-colors">Interest</label>
                <select className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white text-sm focus:border-[#c5a059] outline-none transition-all appearance-none cursor-pointer">
                  <option>Residential Buying</option>
                  <option>Commercial Leasing</option>
                  <option>Rentals & Relocation</option>
                  <option>Investment Property</option>
                </select>
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-gray-500 mb-3 block group-focus-within:text-[#c5a059] transition-colors">Requirement Details</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your property search..."
                  className="w-full bg-[#0a0a0a] border border-white/10 p-5 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-700 resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-[#c5a059] text-black font-bold uppercase text-[11px] tracking-[0.3em] py-6 hover:bg-white transition-all duration-500 flex items-center justify-center group">
                Submit Enquiry
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
