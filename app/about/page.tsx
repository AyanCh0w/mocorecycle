import Link from 'next/link';
import React from 'react';

const AboutMePage = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-blue-200 min-h-screen w-screen p-8">
      <div className='w-full md:w-4/5 mx-auto'>
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          About Me
        </h1>
        
        <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi, I'm Ayan!</h2>
          
          <div className="mt-6">
            <p className="text-gray-700 text-xl">
              This is my project submittion for the District 8 Congressional App Challenge.
            </p>
          </div>
          <div className="mt-4">
            <p className="text-gray-700 text-xl">
              See more of my projects and about me here: <a href={"https://redbot.pro"}>redbot.pro</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
