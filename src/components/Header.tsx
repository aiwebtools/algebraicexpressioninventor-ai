
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoSection from './LogoSection';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-cyber-bg-dark/90 backdrop-blur-md shadow-lg border-b border-cyber-border/50' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <LogoSection className="hidden sm:flex" />
          <span className="text-xl font-bold sm:hidden text-cyber-text">AEI-GPT</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button-primary animate-scale-in" 
            style={{ animationDelay: '0.1s' }}
          >
            CREATE MATH
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button-secondary animate-scale-in" 
            style={{ animationDelay: '0.2s' }}
          >
            MORE AI TOOLS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-cyber-text hover:text-cyber-primary transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card animate-slide-down">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a 
              href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-primary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              CREATE MATH
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-secondary w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              MORE AI TOOLS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
