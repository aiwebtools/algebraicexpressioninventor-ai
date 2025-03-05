
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    // Initialize canvas size
    setCanvasSize();

    // Handle window resize
    window.addEventListener('resize', setCanvasSize);

    // Math symbols
    const symbols = ['∫', 'Σ', '∏', '√', 'π', 'θ', 'λ', '∞', '∂', '∇', '∃', 'α', 'β', 'γ', 'δ', '∈', '≡', '≥', '⊂', '⊆', '∩', '∪'];
    
    // Particles
    const particles: {
      x: number;
      y: number;
      symbol: string;
      size: number;
      speed: number;
      opacity: number;
      color: string;
    }[] = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(30, Math.floor(window.innerWidth / 40)); // Reduced particle count
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          size: Math.random() * 16 + 8, // Slightly smaller sizes
          speed: Math.random() * 0.3 + 0.1, // Slightly slower speed
          opacity: Math.random() * 0.4 + 0.1,
          color: `rgba(139, 92, 246, ${Math.random() * 0.2 + 0.1})` // Lower opacity
        });
      }
    };

    createParticles();

    let animationFrameId: number;

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update particles
      particles.forEach(particle => {
        ctx.font = `${particle.size}px JetBrains Mono`;
        ctx.fillStyle = particle.color;
        ctx.fillText(particle.symbol, particle.x, particle.y);
        
        // Move particles
        particle.y += particle.speed;
        
        // Reset particles when they go off screen
        if (particle.y > canvas.height) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-30"
    />
  );
};

export default AnimatedBackground;
