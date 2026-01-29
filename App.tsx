import React from 'react';
import { TIMELINE_DATA } from './constants';
import PeriodSection from './components/PeriodSection';

const App: React.FC = () => {
  
  // Calculate running index offsets for continuous alternation
  const getPeriodOffset = (periodIndex: number) => {
    let count = 0;
    for (let i = 0; i < periodIndex; i++) {
      count += TIMELINE_DATA[i].events.length;
    }
    return count;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-x-hidden selection:bg-[#f39c12] selection:text-[#1a1a2e]">
      
      {/* Header Section with Background Image */}
      <header className="relative w-full min-h-[500px] flex flex-col justify-center items-center text-center px-4 mb-20 shadow-2xl overflow-hidden rounded-b-[50px] border-b-4 border-[#f39c12]/50">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/ddpujsrsg/image/upload/v1769717136/Captura_de_pantalla_2026-01-29_210525_sf0zpz.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Overlay for Transparency/Readability - Only on this part */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1a1a2e]/50 to-[#1a1a2e] mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto pt-10">
          <h1 className="text-4xl md:text-7xl font-bold text-[#f39c12] mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,1)] font-serif tracking-tight animate-fade-in-up">
            EL SEGLE XIX A ESPANYA
          </h1>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#f39c12] to-transparent mx-auto mb-8 opacity-0 animate-zoom-in" style={{ animationDelay: '0.5s' }} />

          <p className="text-2xl md:text-3xl text-[#ecf0f1] mb-10 font-light drop-shadow-[0_2px_4px_rgba(0,0,0,1)] italic opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            De la Monarquia Absolutista a la Parlamentària
          </p>
          
          <div className="inline-block bg-[#000000]/40 backdrop-blur-md px-8 py-3 rounded-full border border-[#f39c12]/30 shadow-lg hover:bg-[#000000]/60 transition-colors duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-[#3498db] text-lg md:text-xl font-medium tracking-wide">
              Realitzat per: <span className="text-white font-bold ml-2">Thiara Nogales Aldana</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Timeline Container */}
      <main className="max-w-7xl mx-auto relative pb-20 px-4">
        
        {/* The Central Line - Left aligned on mobile, Centered on desktop */}
        <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#f39c12] via-[#e74c3c] to-[#3498db] shadow-[0_0_20px_rgba(243,156,18,0.5)] rounded-full z-0 origin-top animate-[scaleY_1.5s_ease-out]" />

        {/* Render Periods */}
        {TIMELINE_DATA.map((period, index) => (
          <PeriodSection 
            key={period.id} 
            period={period} 
            globalIndexOffset={getPeriodOffset(index)} 
          />
        ))}

        {/* Legend */}
        <div className="relative z-10 max-w-2xl mx-auto mt-20 p-8 bg-[rgba(52,152,219,0.1)] rounded-2xl border-2 border-[#3498db] text-center backdrop-blur-sm animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <h3 className="text-[#f39c12] text-2xl font-bold mb-6 uppercase tracking-wider">Llegenda</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="flex items-center justify-center">
              <span className="w-5 h-5 rounded-full bg-[#f39c12] border-2 border-[#1a1a2e] mr-3 shadow-[0_0_10px_#f39c12]"></span>
              <span className="text-lg text-gray-200">Esdeveniments regulars</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="w-6 h-6 rounded-full bg-[#e74c3c] border-2 border-[#1a1a2e] mr-3 shadow-[0_0_15px_#e74c3c] animate-pulse"></span>
              <span className="text-lg font-bold text-[#e74c3c]">Esdeveniments importants</span>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center text-gray-500 mt-12 mb-8 text-sm animate-fade-in-up" style={{ animationDelay: '2s' }}>
        <p>&copy; {new Date().getFullYear()} Història d'Espanya - Cronologia Interactiva</p>
      </footer>

    </div>
  );
};

export default App;