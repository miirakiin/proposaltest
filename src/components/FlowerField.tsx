import React, { useEffect, useState } from 'react';

interface Flower {
  id: number;
  x: number;
  y: number;
  delay: number;
  type: string;
  scale: number;
}

export function FlowerField() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    const flowerTypes = ['🌸', '🌺', '🌹', '🌷'];
    const newFlowers: Flower[] = [];
    
    // Get the container dimensions
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    
    for (let angle = 0; angle < 360; angle += 10) {
      const radius = 150;
      const t = (angle * Math.PI) / 180;
      const x = radius * (16 * Math.pow(Math.sin(t), 3)) / 16;
      const y = radius * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 16;
      
      newFlowers.push({
        id: angle,
        x: x + centerX,
        y: y + centerY - 100, // Adjust vertical position
        delay: angle * 20,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        scale: 0.8 + Math.random() * 0.4
      });
    }
    
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="flower-field fixed inset-0 pointer-events-none">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="growing-flower absolute"
          style={{
            left: flower.x,
            top: flower.y,
            animation: `growAndFloat 2s ease-out ${flower.delay}ms forwards, float 3s ease-in-out ${flower.delay}ms infinite`,
            opacity: 0,
            transform: `scale(${flower.scale})`,
          }}
        >
          {flower.type}
        </div>
      ))}
    </div>
  );
}