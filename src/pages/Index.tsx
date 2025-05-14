
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhyChooseSection from '@/components/WhyChooseSection';
import PricingSection from '@/components/PricingSection';
import RequirementsSection from '@/components/RequirementsSection';
import DiscountPromotion from '@/components/DiscountPromotion';
import BrandingSection from '@/components/BrandingSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <WhyChooseSection />
        <ProcessSection />
        <RequirementsSection />
        <ProjectsSection />
        <BrandingSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <DiscountPromotion />
    </div>
  );
};

export default Index;
