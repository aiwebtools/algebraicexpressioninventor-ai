
import React, { useRef, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "The Algebraic Expression Inventor completely transformed how I approach complex engineering problems. I created a custom formula that perfectly modeled our system's behavior.",
    author: "Sarah J.",
    role: "Mechanical Engineer"
  },
  {
    text: "As a data scientist, I needed a way to express relationships between variables that standard models couldn't capture. This tool helped me develop novel mathematical approaches.",
    author: "David L.",
    role: "Data Scientist"
  },
  {
    text: "I was stuck on a physics problem until I used this GPT to create a specialized equation. The Python integration made it easy to validate and refine my approach.",
    author: "Michael T.",
    role: "Physics Professor"
  },
  {
    text: "The creative mathematical frameworks this tool generates have been invaluable for my research in ecological modeling. It thinks outside the box in ways I hadn't considered.",
    author: "Elena R.",
    role: "Environmental Scientist"
  }
];

const TestimonialSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const scrollTo = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = container.querySelector('div')?.offsetWidth || 0;
    const scrollAmount = cardWidth + 16; // card width + gap
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Mouse events for dragging
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
    };

    const handleMouseLeave = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const x = e.pageX - container.offsetLeft;
      const scroll = x - startXRef.current;
      container.scrollLeft = scrollLeftRef.current - scroll;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="py-20 bg-cyber-bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-cyber-primary/10 border border-cyber-primary/20">
            <Star className="w-4 h-4 text-cyber-primary mr-2" />
            <span className="text-cyber-primary text-sm font-semibold">Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            What Users Are <span className="text-gradient">Saying</span>
          </h2>
          
          <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
            Discover how others are using Algebraic Expression Inventor GPT to solve complex problems
          </p>
        </div>
        
        {/* Testimonial slider with controls */}
        <div className="relative">
          {/* Navigation buttons */}
          <button 
            onClick={() => scrollTo('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-cyber-bg-light/80 backdrop-blur-sm p-2 rounded-full border border-cyber-border hover:bg-cyber-primary/20 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-cyber-text" />
          </button>
          
          <button 
            onClick={() => scrollTo('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-cyber-bg-light/80 backdrop-blur-sm p-2 rounded-full border border-cyber-border hover:bg-cyber-primary/20 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-cyber-text" />
          </button>
          
          {/* Testimonial container */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto scrollbar-hidden pb-8 snap-x snap-mandatory cursor-grab"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] lg:min-w-[450px] p-6 mx-2 first:ml-4 last:mr-4 glass-card snap-center transition-transform duration-300 hover:transform hover:scale-[1.02]"
              >
                <Quote className="w-10 h-10 text-cyber-primary/50 mb-4" />
                <p className="mb-6 text-cyber-text">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="mr-3 flex-shrink-0 w-10 h-10 rounded-full bg-cyber-primary/20 text-cyber-primary flex items-center justify-center font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-cyber-text">{testimonial.author}</p>
                    <p className="text-cyber-muted text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
