
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Algebraic Expression Inventor GPT?",
    answer: "Algebraic Expression Inventor GPT is an AI tool designed to help users create custom mathematical expressions and formulas to solve specific problems. It combines creative mathematical thinking with Python integration to develop innovative solutions tailored to your needs."
  },
  {
    question: "How does it create new mathematical concepts?",
    answer: "The AI analyzes your problem, identifies variables and relationships, then formulates algebraic expressions that accurately represent the situation. It combines established mathematical principles with creative approaches to develop expressions that might not follow conventional patterns but effectively model your specific scenario."
  },
  {
    question: "Do I need to know advanced mathematics to use this tool?",
    answer: "No. While a basic understanding of mathematics is helpful, the tool is designed to be accessible to users at various skill levels. It will guide you through the process of defining your problem and help interpret the mathematical solutions it generates."
  },
  {
    question: "What kinds of problems can it solve?",
    answer: "The tool can assist with a wide range of problems across fields like engineering, finance, physics, data science, and more. It's particularly useful for situations where standard formulas don't quite fit the unique aspects of your problem."
  },
  {
    question: "How accurate are the generated expressions?",
    answer: "The expressions are mathematically sound and designed to accurately model the problems you describe. However, as with any AI tool, the quality of the output depends on the clarity and completeness of the information provided. The tool also uses Python to validate and test expressions where appropriate."
  },
  {
    question: "Can it solve problems that existing mathematical models can't?",
    answer: "In many cases, yes. By creating custom expressions tailored to your specific scenario, the tool can sometimes address problems that don't fit neatly into existing mathematical frameworks. It can combine concepts from different areas of mathematics to create novel approaches."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-cyber-bg-light border-t border-cyber-border/20 relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 mb-6 rounded-full bg-cyber-primary/10 border border-cyber-primary/20">
            <HelpCircle className="w-4 h-4 text-cyber-primary mr-2" />
            <span className="text-cyber-primary text-sm font-semibold">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          
          <p className="text-cyber-muted text-lg max-w-2xl mx-auto">
            Everything you need to know about the Algebraic Expression Inventor GPT
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-cyber-border/20">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-xl font-medium text-cyber-text">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-cyber-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-cyber-primary flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`mt-3 text-cyber-muted overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
