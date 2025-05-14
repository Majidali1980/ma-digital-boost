
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/923343233883', '_blank');
  };

  const openEmail = () => {
    window.location.href = 'mailto:alimajid03021980@gmail.com';
  };
  
  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-blue-deep">Our Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan that fits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border border-gray-200 rounded-xl overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-deep text-white p-6 text-center">
              <h3 className="text-xl font-bold">Basic</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rs. 5,000</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Single page website</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>WhatsApp integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Free Vercel hosting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>2 revisions</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button onClick={openWhatsApp} className="w-full">Get Started</Button>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="border-2 border-blue-accent rounded-xl overflow-hidden relative transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-400 text-blue-deep font-bold py-1 px-4 text-sm transform rotate-45 translate-x-[30%] translate-y-[10%]">
                POPULAR
              </div>
            </div>
            <div className="bg-blue-accent text-white p-6 text-center">
              <h3 className="text-xl font-bold">Standard</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rs. 7,500</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Single page with extended sections</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Advanced animations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Contact form + WhatsApp integration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Free Vercel hosting</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>3-4 revisions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>SEO optimization</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button onClick={openWhatsApp} className="w-full bg-blue-accent hover:bg-blue-accent/90">Get Started</Button>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="border border-gray-200 rounded-xl overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="bg-blue-deep text-white p-6 text-center">
              <h3 className="text-xl font-bold">Premium</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">Rs. 10,000</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Feature-rich website</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Custom animations and transitions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Advanced contact form with validation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Payment gateway integration (optional)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Unlimited revisions (within scope)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Custom domain setup assistance</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button onClick={openEmail} className="w-full">Get Started</Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="font-medium">Payment Methods: JazzCash & EasyPaisa - 03214684403</p>
          <p>💰 Payment Terms: You'll only be charged after full satisfaction—once the website is complete, works as expected, and you're happy with the final product.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
