
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const ServiceDetails = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gray-light">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="heading-lg mb-4 text-blue-deep">Here's What You Get</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive web development services tailored for small businesses
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
              {/* Business Types */}
              <div className="mb-12">
                <h2 className="heading-md mb-6 text-blue-accent">Landing Page Development Tailored For:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-deep/5 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-accent/20 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-blue-deep" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-deep">Small Businesses</h3>
                    </div>
                    <p className="text-gray-700">
                      Perfect for home-based and small local businesses looking to establish their first online presence.
                    </p>
                  </div>
                  
                  <div className="bg-blue-deep/5 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-accent/20 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-blue-deep" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-deep">Food Services</h3>
                    </div>
                    <p className="text-gray-700">
                      Ideal for food delivery, catering services, or restaurants looking to showcase their menu online.
                    </p>
                  </div>
                  
                  <div className="bg-blue-deep/5 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-accent/20 flex items-center justify-center mr-3">
                        <Check className="h-5 w-5 text-blue-deep" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-deep">Retail Shops</h3>
                    </div>
                    <p className="text-gray-700">
                      For service providers and retail businesses looking to showcase their products and services.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Key Sections */}
              <div className="mb-12">
                <h2 className="heading-md mb-6 text-blue-accent">Key Sections Included:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-deep mb-2">Hero Section</h3>
                      <p className="text-gray-700">
                        A powerful introduction with compelling visuals, business highlights, and strong call-to-action buttons to engage visitors immediately.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-deep mb-2">About You</h3>
                      <p className="text-gray-700">
                        A personalized section that tells your story, explains your mission, and helps customers connect with your brand on a deeper level.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-deep mb-2">Product/Service Details</h3>
                      <p className="text-gray-700">
                        Beautifully designed sections to showcase your offerings with attractive visuals, detailed descriptions, and pricing information.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-deep mb-2">Future Posts/Updates</h3>
                      <p className="text-gray-700">
                        Optional dynamic sections for regularly updating content like special offers, blog posts, announcements, or customer testimonials.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-6 w-6 text-blue-deep" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-blue-deep mb-2">Contact Details</h3>
                      <p className="text-gray-700">
                        User-friendly contact forms and direct WhatsApp integration to make it simple for customers to reach you and place orders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Performance Features */}
              <div className="mb-12">
                <h2 className="heading-md mb-6 text-blue-accent">Performance Features:</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m2 12 10-10 10 10"></path>
                        <path d="M12 2v20"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">Mobile-Responsive</h3>
                    <p className="text-gray-700">
                      Your site will look perfect on all devices - smartphones, tablets, and desktops, ensuring a great user experience for all visitors.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">Super-Fast Loading</h3>
                    <p className="text-gray-700">
                      Built with performance in mind, your website will load quickly to keep customers engaged and improve search engine rankings.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">WhatsApp Integration</h3>
                    <p className="text-gray-700">
                      Seamless integration with WhatsApp for instant communication, order-taking, and customer support to boost conversions.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 20h.01"></path>
                        <path d="M7 20v-4"></path>
                        <path d="M12 20v-8"></path>
                        <path d="M17 20v-6"></path>
                        <path d="M22 20v-10"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">3-5 Revisions</h3>
                    <p className="text-gray-700">
                      We understand that getting everything perfect takes time. That's why we include multiple revision rounds to ensure your satisfaction.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 8-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path>
                        <path d="M14 2v6h6"></path>
                        <circle cx="10" cy="13" r="2"></circle>
                        <path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">YouTube Channel Art</h3>
                    <p className="text-gray-700">
                      Professional YouTube channel art and banner design that matches your website branding to create a cohesive online presence.
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
                    <div className="mb-4 text-blue-deep">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                        <path d="M7 21h10"></path>
                        <path d="M12 3v18"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-deep mb-2">YouTube Thumbnails</h3>
                    <p className="text-gray-700">
                      Eye-catching, click-worthy YouTube thumbnail designs to increase views and engagement on your video content.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-deep/10 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-blue-deep mb-2">100% Satisfaction Guaranteed</h3>
                <p className="text-gray-800 text-lg">
                  We ensure complete satisfaction with your website before any payment is required.
                </p>
                <a href="/#contact" className="mt-4 inline-block px-8 py-3 bg-blue-deep text-white rounded-md hover:bg-blue-deep/90 transition-colors">
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
