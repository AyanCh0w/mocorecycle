import React from 'react';
import Image from 'next/image';

const BenefitsPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-green-200 min-h-screen w-screen p-8">
      <div className='w-full md:w-4/5 mx-auto'>
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Montgomery County's Recycling Success Story
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BenefitCard
          title="Highest Recycling Rate in Maryland"
          description="As of 2022, Montgomery County's recycling rate stands at 58.94%, leading the state in sustainability efforts."
          icon="🏆"
        />
        <BenefitCard
          title="Impressive Waste Diversion"
          description="The county's waste diversion rate, including prevention and recycling efforts, reached 63.94% in 2020."
          icon="♻️"
        />
        <BenefitCard
          title="Significant Material-Specific Increases"
          description="From 2020 to 2022, plastic recycling increased by 110%, and construction materials by 58%."
          icon="📈"
        />
        <BenefitCard
          title="Reduced Waste Per Person"
          description="Despite population growth, waste disposed of per person decreased by 11% from 2018 to 2022."
          icon="👥"
        />
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center my-8">
        Key Recycling Statistics
      </h2>

      <div className="bg-white rounded-lg p-6 shadow-lg">
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Overall recycling rate of 58.94% in 2022, the highest in Maryland</li>
          <li>Approximately 764,375 tons of materials recycled in 2020</li>
          <li>Waste diversion rate of 63.94%, including prevention and recycling efforts</li>
          <li>Significant increases in recycling rates for various materials, including a 110% increase in plastic recycling</li>
          <li>11% decrease in waste disposed of per person from 2018 to 2022</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 text-center my-8">
        New Initiatives in 2023
      </h2>

      <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
        <p className="text-gray-700 mb-4">Montgomery County expanded its recycling program to include:</p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Mattresses and box springs (251.5 tons collected)</li>
          <li>Durable medical equipment (18 tons collected)</li>
        </ul>
      </div>
      <div className='pb-24'></div>
      </div>
    </div>
  );
};

const BenefitCard = ({ title, description, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
      <span className="text-3xl mr-2">{icon}</span>
      {title}
    </h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default BenefitsPage;
