
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import LegalSection from '../components/LegalSection';
import AnimatedBackground from '../components/AnimatedBackground';
import KingBlueberrySection from '../components/KingBlueberrySection';

const Index: React.FC = () => {
  // Apply smooth scroll behavior for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-bg-dark text-cyber-text">
      {/* Animated background with math symbols */}
      <AnimatedBackground />
      
      {/* Header */}
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Feature Section */}
        <FeatureSection />

        {/* King Blueberry Section */}
        <KingBlueberrySection />
        
        {/* Testimonial Section */}
        <TestimonialSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Legal Section */}
        <LegalSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
