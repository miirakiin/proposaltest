import React from 'react';
import { Sparkles } from 'lucide-react';
import { FlowerField } from './FlowerField';

interface TransitionScreenProps {
  onContinue: () => void;
}

export function TransitionScreen({ onContinue }: TransitionScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <div className="flex-grow flex items-center justify-center w-full mb-8 sm:mb-12">
        <FlowerField />
      </div>

      <div className="text-center w-full mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-pink-600 leading-relaxed font-bold">
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
          Bom, agr q eu disse tudo, tenho uma parada pra te perguntar ein...
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
        </h2>
      </div>

      <div className="relative z-10 w-full text-center">
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