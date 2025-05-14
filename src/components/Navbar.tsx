
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b bg-white sticky top-0 z-50">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img 
            src="https://i.postimg.cc/Vv56WDWq/ma-digital-hub.jpg" 
            alt="MA Digital Hub Logo" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-xl font-bold text-blue-deep">MA Digital Hub</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-sm font-medium hover:text-blue-accent">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-blue-accent">About</a>
          <a href="#process" className="text-sm font-medium hover:text-blue-accent">How We Work</a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-accent">Contact</a>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button className="btn btn-primary px-6 py-2">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col space-y-4">
            <a href="#hero" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#process" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>How We Work</a>
            <a href="#contact" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            <Button className="btn btn-primary w-full" onClick={() => setIsMenuOpen(false)}>Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
