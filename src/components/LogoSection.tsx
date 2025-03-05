
import React from 'react';
import { Hash, Code, Variable } from 'lucide-react';

interface LogoSectionProps {
  className?: string;
}

const LogoSection: React.FC<LogoSectionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex items-center justify-center w-24 h-24 mb-4">
        {/* Background circle with glow effect */}
        <div className="absolute inset-0 bg-cyber-bg-light rounded-full border border-cyber-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]"></div>
        
        {/* Math icons layered for 3D effect */}
        <Hash className="absolute text-cyber-primary/20 w-16 h-16 transform rotate-12 animate-pulse-soft" />
        <Code className="absolute text-cyber-highlight/40 w-14 h-14 transform -rotate-6 animate-float" style={{ animationDelay: '0.5s' }} />
        <Variable className="absolute text-white w-10 h-10 transform animate-glow" />
      </div>
      
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight text-gradient mb-1">
          Algebraic Expression Inventor GPT
        </h2>
        <p className="text-xs text-cyber-muted">
          Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-neon hover:underline">AiWebTools.Ai</a>
        </p>
      </div>
    </div>
  );
};

export default LogoSection;
