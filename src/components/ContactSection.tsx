
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, Facebook, ExternalLink } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);
    const formProps = Object.fromEntries(formData);
    
    try {
      // Using EmailJS
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_kqtecnn",
          template_id: "template_tv45p3s",
          user_id: "H357zAP8V__yP5H8e",
          template_params: {
            from_name: formProps.name,
            from_email: formProps.email,
            phone: formProps.phone,
            message: formProps.message,
          }
        }),
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        formRef.current.reset();
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <Input 
                  id="name" 
                  name="name"
                  placeholder="Enter your name" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                <Input 
                  id="phone" 
                  name="phone"
                  placeholder="Enter your phone number" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Tell us about your project" 
                  rows={4} 
                  className="w-full"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-deep hover:bg-blue-deep/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Message"}
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
                    <h4 className="font-semibold text-lg">Phone & WhatsApp</h4>
                    <p className="text-gray-600">+92 334 3233883</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday to Friday, 9am - 6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600">alimajid03021980@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <Facebook size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Social Media</h4>
                    <a 
                      href="https://www.facebook.com/share/16TyxwjKRy/" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-gray-600 hover:text-blue-accent transition-colors"
                    >
                      Facebook
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Follow us for updates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent">
                    <ExternalLink size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Websites</h4>
                    <div className="flex flex-col gap-1">
                      <a 
                        href="https://ma-digital-hub.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-accent transition-colors"
                      >
                        MA Digital Hub
                      </a>
                      <a 
                        href="https://majidportfolio-fawn.vercel.app/" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-gray-600 hover:text-blue-accent transition-colors"
                      >
                        Our Portfolio
                      </a>
                    </div>
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
                href="https://wa.me/923343233883" 
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
