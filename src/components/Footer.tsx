
import React from 'react';
import { Heart, Phone, Mail, ExternalLink, MessageCircleQuestion } from 'lucide-react';
import LogoSection from './LogoSection';

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 pb-8 bg-cyber-bg-dark border-t border-cyber-border relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-matrix-pattern opacity-5 animate-matrix-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Footer top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and info */}
          <div className="lg:col-span-1">
            <LogoSection className="mb-6" />
            <p className="text-cyber-muted mb-6">
              Create custom algebraic expressions to solve your unique problems with our innovative AI tool.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button-primary text-sm px-4 py-2"
              >
                CREATE MATH
              </a>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyber-button-secondary text-sm px-4 py-2"
              >
                MORE AI TOOLS
              </a>
            </div>
          </div>
          
          {/* Links section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-cyber-text">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-cyber-muted hover:text-cyber-primary transition-colors link-underline">Features</a>
              </li>
              <li>
                <a href="#faq" className="text-cyber-muted hover:text-cyber-primary transition-colors link-underline">FAQ</a>
              </li>
              <li>
                <a 
                  href="https://chatgpt.com/g/g-UcqXcLbzK-king-blueberry-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyber-muted hover:text-cyber-primary transition-colors link-underline flex items-center"
                >
                  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full mr-2">NEW</span>
                  King Blueberry Version
                </a>
              </li>
              <li>
                <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-cyber-muted hover:text-cyber-primary transition-colors link-underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="text-cyber-muted hover:text-cyber-primary transition-colors link-underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 text-cyber-text">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:4758008096" className="text-cyber-muted hover:text-cyber-primary transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="link-underline">(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-cyber-muted hover:text-cyber-primary transition-colors flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="link-underline">Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* More AI Tools Button */}
          <div className="lg:col-span-1 flex flex-col justify-between">
            <h3 className="text-lg font-bold mb-6 text-cyber-text">More Tools</h3>
            <div className="space-y-4">
              <a 
                href="https://chatgpt.com/g/g-UcqXcLbzK-king-blueberry-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 w-full"
              >
                <span>TRY KING BLUEBERRY</span>
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
              <a 
                href="#faq" 
                className="inline-flex items-center justify-center py-3 px-6 rounded-full bg-gradient-to-r from-cyber-primary to-cyber-highlight text-white font-semibold hover:shadow-lg hover:shadow-cyber-primary/20 transition-all transform hover:-translate-y-1"
              >
                <MessageCircleQuestion className="mr-2 w-5 h-5" />
                <span>FAQ Section</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer divider */}
        <div className="cyber-divider"></div>
        
        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-cyber-muted hover:text-cyber-primary"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-cyber-muted text-sm">Made with</span>
            <Heart className="w-4 h-4 mx-1 text-cyber-accent" />
            <span className="text-cyber-muted text-sm">by AI Web Tools</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

