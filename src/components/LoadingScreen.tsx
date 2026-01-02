import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-all duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <div className="relative mb-8">
          {/* Outer ring */}
          <div className="w-32 h-32 mx-auto relative">
            <svg 
              className="w-full h-full animate-spin-slow" 
              viewBox="0 0 100 100"
              style={{ animationDuration: '3s' }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(38 80% 55% / 0.3)"
                strokeWidth="2"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="hsl(38 80% 55%)"
                strokeWidth="2"
                strokeDasharray={`${progress * 2.83}, 283`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
                className="transition-all duration-300"
              />
            </svg>
            
            {/* Center logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center animate-pulse-glow">
                <span className="text-3xl font-serif font-bold text-foreground">M</span>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${10 + (i % 3) * 30}%`,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${2 + i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Foundation Name */}
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground mb-2 animate-fade-in-up">
          মুনজু ফাউন্ডেশন
        </h1>
        <p className="text-primary-foreground/70 text-sm mb-6 animate-fade-in-up delay-200">
          Munzu Foundation
        </p>

        {/* Progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-primary-foreground/60 text-xs mt-2">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </div>

        {/* Loading text */}
        <p className="text-primary-foreground/50 text-sm mt-4 animate-pulse">
          লোড হচ্ছে...
        </p>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
