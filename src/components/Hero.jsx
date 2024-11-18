import React from 'react';
import backgroundImage from '../assets/background.png'; 

const Hero = () => {
  return (
    <div
      className='w-full h-60 mt-[-24px] md:mt-10 md:min-h-screen flex flex-col lg:px-32 px-5 bg-contain md:bg-cover bg-no-repeat bg-bottom'
      id='Seccion1'
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      
    </div>
  );
};

export default Hero;
