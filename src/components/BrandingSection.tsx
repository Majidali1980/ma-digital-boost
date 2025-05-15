
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Image, FileImage, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const BrandingSection = () => {
  const openWhatsApp = () => {
    const message = "Hello, I'm interested in your branding services. Could you provide more details about pricing and options?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/923343233883?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="branding" className="section bg-gray-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-blue-deep">Branding Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your business identity with our professional branding solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <Palette size={24} />
              </div>
              <CardTitle>Logo Design</CardTitle>
              <CardDescription>Professional logo creation that defines your brand identity</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Multiple concept options</li>
                <li>✓ High-resolution files</li>
                <li>✓ Source files included</li>
                <li>✓ Unlimited revisions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <Image size={24} />
              </div>
              <CardTitle>Poster Design</CardTitle>
              <CardDescription>Eye-catching posters for promotions and advertising</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Custom illustrations</li>
                <li>✓ Print-ready files</li>
                <li>✓ Digital format options</li>
                <li>✓ Multiple size variants</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <FileImage size={24} />
              </div>
              <CardTitle>Business Cards</CardTitle>
              <CardDescription>Professional business cards that make an impression</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Modern designs</li>
                <li>✓ High-quality templates</li>
                <li>✓ Print coordination</li>
                <li>✓ Multiple layout options</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <Instagram size={24} />
              </div>
              <CardTitle>Social Media Content</CardTitle>
              <CardDescription>Engaging posts and graphics for your social platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Platform-specific designs</li>
                <li>✓ Consistent branding</li>
                <li>✓ Promotional templates</li>
                <li>✓ Content calendars</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <Youtube size={24} />
              </div>
              <CardTitle>YouTube Channel Art</CardTitle>
              <CardDescription>Professional channel banners and profile images</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ Custom channel banners</li>
                <li>✓ Profile images</li>
                <li>✓ Branded elements</li>
                <li>✓ Optimized for all devices</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent mb-4">
                <Youtube size={24} />
              </div>
              <CardTitle>YouTube Thumbnails</CardTitle>
              <CardDescription>Eye-catching thumbnails that drive clicks and views</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>✓ High-impact designs</li>
                <li>✓ Attention-grabbing text</li>
                <li>✓ Optimized for search</li>
                <li>✓ Template creation</li>
              </ul>
            </CardContent>
            <CardFooter>
              <p className="text-blue-deep font-medium">Price upon request</p>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-blue-deep mb-4">Custom Branding Packages</h3>
            <p className="text-gray-600 mb-6">
              We offer complete branding solutions tailored to your specific business needs. 
              From logo design to full brand identity packages, we can help establish your 
              visual presence across all platforms.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                <Facebook size={18} className="text-blue-600" />
                <span>Facebook Posts</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                <Instagram size={18} className="text-pink-600" />
                <span>Instagram Stories</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                <Twitter size={18} className="text-blue-400" />
                <span>Twitter Graphics</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                <Image size={18} className="text-green-600" />
                <span>Banner Designs</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-gray-50 px-3 py-2 rounded-lg">
                <Youtube size={18} className="text-red-600" />
                <span>YouTube Content</span>
              </div>
            </div>
            <Button onClick={openWhatsApp} className="font-medium">
              Request Pricing Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
