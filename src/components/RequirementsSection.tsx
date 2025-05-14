
import React from 'react';

const RequirementsSection = () => {
  return (
    <section id="requirements" className="section bg-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-blue-deep">What We Need From You</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            To create your perfect website, here's what we'll need from you
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="heading-sm mb-6 text-blue-accent">Content & Materials</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <p className="font-medium">Business Information</p>
                    <p className="text-gray-600">Your business name, tagline, and description of services/products</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <p className="font-medium">Logo & Brand Assets</p>
                    <p className="text-gray-600">Your logo in high resolution and any brand colors or assets</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <p className="font-medium">Photos & Images</p>
                    <p className="text-gray-600">Product images, team photos, or any visuals for your website</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="heading-sm mb-6 text-blue-accent">Requirements & Preferences</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <p className="font-medium">Design Preferences</p>
                    <p className="text-gray-600">Any example websites you like or specific design elements you prefer</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">5</div>
                  <div>
                    <p className="font-medium">Contact Information</p>
                    <p className="text-gray-600">WhatsApp number, email, and any social media profiles to include</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 bg-blue-deep/10 text-blue-deep rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">6</div>
                  <div>
                    <p className="font-medium">Timeline & Goals</p>
                    <p className="text-gray-600">Your desired launch date and main goals for your website</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center p-4 bg-blue-deep/5 rounded-lg">
            <p className="font-medium text-blue-deep">
              Note: We'll help guide you through this process! Even if you don't have all these items ready, 
              we can work with what you have and offer suggestions for the rest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
