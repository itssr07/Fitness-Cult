import React from 'react';
import Moreabout from './Moreabout';
import Extra from './Extra';

function About() {
  return (
    <div className="bg-black text-white">
      {/* About Us Section */}
      <section className="container mx-auto py-12 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:w-5/12 space-y-6">
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              At <span className="text-violet-500 font-semibold">Fitness Cult</span>, we are more than just a gym—we are a community dedicated to helping you achieve your fitness goals and lead a healthier, happier life. Our mission is to create a welcoming and motivating environment where individuals of all fitness levels can thrive.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 text-justify">
              We believe that fitness is not just about lifting weights or running on treadmills; it's about cultivating a lifestyle that enhances your physical, mental, and emotional well-being. Our space is designed to inspire and motivate, offering a balance between state-of-the-art facilities and a welcoming atmosphere that feels like home.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-7/12 overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full transition-transform duration-500 hover:scale-105"
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
              alt="A group of People"
            />
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <Extra />
      <Moreabout />
    </div>
  );
}

export default About;
