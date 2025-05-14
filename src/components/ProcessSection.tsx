
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProcessStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: number; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-blue-deep text-white flex items-center justify-center font-bold text-xl">
          {number}
        </div>
      </div>
      <div>
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section id="process" className="section bg-gray-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-blue-deep">How We Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy to transform your business with digital tools.
            We guide you through every step to ensure a smooth transition to online success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ProcessStep 
              number={1} 
              title="Share Your Vision" 
              description="Provide your idea or theme, details, logo, visiting card, or brochure. We'll discuss your goals and requirements to understand your needs."
            />
            
            <ProcessStep 
              number={2} 
              title="Digital Transformation" 
              description="We convert your materials into a complete webpage integrated with WhatsApp button for easy customer communication."
            />
            
            <ProcessStep 
              number={3} 
              title="Review & Refine" 
              description="We send you a link to check the website. You can provide feedback and request adjustments until it's exactly what you want."
            />
            
            <ProcessStep 
              number={4} 
              title="Payment After Satisfaction" 
              description="Only pay after you're 100% satisfied with the result. Your complete satisfaction is our top priority."
            />
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="heading-sm mb-6 text-blue-deep">Why Choose Our Process?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">No upfront payment - pay only when you're completely satisfied</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Direct WhatsApp integration for instant customer communication</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Fast turnaround time with responsive communication</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Modern, responsive design that looks great on all devices</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">SEO-friendly structure to help customers find you online</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-blue-accent flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700">Ongoing support and guidance even after launch</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Ready to get started?</h4>
                  <p className="text-sm text-gray-600">Transform your business today</p>
                </div>
                <a 
                  href="#contact" 
                  className="px-6 py-2 bg-blue-deep text-white rounded-md hover:bg-blue-deep/90 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
