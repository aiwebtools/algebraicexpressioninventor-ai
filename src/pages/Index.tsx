
import React, { useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import FAQSection from '../components/FAQSection';
import LegalSection from '../components/LegalSection';
import AnimatedBackground from '../components/AnimatedBackground';
import KingBlueberrySection from '../components/KingBlueberrySection';
import { useMobile } from '../hooks/useMobile';

const Index: React.FC = () => {
  const isMobile = useMobile();
  
  // Optimized smooth scroll behavior with useCallback
  const handleAnchorClick = useCallback((e: Event) => {
    e.preventDefault();
    
    const target = e.currentTarget as HTMLAnchorElement;
    const href = target.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (!targetElement) return;
    
    window.scrollTo({
      top: targetElement.offsetTop - 80, // Offset for header
      behavior: 'smooth'
    });
  }, []);

  // Apply smooth scroll behavior for anchor links - optimized with proper cleanup
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });
    
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, [handleAnchorClick]);

  return (
    <div className="min-h-screen flex flex-col bg-cyber-bg-dark text-cyber-text">
      {/* Animated background with math symbols - only render on non-mobile */}
      {!isMobile && <AnimatedBackground />}
      
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
