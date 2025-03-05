
import React, { useEffect, useRef } from 'react';
import { Code, BrainCircuit, ArrowRight } from 'lucide-react';
import { useMobile } from '../hooks/useMobile';

const HeroSection: React.FC = () => {
  const mathElementsRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    if (!mathElementsRef.current) return;

    // Create floating math elements
    const mathSymbols = ['∫', 'Σ', '∏', '√', 'π', 'θ', 'λ', '∞', '∆', '∇'];
    const container = mathElementsRef.current;
    
    // Clear any existing elements
    container.innerHTML = '';
    
    // Create random math symbols - reduced count for better performance
    const symbolCount = isMobile 
      ? Math.min(5, Math.floor(window.innerWidth / 120))  // Even fewer on mobile
      : Math.min(10, Math.floor(window.innerWidth / 100));
      
    for (let i = 0; i < symbolCount; i++) {
      const symbol = document.createElement('div');
      const randomSymbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
      
      symbol.textContent = randomSymbol;
      symbol.className = 'absolute text-cyber-primary/20 text-4xl font-bold animate-float';
      
      // Random position
      symbol.style.left = `${Math.random() * 100}%`;
      symbol.style.top = `${Math.random() * 100}%`;
      
      // Random animation delay
      symbol.style.animationDelay = `${Math.random() * 5}s`;
      
      // Random opacity - lower on mobile
      symbol.style.opacity = `${Math.random() * (isMobile ? 0.3 : 0.5) + 0.1}`;
      
      container.appendChild(symbol);
    }
    
    // Cleanup function
    return () => {
      if (mathElementsRef.current) {
        mathElementsRef.current.innerHTML = '';
      }
    };
  }, [isMobile]);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden">
      {/* Floating math elements container - conditionally render fewer on mobile */}
      <div ref={mathElementsRef} className="absolute inset-0 z-0 overflow-hidden"></div>
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-cyber-primary/10 border border-cyber-primary/20 animate-slide-down">
              <span className="text-cyber-primary text-sm font-semibold">Algebraic Expression Inventor</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight leading-tight animate-slide-down" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient">Invent New Math</span> <br />
              <span className="text-cyber-text">to Solve Any Problem</span>
            </h1>
            
            <p className="text-cyber-muted text-base md:text-lg mb-8 max-w-xl animate-slide-down" style={{ animationDelay: '0.2s' }}>
              Create custom algebraic expressions and innovative mathematical concepts 
              to tackle real-world challenges with precision and creativity.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10 animate-slide-down" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cyber-button-primary group"
              >
                <span>CREATE MATH NOW</span>
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <a 
                href="#how-it-works" 
                className="cyber-button-secondary"
              >
                LEARN MORE
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 animate-slide-down" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center">
                <Code className="w-5 h-5 text-cyber-primary mr-2" />
                <span className="text-sm text-cyber-muted">Custom Functions</span>
              </div>
              <div className="flex items-center">
                <Code className="w-5 h-5 text-cyber-primary mr-2" />
                <span className="text-sm text-cyber-muted">Python Integration</span>
              </div>
              <div className="flex items-center">
                <BrainCircuit className="w-5 h-5 text-cyber-primary mr-2" />
                <span className="text-sm text-cyber-muted">AI Powered</span>
              </div>
            </div>
          </div>
          
          {/* Hero image - optimized for mobile */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-slide-up">
            <div className="relative group max-w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-primary to-cyber-highlight rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <a 
                href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative block"
              >
                <img 
                  src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-captivating-futuristic-advertisement-for-alg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true/qt=q:40" 
                  alt="Algebraic Expression Inventor GPT" 
                  className="rounded-xl w-full max-w-[500px] mx-auto object-cover border border-cyber-border/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                  width={500}
                  height={333}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
