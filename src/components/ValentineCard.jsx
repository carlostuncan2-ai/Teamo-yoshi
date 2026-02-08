import { useState, useCallback } from 'react';
import Celebration from './Celebration';

const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isNoButtonMoved, setIsNoButtonMoved] = useState(false);

  const handleYes = () => {
    setAccepted(true);
  };

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    setNoButtonPosition({ x: newX, y: newY });
    setIsNoButtonMoved(true);
  }, []);

  if (accepted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <Celebration />
        <div className="z-10 text-center animate-bounce-in">
          <div className="text-8xl md:text-9xl mb-8">🌸💖🌺</div>
          <h1 className="text-romantic text-6xl md:text-8xl text-gradient mb-4">
            ¡Yeiiii!
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/80 mt-6">
            ¡Te amo mi snoopy lover! 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
      <div className="max-w-2xl text-center z-10">
        <div className="mb-12 p-8 rounded-3xl bg-card/80 backdrop-blur-sm shadow-lg border border-border">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
            Mi niña hermosa, gracias por acompañarme todo este año, por aguantar mis tonterías de celos, por amarme tanto como lo has hecho hasta hoy y por estar junto a mí incondicionalmente. No soy el mejor, pero cada día me esforzaré por ser mejor para ti. Por esto y por más cosas mi amor, podrías hacerme el honor de...
          </p>
        </div>

        <div className="mb-12 animate-float">
          <h1 className="text-romantic text-4xl md:text-6xl lg:text-7xl text-gradient leading-tight">
            ¿Quieres ser mi San Valentín mi snoopy lover?
          </h1>
          <div className="text-5xl mt-6">💕</div>
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={handleYes}
            className="btn-valentine animate-pulse-glow text-xl md:text-2xl px-10 py-5"
          >
            ¡Sí! 💖
          </button>

          {!isNoButtonMoved && (
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              className="btn-no text-xl md:text-2xl px-10 py-5"
            >
              No 😢
            </button>
          )}
        </div>
      </div>

      {isNoButtonMoved && (
        <button
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          onClick={moveNoButton}
          className="btn-no text-xl px-10 py-5 fixed z-50 transition-all duration-200"
          style={{
            left: `${noButtonPosition.x}px`,
            top: `${noButtonPosition.y}px`,
          }}
        >
          No 😢
        </button>
      )}
    </div>
  );
};

export default ValentineCard;