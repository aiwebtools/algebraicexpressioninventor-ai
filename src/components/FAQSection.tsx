
import React from 'react';
import { Minus, Plus, MessageCircleQuestion } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is the Algebraic Expression Inventor GPT?",
      answer: "The Algebraic Expression Inventor GPT is an AI-powered tool that helps you create custom algebraic expressions to solve your unique mathematical problems. It can generate formulas, solve complex equations, and explain math concepts in a clear and understandable way."
    },
    {
      question: "How can I use the Algebraic Expression Inventor GPT?",
      answer: "Simply click on the 'CREATE MATH' button which will take you to the ChatGPT interface. From there, you can describe the mathematical problem you're trying to solve, and the AI will assist you in creating the appropriate algebraic expressions."
    },
    {
      question: "Is this tool suitable for students?",
      answer: "Absolutely! The Algebraic Expression Inventor GPT is perfect for students who need help understanding algebraic concepts, solving homework problems, or preparing for exams. It provides detailed explanations that make complex math more accessible."
    },
    {
      question: "Do I need a ChatGPT subscription to use this tool?",
      answer: "Yes, you will need a ChatGPT Plus subscription to access the Algebraic Expression Inventor GPT, as it is a GPT available through OpenAI's platform."
    },
    {
      question: "What's the difference between this and King Blueberry GPT?",
      answer: "While both tools are educational AI assistants, the Algebraic Expression Inventor GPT focuses specifically on creating and explaining algebraic expressions. King Blueberry GPT offers a more engaging, character-driven approach to learning with broader educational content."
    },
    {
      question: "Can I use this for professional mathematical modeling?",
      answer: "Yes, professionals can use this tool to help develop mathematical models, verify calculations, and explore different algebraic approaches to solving complex problems in fields like engineering, finance, and data science."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-cyber-bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 text-cyber-primary mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Frequently Asked Questions</h2>
          </div>
          <p className="text-cyber-muted max-w-2xl mx-auto">
            Find answers to common questions about the Algebraic Expression Inventor GPT and how it can help you with your mathematical needs.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-cyber-bg-light border border-cyber-border rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-cyber-bg-light/80 transition-colors">
                  <span className="text-left text-lg font-medium text-cyber-text">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-cyber-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-cyber-muted mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="cyber-button-secondary px-6 py-3"
            >
              Contact Support
            </a>
            <a 
              href="https://chatgpt.com/g/g-ApSvxYVTF-algebraic-expression-inventor-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button-primary px-6 py-3"
            >
              Try It Now
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 text-cyber-primary/10 transform rotate-12">
          <Plus size={64} />
        </div>
        <div className="absolute bottom-20 right-10 w-16 h-16 text-cyber-primary/10 transform -rotate-12">
          <Minus size={64} />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
