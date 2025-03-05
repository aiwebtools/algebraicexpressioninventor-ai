
import React from 'react';
import { Crown, ExternalLink, Sparkles } from 'lucide-react';

const KingBlueberrySection: React.FC = () => {
  return (
    <section id="king-blueberry" className="py-20 relative overflow-hidden">
      {/* Background effect with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>
      
      {/* Blueberry pattern background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-blue-500/20 border border-blue-500/30">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-semibold">SPECIAL EDITION</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Try the <Crown className="inline-block w-8 h-8 text-blue-400 mx-1" /> <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">King Blueberry</span> Version
            </h2>
            
            <p className="text-cyber-muted text-lg max-w-2xl mx-auto mb-8">
              Experience our premium version with enhanced capabilities and exclusive features to solve more complex mathematical problems.
            </p>
            
            <a 
              href="https://chatgpt.com/g/g-UcqXcLbzK-king-blueberry-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 px-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 group mb-10"
            >
              <span>TRY KING BLUEBERRY NOW</span>
              <ExternalLink className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            
            {/* YouTube Video Embed - with responsive container and explicit sizing */}
            <div className="w-full max-w-4xl mx-auto my-10">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-2xl border border-blue-500/30">
                <iframe 
                  src="https://www.youtube.com/embed/U8TLg15RTg8?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&vq=hd1080" 
                  title="King Blueberry Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="relative mt-12 rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.2)]">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-500 to-purple-600 text-white px-6 py-2 rounded-bl-lg font-bold z-10 flex items-center">
              <Crown className="w-5 h-5 mr-2" />
              PREMIUM
            </div>
            
            <div className="p-6 md:p-8 bg-cyber-bg-light/80 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Advanced Features</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">Complex multi-variable expressions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">Quantum computing-inspired calculations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">Premium visualization tools</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-blue-400">Exclusive Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">Priority problem-solving speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">More accurate results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">✦</span>
                      <span className="text-cyber-muted">Advanced mathematical explanations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KingBlueberrySection;
