import React from 'react';

interface IntroScreenProps {
  onContinue: () => void;
}

export function IntroScreen({ onContinue }: IntroScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-pink-600 leading-relaxed font-bold">
          Pra garota que faz o meu coração bater mais rápido...
        </h1>
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