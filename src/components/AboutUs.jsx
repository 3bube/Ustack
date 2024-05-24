import React from 'react';

const AboutUs = () => {

    const imgUrl = 'src/assets/pexels-canvastudio-3194519.jpg';

  return (
    <section id='about' className=" py-12" aria-labelledby="about-us-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 id="about-us-heading" className="text-3xl font-semibold text-white">About Us</h1>
          <p className="mt-2 text-gray-300">Learn more about our company and our values</p>
        </header>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
          <div className="lg:w-1/2 mr-3">
            <img src={imgUrl} alt="About Us" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="mt-4 text-gray-300 text-lg">
            Welcome to Ustack, where innovation meets creativity in the digital world.

Founded by Ebubechukwu Ugbor, Ustack is a web design and development agency dedicated to transforming ideas into digital excellence. With a passion for crafting exceptional digital experiences, we specialize in designing and developing bespoke websites and mobile applications that not only look stunning but also deliver outstanding performance.
            </p>
            <p className="mt-4 text-gray-300 text-lg">
              We believe in the power of collaboration, creativity, and commitment to quality. Our team is our greatest asset, and we strive to create a positive and supportive work environment where everyone can thrive.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start ">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6m-9-5a9 9 0 0118 0v5a9 9 0 01-18 0v-5z"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Our Mission</h3>
                  <p className="text-gray-300 text-lg">At Ustack, our mission is to empower businesses by creating digital solutions that drive growth and engagement. We believe that great design and cutting-edge technology can transform the way businesses connect with their audiences.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Our Approach</h3>
                  <p className="text-gray-300 text-lg">Our approach is centered around collaboration and customization. We work closely with our clients to understand their unique needs and goals, ensuring that every project we undertake is tailored to deliver maximum impact. From initial concept to final deployment, we are committed to providing a seamless and transparent experience</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 11V6a1 1 0 012 0v5m2 4a4 4 0 01-8 0"></path></svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Our Values</h3>
                  <p className="text-gray-300 text-lg">Integrity, Excellence, Innovation, Collaboration, and Customer Focus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
