import React from 'react';

const upcomingProjects = [
  { id: 1, title: 'Project 1', description: 'A revolutionary web application.' },
  { id: 2, title: 'Project 2', description: 'An innovative mobile app.' },
  { id: 3, title: 'Project 3', description: 'A groundbreaking AI solution.' },
  // Add more upcoming projects as needed
];

const WorkSection = () => {
  return (
    <section id='work'  className="py-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold  mb-6">Our Works</h1>
        <p className="text-2xl text-gray-600 mb-12">Showcasing soon. Stay tuned!</p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map(project => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WorkSection;
