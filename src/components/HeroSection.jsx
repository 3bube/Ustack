import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  const imgUrls = {
    first: 'public/daniel-korpai-pKRNxEguRgM-unsplash.jpg',
    second: 'public/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg'
  };

  return (
    <div className="flex flex-col hero-section w-full bg-[#0f0f0f] text-white py-12" aria-labelledby="hero-heading">
      <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
        <h1 id="hero-heading" className="text-4xl lg:text-7xl text-center font-bold tracking-wide">
          We Transform Your Idea Into <br />
          <span className="bg-gradient-to-r from-amber-500 to-red-800 text-transparent bg-clip-text type">
            <Typewriter
              words={['Meaningful Experiences', 'Innovative Solutions', 'Exceptional Designs', 'Unforgettable Interactions']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-gray-300 text-center mb-20 text-2xl max-w-4xl mt-6 ">
          Whether you're a startup looking to establish your online presence or an established business seeking to enhance your digital footprint, we have the skills and experience to help you succeed. Let's work together to bring your vision to life.
        </p>
        <a href="#contact" className="py-3 px-6 mx-3 rounded-md bg-amber-950 text-white hover:bg-amber-800 hover:text-white transition-colors duration-300">Enquire Now</a>
      </div>
      {/* <div className="flex flex-wrap mt-10 justify-center">
        <img src={imgUrls.first} alt="First example project" className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-amber-950 shadow-amber-700 mx-2 my-4" />
        <img src={imgUrls.second} alt="Second example project" className="rounded-lg w-full sm:w-1/2 lg:w-1/3 border border-amber-950 shadow-amber-700 mx-2 my-4" />
      </div> */}
    </div>
  );
}

export default HeroSection;
