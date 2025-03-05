
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
  // Start with a server-safe default (setting false initially)
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Set initial state immediately on client-side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Check on initial render
    checkMobile();
    
    // Debounced resize handler for better performance
    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(checkMobile, 100);
    };
    
    // Add window resize listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return isMobile;
}
