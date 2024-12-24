import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Texture background */}
      <div 
        className="fixed inset-0 z-0 opacity-5 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("https://i.pinimg.com/1200x/96/53/95/965395dbac4162ad186f3e62056cb4b5.jpg")'
        }}
      />
      
      {/* Gradient background */}
      <div className="fixed inset-0 z-10 bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 opacity-90" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
}