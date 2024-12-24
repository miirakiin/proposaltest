import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { MovingButton } from './MovingButton';

interface ProposalScreenProps {
  onYes: () => void;
}

export function ProposalScreen({ onYes }: ProposalScreenProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="animate-float">
          <img
            src="https://media1.tenor.com/m/zGm5acSjHCIAAAAd/cat-begging.gif"
            alt="Cute Begging Cat"
            className="w-48 sm:w-64 lg:w-96 mx-auto rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6 sm:space-y-8 py-6 sm:py-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 flex items-center justify-center gap-2">
            <Heart className="text-pink-500 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
            <span>Querida <span className="font-dancing-script">Vitorya</span></span>
            <Heart className="text-pink-500 animate-pulse w-6 h-6 sm:w-8 sm:h-8" />
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-pink-700 font-medium">
            Aceita namorar comigo bb?
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <button
              onClick={onYes}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-bold text-base sm:text-lg transform hover:scale-110 transition-all duration-200 flex items-center gap-2 shadow-lg"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              SIM ACEITO PORRARR!
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <MovingButton />
          </div>
        </div>
      </div>
    </div>
  );
}