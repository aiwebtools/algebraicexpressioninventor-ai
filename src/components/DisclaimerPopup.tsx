import React, { useState, useEffect } from 'react';
import { Shield, Check, X } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const DisclaimerPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  // Check if the user has already agreed to the disclaimer
  useEffect(() => {
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    if (!hasAgreed) {
      // Show popup after a slight delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAgree = () => {
    // Save to localStorage so we don't show it again
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
    
    // Show a toast notification that fades after 2 seconds
    toast({
      title: "Welcome!",
      description: "Thanks for agreeing to our terms. Enjoy exploring Algebraic Expression Inventor GPT!",
      duration: 2000,
    });
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      {/* Modal */}
      <div className="relative w-full max-w-md animate-scale-in glass-card overflow-hidden">
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-highlight opacity-20 animate-pulse-soft" />
        
        <div className="relative p-6 md:p-8">
          {/* Close button */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 text-cyber-muted hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-7 w-7 text-cyber-primary animate-pulse-soft" />
            <h2 className="text-2xl font-bold font-['JetBrains_Mono'] text-gradient">Disclaimer</h2>
          </div>
          
          {/* Content */}
          <div className="space-y-4 my-6">
            <p className="text-cyber-text/90 font-['Inter'] leading-relaxed">
              Algebraic Expression Inventor GPT is provided for educational and creative purposes only. The mathematical expressions and solutions generated should be independently verified before use in any critical application.
            </p>
            <p className="text-cyber-text/90 font-['Inter'] leading-relaxed">
              By continuing to use this tool, you acknowledge that expressions may contain errors and agree to use the output responsibly.
            </p>
          </div>
          
          {/* Button */}
          <div className="flex justify-center mt-6">
            <button 
              onClick={handleAgree} 
              className="cyber-button-accent group relative overflow-hidden px-8 py-3 font-['JetBrains_Mono'] font-bold text-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-offset-2 focus:ring-offset-cyber-bg-dark"
            >
              {/* Button glow effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyber-accent to-cyber-highlight opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
              
              <span className="flex items-center gap-2">
                <Check className="h-5 w-5" /> 
                <span>I AGREE</span>
              </span>
              
              {/* Bottom highlight */}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyber-accent/70 to-cyber-highlight/70"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
