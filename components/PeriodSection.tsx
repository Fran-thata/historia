import React, { useEffect, useRef, useState } from 'react';
import { TimelinePeriod } from '../types';
import EventCard from './EventCard';

interface PeriodSectionProps {
  period: TimelinePeriod;
  globalIndexOffset: number;
}

const PeriodSection: React.FC<PeriodSectionProps> = ({ period, globalIndexOffset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-24 relative">
      {/* Sticky Period Header */}
      <div ref={headerRef} className="sticky top-4 z-30 flex justify-center mb-16">
        <div className={`
          bg-[#1a1a2e]/90 backdrop-blur-sm border-2 border-[#f39c12] 
          px-8 py-4 rounded-xl shadow-[0_0_15px_rgba(243,156,18,0.3)]
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `}>
          <h2 className="text-2xl md:text-3xl font-bold text-[#f39c12] text-center uppercase tracking-widest drop-shadow-lg">
            {period.title}
            <span className="block text-sm md:text-lg text-[#3498db] mt-1 normal-case font-serif italic">
              ({period.periodRange})
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col">
        {period.events.map((event, idx) => (
          <EventCard 
            key={`${period.id}-${idx}`} 
            event={event} 
            // We pass the accumulated index to maintain the Left/Right alternation continuously across periods
            index={globalIndexOffset + idx} 
          />
        ))}
      </div>
    </div>
  );
};

export default PeriodSection;