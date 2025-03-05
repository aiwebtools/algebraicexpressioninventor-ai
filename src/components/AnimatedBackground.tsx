
import React, { useEffect, useRef, useState } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

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

    // Create particles - optimize for mobile
    const createParticles = () => {
      // Significantly reduce particles on mobile
      const particleCount = isMobile 
        ? Math.min(10, Math.floor(window.innerWidth / 80)) 
        : Math.min(25, Math.floor(window.innerWidth / 50));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          symbol: symbols[Math.floor(Math.random() * symbols.length)],
          size: isMobile ? Math.random() * 14 + 6 : Math.random() * 16 + 8, // Smaller on mobile
          speed: Math.random() * 0.2 + 0.1, // Slower for better performance
          opacity: Math.random() * 0.3 + 0.1, // Lower opacity
          color: `rgba(139, 92, 246, ${Math.random() * 0.15 + 0.05})` // Even lower opacity
        });
      }
    };

    createParticles();

    let animationFrameId: number;
    let lastTime = 0;
    const fps = isMobile ? 30 : 60; // Lower FPS on mobile
    const fpsInterval = 1000 / fps;

    // Animation with frame limiting
    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      // Calculate elapsed time
      const elapsed = timestamp - lastTime;
      
      // Only render if enough time has passed
      if (elapsed > fpsInterval) {
        // Remember the time
        lastTime = timestamp - (elapsed % fpsInterval);
        
        // Clear canvas
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
      }
    };

    animate(0);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`fixed top-0 left-0 w-full h-full -z-10 ${isMobile ? 'opacity-20' : 'opacity-30'}`}
    />
  );
};

export default AnimatedBackground;
