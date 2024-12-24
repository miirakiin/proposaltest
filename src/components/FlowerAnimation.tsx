import React, { useEffect, useState, useRef } from 'react';

export function FlowerAnimation() {
  const [flowers, setFlowers] = useState<Array<{ id: number; left: number; duration: number }>>([]);
  const flowerIdCounter = useRef(0);

  useEffect(() => {
    const createFlower = () => {
      const id = flowerIdCounter.current++;
      const left = Math.random() * window.innerWidth;
      const duration = 6000 + Math.random() * 4000; // Between 6-10 seconds

      setFlowers(prev => [...prev, { id, left, duration }]);

      // Remove flower after animation completes
      setTimeout(() => {
        setFlowers(prev => prev.filter(flower => flower.id !== id));
      }, duration);
    };

    // Create initial flowers
    for (let i = 0; i < 10; i++) {
      createFlower();
    }

    // Create new flowers periodically
    const interval = setInterval(createFlower, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="flower"
          style={{
            left: `${flower.left}px`,
            animation: `flower-fall ${flower.duration}ms linear infinite`
          }}
        />
      ))}
    </>
  );
}