
import React from 'react';

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
              <li><a href="#contact" className="text-sm opacity-80 hover:opacity-100">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm opacity-80">
                <span className="block">Email: info@madigitalhub.com</span>
                <span className="block">Phone: +1 (123) 456-7890</span>
              </p>
              <div className="flex space-x-4 mt-4">
                {/* Social icons would go here */}
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="sr-only">Twitter</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="sr-only">LinkedIn</span>
                </div>
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
