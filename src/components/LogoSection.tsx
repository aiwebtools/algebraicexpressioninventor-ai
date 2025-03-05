
import React from 'react';
import { Hash, Code, Variable } from 'lucide-react';

interface LogoSectionProps {
  className?: string;
  compact?: boolean;
}

const LogoSection: React.FC<LogoSectionProps> = ({ className, compact = false }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className={`relative flex items-center justify-center ${compact ? 'w-12 h-12' : 'w-24 h-24'} mb-2`}>
        {/* Background circle with glow effect */}
        <div className="absolute inset-0 bg-cyber-bg-light rounded-full border border-cyber-primary/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]"></div>
        
        {/* Math icons layered for 3D effect */}
        <Hash className={`absolute text-cyber-primary/20 ${compact ? 'w-8 h-8' : 'w-16 h-16'} transform rotate-12 animate-pulse-soft`} />
        <Code className={`absolute text-cyber-highlight/40 ${compact ? 'w-7 h-7' : 'w-14 h-14'} transform -rotate-6 animate-float`} style={{ animationDelay: '0.5s' }} />
        <Variable className={`absolute text-white ${compact ? 'w-5 h-5' : 'w-10 h-10'} transform animate-glow`} />
      </div>
      
      {!compact && (
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-tight text-gradient mb-1">
            Algebraic Expression Inventor GPT
          </h2>
          <p className="text-xs text-cyber-muted">
            Presented by <span className="text-cyber-neon hover:underline">AiWebTools.Ai</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LogoSection;
