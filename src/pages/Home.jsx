import React from 'react';
import Hero from '../components/home/Hero';
// import ClientLogos from '../components/home/ClientLogos';
import AboutPreview from '../components/home/AboutPreview';
import Services from '../components/home/Services';
import FeaturedWork from '../components/home/FeaturedWork';
import Industries from '../components/home/Industries';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import Technologies from '../components/home/Technologies';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import BlogPreview from '../components/home/BlogPreview';
import FinalCTA from '../components/home/FinalCTA';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      {/* <ClientLogos /> */}
      <AboutPreview />
      <Services />
      <FeaturedWork />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <CaseStudies />
      <Testimonials />
      <BlogPreview />
      <FinalCTA />
    </div>
  );
};

export default Home;
