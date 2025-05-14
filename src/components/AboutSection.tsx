
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6 text-blue-deep">About Us</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                At MA Digital Hub, we turn ideas into digital realities. We're not just developers—we're your digital 
                transformation partners. Whether you're a small business, a startup, or an individual entrepreneur, 
                we help you build a strong online presence that reflects your brand, drives traffic, and increases sales.
              </p>
              <p className="text-gray-700">
                We specialize in creating high-performance websites using the latest technologies, including Next.js, 
                Tailwind CSS, and JavaScript. Every line of code we write is crafted to deliver a seamless user experience, 
                fast load times, and responsive design across all devices.
              </p>
              <p className="text-gray-700">
                Our approach is simple: we take your vision, map out the strategy, write clean and scalable code, and deliver 
                a powerful digital product that works. From landing pages and e-commerce platforms to full-scale business websites, 
                everything we build is optimized, secure, and future-ready.
              </p>
              <p className="text-gray-700">
                With a deep understanding of modern frameworks and tools, we ensure your website is not just a digital brochure 
                but a conversion machine. And because we use cutting-edge technologies, your site will be easy to maintain, 
                lightning fast, and built for growth.
              </p>
              <p className="text-gray-700">
                At MA Digital Hub, your success is our mission. Let's bring your business online—and take it to the next level.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://i.postimg.cc/Vv56WDWq/ma-digital-hub.jpg" 
                alt="MA Digital Hub Logo" 
                className="w-64 h-64 object-contain rounded-lg shadow-lg animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-accent/20 to-blue-deep/20 rounded-lg"></div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded bg-blue-accent"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded bg-blue-deep"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
