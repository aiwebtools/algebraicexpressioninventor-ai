
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoSection from './LogoSection';
import { useMobile } from '../hooks/useMobile';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  // Handle scroll effect with throttling for better performance
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Clear the timeout if it exists
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Set a timeout to run the scroll handler
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 10);
      }, 10); // Short timeout for responsiveness but avoids running on every scroll event
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile, isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-cyber-bg-dark/90 backdrop-blur-md shadow-lg border-b border-cyber-border/50' 
          : 'py-3 md:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - completely hidden on smallest screens, only icon shown on small screens */}
        <div className="flex items-center space-x-2 z-20">
          <LogoSection className="flex" compact={isMobile} />
        </div>

        {/* Desktop Navigation - fix spacing and alignment */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a 
            href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button-primary animate-scale-in text-sm lg:text-base" 
            style={{ animationDelay: '0.1s' }}
          >
            CREATE MATH
          </a>
          <a 
            href="https://chatgpt.com/g/g-UcqXcLbzK-king-blueberry-gpt"
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button-accent animate-scale-in text-sm lg:text-base" 
            style={{ animationDelay: '0.15s' }}
          >
            KING BLUEBERRY
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button-secondary animate-scale-in text-sm lg:text-base" 
            style={{ animationDelay: '0.2s' }}
          >
            MORE AI TOOLS
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-cyber-text hover:text-cyber-primary transition-colors z-20"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - improved for performance */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-cyber-bg-dark/95 backdrop-blur-lg z-10" style={{ animation: 'fadeIn 0.15s ease-out' }}>
          <nav className="flex flex-col px-6 py-20 space-y-4 h-full items-center justify-center">
            <a 
              href="#features"
              className="cyber-button-secondary w-full text-center py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              LEARN MORE
            </a>
            <a 
              href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-primary w-full text-center py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              CREATE MATH
            </a>
            <a 
              href="https://chatgpt.com/g/g-UcqXcLbzK-king-blueberry-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-accent w-full text-center py-4"
              onClick={() => setIsMenuOpen(false)}
            >
              KING BLUEBERRY
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-secondary w-full text-center py-4"
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
