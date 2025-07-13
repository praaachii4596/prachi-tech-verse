import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
  maxLife: number;
}

export const MagicalCursor = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const createSparkle = (x: number, y: number) => {
    const newSparkle: Sparkle = {
      id: Date.now() + Math.random(),
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      size: Math.random() * 8 + 4,
      life: 30,
      maxLife: 30,
    };
    
    setSparkles(prev => [...prev.slice(-15), newSparkle]);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      for (let i = 0; i < 8; i++) {
        setTimeout(() => createSparkle(e.clientX, e.clientY), i * 50);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => 
        prev.map(sparkle => ({ ...sparkle, life: sparkle.life - 1 }))
            .filter(sparkle => sparkle.life > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Cursor Glow */}
      <div 
        className="absolute w-8 h-8 bg-primary/20 rounded-full blur-xl transition-all duration-300 ease-out"
        style={{
          left: mousePos.x - 16,
          top: mousePos.y - 16,
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute bg-primary rounded-full animate-pulse"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.life / sparkle.maxLife,
            transform: `translate(-50%, -50%) scale(${sparkle.life / sparkle.maxLife})`,
            boxShadow: `0 0 ${sparkle.size}px hsl(var(--primary))`,
          }}
        />
      ))}
    </div>
  );
};