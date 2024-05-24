import React from 'react';

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 mt-10">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
