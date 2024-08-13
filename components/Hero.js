// components/Hero.js
import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import Typewriter from 'typewriter-effect';

const Hero = ({ blok }) => {
  const bgDesktopImage = blok.background_image.filename;

  return (
    <section 
      {...storyblokEditable(blok)} 
      id="hero" 
      className="flex flex-col justify-center items-center h-screen relative bg-cover bg-center -mt-6" 
      style={{ backgroundImage: `url(${bgDesktopImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <div className="hero-container relative z-20 text-center" data-aos="fade-in">
        <h1 className="text-black text-4xl md:text-6xl font-bold mb-4">{blok.heading}</h1>
        <p className="text-white text-xl md:text-2xl flex items-center">
          I'm a{' '}
          <span className="ml-2 border-b-4 border-blue-500 inline">
            <Typewriter
              options={{
                strings: ['Developer', 'Freelancer', 'Photographer'],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

