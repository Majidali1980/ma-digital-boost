
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Check } from 'lucide-react';

interface ServiceDetailsPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceDetailsPopup = ({ open, onOpenChange }: ServiceDetailsPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-blue-deep">What You Get</DialogTitle>
          <DialogDescription className="text-base">
            Explore the complete range of our web development services
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {/* Business Types */}
          <div>
            <h3 className="text-lg font-semibold text-blue-accent mb-2">Landing Page Development Tailored For:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Small and home-based businesses</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Food delivery or catering services</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Retail or service shops</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Professional services</span>
              </li>
            </ul>
          </div>
          
          {/* Key Sections */}
          <div>
            <h3 className="text-lg font-semibold text-blue-accent mb-2">Key Sections Included:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <div>
                  <span className="font-medium">Hero Section:</span>
                  <span className="text-gray-600"> A strong introduction with business highlights and CTA</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <div>
                  <span className="font-medium">About You:</span>
                  <span className="text-gray-600"> Tell your customers what you offer and your story</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <div>
                  <span className="font-medium">Product/Service Details:</span>
                  <span className="text-gray-600"> Display your offerings clearly and beautifully</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <div>
                  <span className="font-medium">Future Posts/Updates:</span>
                  <span className="text-gray-600"> Optional space for offers, blogs, or customer messages</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center mt-0.5">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <div>
                  <span className="font-medium">Contact Details:</span>
                  <span className="text-gray-600"> Easy-to-use contact form or direct WhatsApp integration</span>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Performance Features */}
          <div>
            <h3 className="text-lg font-semibold text-blue-accent mb-2">Performance Features:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Mobile-friendly responsive design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Super-fast loading speeds</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>WhatsApp integration for order-taking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-accent/20 flex items-center justify-center">
                  <Check className="h-3 w-3 text-blue-deep" />
                </div>
                <span>Up to 3–5 revisions included</span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-deep/5 p-4 rounded-lg">
            <p className="font-medium text-center text-blue-deep">
              100% satisfaction guaranteed before payment
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsPopup;
