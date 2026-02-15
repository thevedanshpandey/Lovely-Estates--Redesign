
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <span className={`font-serif text-2xl lg:text-3xl tracking-widest uppercase transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-white'}`}>
            Lovely <span className="text-[#c5a059]">Estates</span>
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase text-gray-500 mt-0.5 group-hover:text-[#c5a059] transition-colors">Mumbai Real Estate</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-[#c5a059] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="flex items-center space-x-2 bg-[#c5a059] px-6 py-2.5 rounded-sm hover:bg-white transition-all group shadow-2xl"
          >
            <Phone size={14} className="text-black" />
            <span className="text-black text-[10px] font-bold uppercase tracking-widest">Connect</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-500 pt-24 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-8 p-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-serif text-white hover:text-[#c5a059]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="w-full h-[1px] bg-white/10"></div>
          <div className="text-center space-y-4">
            <p className="text-gray-400 uppercase text-[10px] tracking-widest">Inquiries</p>
            <p className="text-xl font-serif text-[#c5a059]">{COMPANY_INFO.phone}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
