import React from 'react';

const Project = ({ project }) => {
  const { name, features, link, image } = project
  return (
    <div className="max-w-5xl rounded-lg">
      <div className="card shadow-xl">
        <figure className="px-3 pt-3">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <ul className=' rounded-lg border border-gray-200 w-96 text-gray-900'>
            {
              features.map((feature, index) => <li key={index} className='px-6 py-2 border-b border-gray-200 w-full text-sm'>{feature}</li>)
            }
          </ul>
          <div className="card-actions">
            <a href={link}><button className="btn btn-primary">Live Link</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;