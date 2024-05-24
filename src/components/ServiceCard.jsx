import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-amber-800 shadow-lg rounded-lg overflow-hidden text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl mt-10">
      <div className="px-6 py-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center mb-4 text-white">
            {icon}
          </div>
          <h2 className="text-xl font-semibold text-white lg:text-2xl mb-2">{title}</h2>
        </div>
        <p className="text-white text-md lg:text-lg py-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
