import React from 'react';
import { Heart } from 'lucide-react';
import { FlowerAnimation } from './FlowerAnimation';

export function CelebrationScreen() {
  const title = "🎉 AEEE CARALHO VAMOO! 🎉";
  
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <FlowerAnimation />
      <div className="text-center space-y-6 relative z-10 p-4">
        <h1 className="celebration-title text-5xl font-bold text-pink-600 mb-8">
          {[...title].map((char, i) => (
            <span 
              key={i} 
              className="inline-block hover:scale-150 hover:rotate-12 transition-transform cursor-default"
              style={{ 
                animationDelay: `${i * 50}ms`,
                fontFamily: char === '🎉' ? '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' : 'inherit'
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="text-2xl text-pink-700 font-spartan mb-4">
          TE AMO DMSS! 💕
        </p>
        <p className="text-xl text-pink-700 font-spartan max-w-2xl mx-auto mb-8">
          Sei que ja tamo junto amor, mas eu queria fazer um pedido daora em programação pq eu POSSO blz te amo gostou ein me diz se gostou
        </p>
        <div className="flex justify-center gap-4">
          <Heart className="text-pink-500 animate-bounce w-12 h-12" />
          <Heart className="text-pink-500 animate-bounce w-12 h-12 delay-100" />
          <Heart className="text-pink-500 animate-bounce w-12 h-12 delay-200" />
        </div>
      </div>
    </div>
  );
}