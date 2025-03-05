
import React, { useRef, useEffect } from 'react';
import { Brain, Code, Flask, Sparkles, Calculator, Lightbulb, LineChart, BarChart4 } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-10 h-10 text-cyber-primary" />,
    title: "Invent New Mathematical Concepts",
    description: "Create custom algebraic expressions tailored to your specific problems and scenarios."
  },
  {
    icon: <Code className="w-10 h-10 text-cyber-primary" />,
    title: "Python-Powered Solutions",
    description: "Explore and validate your expressions with built-in Python integration for accurate results."
  },
  {
    icon: <Calculator className="w-10 h-10 text-cyber-primary" />,
    title: "Precise Variable Definition",
    description: "Define variables with exact meaning and context to create meaningful expressions."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-cyber-primary" />,
    title: "Creative Problem-Solving",
    description: "Approach complex problems from new angles with innovative mathematical frameworks."
  },
  {
    icon: <LineChart className="w-10 h-10 text-cyber-primary" />,
    title: "Data Visualization",
    description: "Visualize relationships and patterns with dynamic graphical representations."
  },
  {
    icon: <Flask className="w-10 h-10 text-cyber-primary" />,
    title: "Real-World Applications",
    description: "Apply your custom expressions to actual scenarios for practical solutions."
  }
];

const FeatureSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const cards = sectionRef.current?.querySelectorAll('.feature-card');
            cards?.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
                card.classList.remove('opacity-0');
              }, index * 100);
            });
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 bg-cyber-bg-light border-t border-b border-cyber-border/20 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-matrix-pattern opacity-10 animate-matrix-bg pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-cyber-primary/10 border border-cyber-primary/20">
            <Sparkles className="w-4 h-4 text-cyber-primary mr-2" />
            <span className="text-cyber-primary text-sm font-semibold">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Create <span className="text-gradient">Mathematical Magic</span>
          </h2>
          
          <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
            Solve any problem with custom-created mathematical expressions and formulas
            tailored to your specific needs.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card cyber-card opacity-0 transition-all duration-500 hover:transform hover:translate-y-[-4px]"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 p-3 inline-flex items-center justify-center rounded-lg bg-cyber-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-cyber-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
