
import React, { useState, useEffect } from 'react';

const DiscountPromotion = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // Show promotion after a delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Setup blinking animation
    let blinkInterval: NodeJS.Timeout;
    
    if (isVisible) {
      blinkInterval = setInterval(() => {
        setIsBlinking(prev => !prev);
      }, 800);
    }

    return () => {
      clearTimeout(showTimer);
      clearInterval(blinkInterval);
    };
  }, [isVisible]);

  const closePromotion = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-8 z-50 animate-bounce">
      <div className={`relative flex items-center justify-center ${isBlinking ? 'opacity-100' : 'opacity-80'} transition-opacity duration-300`}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-accent to-blue-deep animate-pulse"></div>
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-blue-deep to-blue-accent animate-spin-slow"></div>
        <div className="relative bg-white rounded-full p-4 shadow-lg transform transition-transform hover:scale-105">
          <button 
            onClick={closePromotion}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
            aria-label="Close promotion"
          >
            ×
          </button>
          <div className="text-center p-3">
            <div className="font-bold text-xl text-blue-deep mb-1">50% OFF</div>
            <div className="text-sm text-gray-700">For New Customers!</div>
            <div className="mt-2">
              <a 
                href="https://wa.me/923343233883?text=I'm%20interested%20in%20the%2050%%20discount%20for%20new%20customers" 
                className="inline-block bg-blue-accent text-white text-xs px-3 py-1 rounded-full hover:bg-blue-deep transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPromotion;
