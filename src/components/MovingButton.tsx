import React, { useState } from 'react';

export function MovingButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [attempts, setAttempts] = useState(0);
  const [visible, setVisible] = useState(true);

  const moveButton = () => {
    if (attempts >= 5) {
      setVisible(false);
      return;
    }

    const newX = Math.random() * (window.innerWidth - 100);
    const newY = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
    setAttempts(prev => prev + 1);
  };

  if (!visible) return null;

  return (
    <button
      onClick={moveButton}
      style={{
        position: attempts > 0 ? 'fixed' : 'relative',
        left: attempts > 0 ? position.x : 'auto',
        top: attempts > 0 ? position.y : 'auto',
        transition: 'all 0.2s ease-out'
      }}
      className="px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full font-bold text-lg"
    >
      nãokk
    </button>
  );
}