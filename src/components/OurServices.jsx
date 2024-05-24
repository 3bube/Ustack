import React from 'react';
import ServiceCard from './ServiceCard';
import Image1 from '/assets/service.png';
import Image2 from '/assets/seo.png';
import Image3 from '/assets/logo-design.png';

const OurServices = () => {
  const imgUrls = {
    first: 'src/assets/service.png',
    second: 'src/assets/seo.png',
    third: 'src/assets/logo-design.png',
  };

  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive and user-friendly websites tailored to your needs.',
      icon: <img src={Image1} alt="Web Development Icon" />,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description: "Improve your website's visibility on search engines with our expert SEO services, including keyword research, on-page optimization, and link building.",
      icon: <img src={Image2} alt="SEO Icon" />,
    },
    {
      title: 'Logo and Branding Design',
      description: 'Create a strong brand identity with our comprehensive logo and branding design services, ensuring your brand stands out from the competition.',
      icon: <img src={Image3} alt="Logo and Branding Design Icon" />,
    },
  ];

  return (
    <section id='services' className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center  mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
