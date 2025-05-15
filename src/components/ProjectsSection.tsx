
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const projects = [
  {
    title: "Freezo Mart",
    image: "https://i.postimg.cc/Cxb5FvM1/freezo.png",
    url: "https://freezo-mart-frostbite-finds.vercel.app/"
  },
  {
    title: "Corner Store",
    image: "https://i.postimg.cc/4dxxQs67/general-store.png",
    url: "https://cornorstore.vercel.app/"
  },
  {
    title: "Glamour Box",
    image: "https://i.postimg.cc/6Q0QZyvx/glamour-box.png",
    url: "https://cosmetic-shop-zeta.vercel.app/"
  },
  {
    title: "MA Jewellery",
    image: "https://i.postimg.cc/MHcZg5rz/jewellary.png",
    url: "https://majewellery.vercel.app/"
  },
  {
    title: "MA Foods",
    image: "https://i.postimg.cc/d1NtWp6W/mafood.png",
    url: "https://mafoods-five.vercel.app/"
  },
  {
    title: "MA Tailor",
    image: "https://i.postimg.cc/nhKV8CT9/matailor.png",
    url: "https://matailor-wine.vercel.app/"
  },
  {
    title: "Neon Pizza",
    image: "https://i.postimg.cc/Hsys2Sy2/neon-pizza.png",
    url: "https://neon-pizza.vercel.app/"
  },
  {
    title: "Royal Paan",
    image: "https://i.postimg.cc/pV7LKNpr/pan.png",
    url: "https://royal-paan-karachi-spot.vercel.app/"
  },
  {
    title: "Plastics Hub",
    image: "https://i.postimg.cc/QdZNnpgr/plazto.png",
    url: "https://daily-ease-plastics-hub.vercel.app/"
  },
  {
    title: "Quick Bite",
    image: "https://i.postimg.cc/26trdvjM/quick-bite.png",
    url: "https://quick-bite-two-kappa.vercel.app/"
  },
  {
    title: "Zesty Bites",
    image: "https://i.postimg.cc/x8bY6CcC/zesty-bites.png",
    url: "https://zesty-bites-blaze-page.vercel.app/"
  }
];

const portfolioLinks = [
  {
    title: "MA Digital Hub Portfolio",
    url: "https://ma-digital-hub.vercel.app/"
  },
  {
    title: "Majid's Portfolio",
    url: "https://majidportfolio-fawn.vercel.app/"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-gray-light py-12 md:py-16">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4 text-blue-deep">Our Latest Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Check out some of our recent work. Click on any project to view the live site.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-blue-accent text-blue-accent hover:bg-blue-accent/10 font-medium"
              onClick={() => window.open("https://ma-digital-hub.vercel.app", "_blank")}
            >
              <Eye className="mr-2 h-4 w-4" /> MA Digital Hub Portfolio
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-accent text-blue-accent hover:bg-blue-accent/10 font-medium"
              onClick={() => window.open("https://majidportfolio-fawn.vercel.app", "_blank")}
            >
              <Eye className="mr-2 h-4 w-4" /> Majid's Portfolio
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-deep group-hover:text-blue-accent transition-colors">
                  {project.title}
                </h3>
                <div className="mt-2 flex justify-end">
                  <span className="text-sm text-blue-accent inline-flex items-center">
                    Visit Site
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
