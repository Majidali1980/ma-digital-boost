
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section bg-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-blue-deep">Why Choose MA Digital Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver affordable, high-quality websites with exceptional service
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="heading-sm mb-4 text-blue-accent">Free Hosting & Easy Launch</h3>
                <p className="text-gray-700">
                  We offer 100% FREE hosting on Vercel, including a free subdomain (e.g., yourbusiness.vercel.app), 
                  making it easy and cost-effective to launch your digital space. If you prefer to use your own 
                  custom domain or premium hosting, we'll help you set that up too (please note: custom domains 
                  and third-party hosting are paid services).
                </p>
              </div>
            </CarouselItem>
            
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="heading-sm mb-4 text-blue-accent">Modern Technology Stack</h3>
                <p className="text-gray-700">
                  Our development stack includes Next.js, Tailwind CSS, and JavaScript—cutting-edge technologies 
                  that ensure your website is lightning fast, mobile-responsive, and built to scale. Every website 
                  is custom-coded to match your business goals and design preferences.
                </p>
              </div>
            </CarouselItem>
            
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="heading-sm mb-4 text-blue-accent">Custom Design & Branding</h3>
                <p className="text-gray-700">
                  We work closely with you to match your brand identity, including custom color schemes, layout, 
                  animations, and interactive features. Whether you need a clean and simple landing page or a 
                  feature-rich e-commerce interface, we aim to achieve your exact requirements.
                </p>
              </div>
            </CarouselItem>
            
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/2">
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <h3 className="heading-sm mb-4 text-blue-accent">WhatsApp Integration</h3>
                <p className="text-gray-700">
                  We integrate your site directly with WhatsApp, so your customers can place orders or contact 
                  you instantly through your personal or business number. This boosts real-time engagement and 
                  makes your business more accessible.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static transform-none mx-2" />
            <CarouselNext className="static transform-none mx-2" />
          </div>
        </Carousel>

        <div className="mt-10 text-center">
          <a href="/service-details" className="btn btn-primary px-6 py-3 rounded-md">View All Service Details</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
