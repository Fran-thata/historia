import React, { useEffect, useRef, useState } from 'react';
import { TimelineEvent } from '../types';

interface EventCardProps {
  event: TimelineEvent;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  const isRight = index % 2 === 0;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`flex w-full mb-12 relative items-center justify-between ${isRight ? 'flex-row' : 'flex-row-reverse'}`}
    >
      
      {/* Empty space for the opposite side */}
      <div className="hidden md:block w-5/12" />

      {/* Center Marker */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <div 
          className={`
            rounded-full border-4 border-[#1e204a] shadow-[0_0_10px_rgba(59,130,246,0.5)]
            ${event.isImportant 
              ? 'w-6 h-6 bg-[#e74c3c]' 
              : 'w-4 h-4 bg-[#f39c12]'
            }
            ${isVisible ? 'animate-zoom-in' : 'opacity-0'}
          `}
          style={{ animationDelay: '0.2s' }}
        />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 px-4 ${isRight ? 'md:text-left' : 'md:text-right'}`}>
        <div 
          className={`
            relative overflow-hidden
            p-5 rounded-lg border-2 
            bg-[#1e204a] border-[#3b82f6]
            shadow-lg
            transition-transform duration-300 hover:-translate-y-1
            ${isVisible ? (isRight ? 'animate-fade-in-right' : 'animate-fade-in-left') : 'opacity-0'}
          `}
        >
          <div 
            className="text-xl font-bold mb-1 text-[#f59e0b] font-serif"
          >
            {event.date}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight font-serif">
            {event.title}
          </h3>
          <p className="text-gray-300 text-base font-serif leading-relaxed">
            {event.description}
          </p>

          {/* Optional Image "unida al cuadrado" (attached to the square) */}
          {event.imageUrl && (
            <div className="mt-4 rounded-md overflow-hidden border border-[#3b82f6]/50">
              <img 
                src={event.imageUrl} 
                alt={event.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;