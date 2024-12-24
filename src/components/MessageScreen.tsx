import React from 'react';

interface MessageScreenProps {
  onContinue: () => void;
}

export function MessageScreen({ onContinue }: MessageScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-spartan">
          Eu quero, inicialmente, dizer pra <em className="font-bold">você</em> algumas coisas importantes que eu sinto por ti, {' '}
          <span className="animated-gradient-text font-semibold">minha loirinha</span>.
          Lê até o final cabeçuda, pq tem um bagui muito legal pra ti rsrs.
        </p>
        <button
          onClick={onContinue}
          className="continue-button px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg mx-auto transition-all hover:scale-105"
        >
          <span>Continua akiir rsrs</span>
        </button>
      </div>
    </div>
  );
}