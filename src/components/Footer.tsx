
import React from 'react';
import { Facebook, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-deep text-white">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/Vv56WDWq/ma-digital-hub.jpg" 
                alt="MA Digital Hub Logo" 
                className="w-12 h-12 rounded-full border-2 border-white/30"
              />
              <div>
                <div className="text-2xl font-bold">MA Digital Hub</div>
                <div className="text-sm text-blue-accent">Digital Solutions for Modern Businesses</div>
              </div>
            </div>
            
            <p className="text-white/80 max-w-md">
              We help small businesses go digital with powerful websites, smart sales strategies, 
              and online tools that deliver real results at affordable prices.
            </p>
            
            <div className="flex space-x-3 pt-2">
              <a 
                href="https://www.facebook.com/share/16TyxwjKRy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/923343233883" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </a>
              <a 
                href="mailto:alimajid03021980@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#process" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> How We Work
                </a>
              </li>
              <li>
                <a href="#projects" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> Our Projects
                </a>
              </li>
              <li>
                <a href="#pricing" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center text-white/70 hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                  <span className="text-blue-accent mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Our Portfolio */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Our Work</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://majidportfolio-fawn.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white/70 hover:text-white transition-colors group"
                >
                  <span className="text-blue-accent mr-2">›</span> Portfolio
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ma-digital-hub.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-white/70 hover:text-white transition-colors group"
                >
                  <span className="text-blue-accent mr-2">›</span> MA Digital Hub
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-2">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-blue-accent mt-0.5" />
                <a href="mailto:alimajid03021980@gmail.com" className="text-white/70 hover:text-white">alimajid03021980<wbr />@gmail.com</a>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-blue-accent mt-0.5" />
                <a href="tel:+923343233883" className="text-white/70 hover:text-white">+92 334 3233883</a>
              </div>
              <div className="mt-4 py-2 px-3 bg-blue-accent/20 rounded-md text-center">
                <p className="text-sm">EasyPaisa Payment</p>
                <p className="font-semibold">03214684403</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} MA Digital Hub. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <span className="text-blue-accent">✓</span> Affordable Websites 
            <span className="mx-2 text-white/30">•</span> 
            <span className="text-blue-accent">✓</span> Professional Design
            <span className="mx-2 text-white/30">•</span> 
            <span className="text-blue-accent">✓</span> Customer Satisfaction
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
