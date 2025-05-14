
import React from 'react';

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

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="heading-sm mb-4 text-blue-accent">Free Hosting & Easy Launch</h3>
            <p className="text-gray-700">
              We offer 100% FREE hosting on Vercel, including a free subdomain (e.g., yourbusiness.vercel.app), 
              making it easy and cost-effective to launch your digital space. If you prefer to use your own 
              custom domain or premium hosting, we'll help you set that up too (please note: custom domains 
              and third-party hosting are paid services).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="heading-sm mb-4 text-blue-accent">Modern Technology Stack</h3>
            <p className="text-gray-700">
              Our development stack includes Next.js, Tailwind CSS, and JavaScript—cutting-edge technologies 
              that ensure your website is lightning fast, mobile-responsive, and built to scale. Every website 
              is custom-coded to match your business goals and design preferences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="heading-sm mb-4 text-blue-accent">Custom Design & Branding</h3>
            <p className="text-gray-700">
              We work closely with you to match your brand identity, including custom color schemes, layout, 
              animations, and interactive features. Whether you need a clean and simple landing page or a 
              feature-rich e-commerce interface, we aim to achieve your exact requirements.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="heading-sm mb-4 text-blue-accent">WhatsApp Integration</h3>
            <p className="text-gray-700">
              We integrate your site directly with WhatsApp, so your customers can place orders or contact 
              you instantly through your personal or business number. This boosts real-time engagement and 
              makes your business more accessible.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
          <h3 className="heading-sm mb-4 text-blue-deep">✅ Here's What You Get:</h3>
          <p className="mb-4 font-semibold">Landing Page Development tailored for:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>Small and home-based businesses</li>
            <li>Food delivery or catering services</li>
            <li>Retail or service shops</li>
          </ul>

          <p className="mb-4 font-semibold">Key Sections Included:</p>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li><span className="font-medium">Hero Section:</span> A strong introduction with business highlights and CTA</li>
            <li><span className="font-medium">About You:</span> Tell your customers what you offer and your story</li>
            <li><span className="font-medium">Product/Service Details:</span> Display your offerings clearly and beautifully</li>
            <li><span className="font-medium">Future Posts/Updates:</span> Optional space for offers, blogs, or customer messages</li>
            <li><span className="font-medium">Contact Details:</span> Easy-to-use contact form or direct WhatsApp integration</li>
          </ul>

          <p className="mb-4 font-semibold">Performance Features:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mobile-friendly responsive design</li>
            <li>Super-fast loading speeds</li>
            <li>WhatsApp integration for order-taking</li>
            <li>Up to 3–5 revisions included to ensure full satisfaction</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
