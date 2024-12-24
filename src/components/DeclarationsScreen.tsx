import React, { useState } from 'react';

interface DeclarationsScreenProps {
  onContinue: () => void;
}

interface Declaration {
  title: string;
  description: string;
  image: string;
}

export function DeclarationsScreen({ onContinue }: DeclarationsScreenProps) {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const declarations: Declaration[] = [
    {
      title: "Eu amo cada detalhe em você.",
      description: "Desde aquela pintinha que você não gosta (mas eu acho perfeita), o jeito que você sorri, a sua risada, tudo, até quando você se sente chata, mas, eu me amarro quando você implica cmg.",
      image: "https://i.ibb.co/xhFMZZx/Clipped-image-20241216-113024.png"
    },
    {
      title: "Sou muito grato por ti",
      description: "Por você me fazer me sentir tão especial, por sempre estar aqui por mim mesmo nos dias mais difíceis, e por iluminar minha vida de um jeito único, meu sol loiro.",
      image: "https://i.ibb.co/s6kDcrH/Clipped-image-20241216-113031.png"
    },
    {
      title: "Você é maravilhosa, preciosa, loirinha.",
      description: "Não importa o que você pense de si mesma as vezes, pra mim, você é a garota mais incrível e gatinha e fofolete do mundo inteiro.",
      image: "https://i.ibb.co/xhFMZZx/Clipped-image-20241216-113024.png"
    },
    {
      title: "Eu quero estar do seu lado",
      description: "Não só hoje ou amanhã, mas, por muitos e muitos dias e noites, afinal, eu quero construir algo especial contigo: nossa vida, juntos.",
      image: "https://i.ibb.co/s6kDcrH/Clipped-image-20241216-113031.png"
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {declarations.map((declaration, index) => (
            <div 
              key={index}
              className="flip-card-container"
              onClick={() => toggleCard(index)}
            >
              <div className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`}>
                <div className="flip-card-front">
                  <p className="text-lg sm:text-xl font-bold text-pink-600">
                    Clica pra revelar...
                  </p>
                  <p className="text-sm sm:text-base text-gray-500 mt-2 font-spartan font-bold">
                    A mensagem do meu coração hehe
                  </p>
                </div>
                
                <div className="flip-card-back">
                  <div className="notebook-paper">
                    <img 
                      src={declaration.image} 
                      alt="Decorative" 
                      className="declaration-image"
                    />
                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl font-playfair text-pink-600 font-bold italic">
                        {declaration.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-spartan">
                        {declaration.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onContinue}
            className="continue-button px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg mx-auto transition-all hover:scale-105"
          >
            <span>Continua akiir rsrs</span>
          </button>
        </div>
      </div>
    </div>
  );
}