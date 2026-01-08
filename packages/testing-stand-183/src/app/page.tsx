'use client';

import { useState } from 'react';

export default function Landing() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`relative h-screen w-full flex items-center justify-center transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500'
    }`}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-8 right-8 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 text-white font-medium shadow-lg"
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
          Merry Christmas
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light">
          Welcome to your new landing page
        </p>
      </div>
    </div>
  );
}



