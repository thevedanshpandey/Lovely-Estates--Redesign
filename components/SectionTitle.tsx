
import React from 'react';

interface SectionTitleProps {
  subtitle: string;
  title: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ subtitle, title, light = false }) => {
  return (
    <div className="mb-16">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-[1px] bg-[#c5a059]"></div>
        <span className="text-[#c5a059] uppercase tracking-[0.4em] text-[10px] font-bold">
          {subtitle}
        </span>
      </div>
      <h2 className={`text-4xl md:text-5xl font-serif ${light ? 'text-black' : 'text-white'} leading-tight max-w-2xl`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
