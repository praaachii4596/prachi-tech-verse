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
      x: x + (Math.random() - 0.5) * 40, // Wider spread for stardust
      y: y + (Math.random() - 0.5) * 40,
      size: Math.random() * 6 + 2, // Smaller, more dust-like particles
      life: 25,
      maxLife: 25,
    };
    
    setSparkles(prev => [...prev.slice(-25), newSparkle]); // Keep more particles for stardust effect
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      // Create stardust effect with more particles and different timing
      for (let i = 0; i < 15; i++) {
        setTimeout(() => createSparkle(e.clientX, e.clientY), i * 30);
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
          className="absolute bg-gradient-to-br from-primary to-neon-cyan rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.life / sparkle.maxLife * 0.8,
            transform: `translate(-50%, -50%) scale(${sparkle.life / sparkle.maxLife}) rotate(${sparkle.life * 10}deg)`,
            boxShadow: `0 0 ${sparkle.size * 2}px hsl(var(--primary)), 0 0 ${sparkle.size}px hsl(var(--neon-cyan))`,
          }}
        />
      ))}
    </div>
  );
};