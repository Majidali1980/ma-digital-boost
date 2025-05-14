
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-r from-blue-deep to-blue-accent py-20 md:py-28 lg:py-32">
      {/* Background stylish elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 rounded-full bg-white"></div>
        </div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="heading-xl mb-6 animate-fade-in">
              Transform Your Business Into a Digital Powerhouse
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              We help small businesses go digital with powerful websites, smart sales strategies, 
              and online tools that deliver real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button className="bg-white text-blue-deep hover:bg-white/90 px-8 py-6 text-base">
                Get a Free Consultation
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-base">
                Let's Build Your Site
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block relative">
            <div className="rounded-lg bg-white p-4 shadow-xl transform rotate-2 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Digital business transformation" 
                className="rounded w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-blue-accent rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mt-2 font-mono text-sm text-white">{"<code> Digital Success </code>"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
