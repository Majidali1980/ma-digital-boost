
import React from 'react';
import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-deep text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/Vv56WDWq/ma-digital-hub.jpg" 
                alt="MA Digital Hub Logo" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-xl font-bold">MA Digital Hub</span>
            </div>
            <p className="mt-4 text-sm opacity-80">
              We help small businesses go digital with powerful websites, smart sales strategies, 
              and online tools that deliver real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-sm opacity-80 hover:opacity-100">Home</a></li>
              <li><a href="#about" className="text-sm opacity-80 hover:opacity-100">About Us</a></li>
              <li><a href="#process" className="text-sm opacity-80 hover:opacity-100">How We Work</a></li>
              <li><a href="#projects" className="text-sm opacity-80 hover:opacity-100">Our Projects</a></li>
              <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a></li>
              <li>
                <a 
                  href="https://majidportfolio-fawn.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  Our Portfolio
                </a>
              </li>
              <li>
                <a 
                  href="https://ma-digital-hub.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm opacity-80 hover:opacity-100"
                >
                  MA Digital Hub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm opacity-80">
                <span className="block">Email: alimajid03021980@gmail.com</span>
                <span className="block">Phone & WhatsApp: +92 334 3233883</span>
              </p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.facebook.com/share/16TyxwjKRy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/923343233883" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} MA Digital Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
