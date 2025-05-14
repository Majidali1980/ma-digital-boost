
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-blue-deep">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business? Contact us today for a free consultation
            or to discuss your project ideas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-light p-8 rounded-xl shadow-sm">
            <h3 className="heading-sm mb-6">Send Us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Input 
                  id="phone" 
                  placeholder="Enter your phone number" 
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project" 
                  rows={4} 
                  className="w-full"
                />
              </div>
              
              <Button className="w-full bg-blue-deep hover:bg-blue-deep/90">
                Submit Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="mb-8">
              <h3 className="heading-sm mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday to Friday, 9am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">info@madigitalhub.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">WhatsApp</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                    <p className="text-sm text-gray-500 mt-1">For quick responses and updates</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <div className="bg-green-500 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Connect on WhatsApp</h4>
                  <p className="text-sm text-white/80">For instant support and updates</p>
                </div>
              </div>
              <a 
                href="https://wa.me/11234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block mt-4 bg-white text-green-500 text-center py-3 rounded-md font-medium hover:bg-green-50 transition-colors"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
